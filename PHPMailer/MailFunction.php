<?php
require 'PHPMailerAutoload.php';

$email = $_POST['email'];

$mail = new PHPMailer; 
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'sub5.mail.dreamhost.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@inviteaffairs.com';                 // SMTP username
$mail->Password = 'invite@2016';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;  
$mail->IsHTML(true);




$mail1 = new PHPMailer; 
$mail1->isSMTP();                                      // Set mailer to use SMTP
$mail1->Host = 'sub5.mail.dreamhost.com';  // Specify main and backup SMTP servers
$mail1->SMTPAuth = true;                               // Enable SMTP authentication
$mail1->Username = 'info@inviteaffairs.com';                 // SMTP username
$mail1->Password = 'invite@2016';                           // SMTP password
$mail1->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail1->Port = 587;  
$mail1->IsHTML(true);
$mail1->setFrom('info@inviteaffairs.com', 'Contact Form');
$mail1->addAddress($email);               
$mail1->isHTML(true);            
$mail1->Subject = 'Thank you for contacting us !';
$mail1->Body    = 'We will contact you soon!';
$mail1->send();



$mail->setFrom('info@inviteaffairs.com', 'Contact Form');
$mail->addAddress('aditya@inviteaffairs.com');
// $mail->addAddress('javed@scaledesk.com');               
$mail->isHTML(true);            

$mail->Subject = 'Contact Details';
$mail->Body    = '<p>Name: '.$_POST['name'].'</p><p>Email: '.$email.'</p><p>Number: '.$_POST['mobile'].'</p><p>Message: '.$_POST['message'].'</p>';
if(!$mail->send()) {
    echo 'error :' . $mail->ErrorInfo;
} else {
	header('Location: ../thankyou.html');
}

