<?php

$data = file_get_contents('coba.json');
$santri = json_decode($data, true);

var_dump($santri);
echo $santri["dosen"]["dosen2"];

?>