let axions = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axions.get ('http://members.qodr.or.id/')
    .then((response) => {
        if(response.status === 200){
            const html = response.data;
            //console.log(html);
            //menarik HTML menggunakan cheerio
            console.log(html);
            const $ = cheerio.load(html);
                let qodrList = [];
                //targer scrapping, menggunakan cheerio
                //scrapping pertama id, class
                    $('.fh5co-project a').each(function(i, elem){
                        //mengisi data qodrList
                        //find() => mencari, trim() => membersihkan space
                        qodrList[i] = {
                            nama: $(this).find('h2').text().trim(),
                            status: $(this).find('p').text().trim()
                        }
                    });
                    const qodrListTrim = qodrList.filter(n => n != undefined)
                    fs.writeFile('data/dataSantri.json',
                    JSON.stringify(qodrListTrim, null, 4), (err) => {
                        console.log('write scrapping is succes')
                    })
        }
    }), (error) => console.log(err);