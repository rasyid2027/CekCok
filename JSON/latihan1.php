<?php

// $santri = [
//     [
//         "nama" => "mustoto",
//         "nim" => "12312312",
//         "email" => "mustotohaphap@gmail.com"
//     ],
//     [
//         "nama" => "mustoto",
//         "nim" => "12312312",
//         "email" => "mustotohaphap@gmail.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=data', 'root', 'password');
$db = $dbh->prepare('SELECT * FROM santri_cekcoks');
$db->execute();
$santri = $db->fetchAll(PDO::FETCH_ASSOC);



$santri = json_encode($santri);
echo $santri;

?>