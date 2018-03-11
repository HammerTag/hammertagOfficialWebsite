<?php
// multiple recipients
$to  = 'hammertaginc@gmail.com' . ', '; // note the comma
$to .= 'mdjunaid1993@gmail.com';

$subject = 'Website Creation Request';

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

$message = '<html><body>';
$message .= '<img src="//css-tricks.com/examples/WebsiteChangeRequestForm/images/wcrf-header.png" alt="Website Change Request" />';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "</table>";
$message .= "</body></html>";


// Mail it
mail($to, $subject, $message, $headers);
?>