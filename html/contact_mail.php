<?php

if (isset($_POST["name"]) && isset($_POST["email"])) {
    $toEmail = "paigecommunityrides@gmail.com";
    $mailHeaders = "From: Sheena for Newberry<mail-service@paigefornewberry.com>";
    $subject = "I want to help!";
    $msg = "
    Hi Sheena's Campaign! \n
    My name is {$_POST["name"]}, my contact email is {$_POST["email"]} and I would like to {$_POST["volunteer"]}! \n
    Thank you!";

    if (mail($toEmail, $subject, $msg, $mailHeaders)) {
        print "<p class='success'>Message sent!</p>";
    } else {
        print "<p class='Error'>The campaign has ended.  Messaging has been disabled.</p>";
    }
}
