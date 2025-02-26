<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$fullName = $_POST['fullName'];
$email = $_POST['email'];

$to = $email;
$subject = "Thank you for registering for Higher Life Conference 2025";
$message = "
<html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank you, $fullName!</h1>
<p>We have received your registration for Higher Life Conference 2025. We appreciate your interest in our event.</p>
<p>Please check your email for any updates or confirmations.</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Higher Life Church <noreply@lightlifechurch.com>" . "\r\n";

mail($to, $subject, $message, $headers);

?>