<?php
$from = "dev.env.123456789000@gmail.com";
$to = "todd.eagle@gmail.com";
$subject = "Hello Sendmail";
$message = "This is an test email to test Sendmail. Please do not block my account.";
$headers = "From: $from";

//mail( $to, $subject, $message, implode( '\r\n', $headers ) );
// OR - PHP 7.2.0 or greater
//mail( $to, $subject, $message, $headers );

if ( function_exists( 'mail' ) )
{
    echo 'mail() is available';
}
else
{
    echo 'mail() has been disabled';
}

$mail = mail( $to, $subject, $message, $headers );
echo $mail;

if ($mail) {
    echo("
      Message successfully sent!
   ");
} else {
    echo(" Message delivery failed...");
    echo $mail;
}