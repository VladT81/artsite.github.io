<?php
class dbMongo extends MongoClient{
    public $connect = new MongoClient();
}

/*
$document = [
    'name'=> "Рыбка на дне",
    'format'=> "лист А1",
    'description'=> "Картина выполнена гуашью на ватмане форматои А1 ()",
    'price'=> "договорная",
    'urlImg'=> "/img/fish.png"
];*/
$connect = new MongoClient();
$collection = $connect->art->works;
//$collection->insert($document);
$list = $collection->find();
while($document = $list->getNext())
{
   print_r($document)+"<br>";
}

$connect->close();
