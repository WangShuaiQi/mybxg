<?php

$dir = 'main';

$filename = 'index';


if(array_key_exists('PATH_INFO', $_SERVER)){
	$path=$_SERVER['PATH_INFO'];
	$str = substr($path, 1);
	$ret = explode("/", $str);
	if(count($ret)==2){
		$dir = $ret[0];
		$filename = $ret[1];
	}else{
		$filename = "login";
	}
}
include("./views/".$dir."/".$filename.".html");

?>