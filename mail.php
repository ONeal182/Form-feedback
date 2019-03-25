<?php 

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);

$file = 'json.txt';
$data = json_decode(file_get_contents($file));
$number = (end($data)->number) + 1;
$newdata = array('name'=>$name, 'email'=>''.$email.'', 'phone'=> ''.$phone.'',  'number' => ''.$number.'',);
$data[] = $newdata;
file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE));




$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																					
$mail->SMTPAuth = true;               
$mail->Username = 'testbl@inbox.ru';
$mail->Password = 'zzAA123zz';
$mail->SMTPSecure = 'ssl';                           
$mail->Port = 465; 

$mail->setFrom('testbl@inbox.ru');
$mail->addAddress($email);     

$mail->Subject = 'тестовое задание, заказ забора';
$mail->Body    = '' .$name. ' заказ №'.$number. ' сформирован. В ближайшее время наш специалист свяжется с вами по телефону ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} 
else {
     echo json_encode($newdata, JSON_UNESCAPED_UNICODE);
};





