<?php
	// request variables // important
	$from = filter_var($_POST["formName"], FILTER_SANITIZE_STRING);
	$emaila = filter_var($_POST["formEmail"], FILTER_SANITIZE_EMAIL);
	$body = filter_var($_POST["formBody"], FILTER_SANITIZE_STRING);
	$headers = 'From: webform@travishagen.com' . "\r\n" .
    'Reply-To: '. $emaila . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$subject = "New Message from TravisHagen.com - ";
	$subject .= $from;
	$email_to = "me@travishagen.com"; // Who the email is to
	
	$email_txt = "You've recieved a new message from:\n";
    $email_txt .= $from ;
	$email_txt .= "\n";
	$email_txt .= $emaila;
		
    $email_txt .= "\n\n";
	$email_subject = $subject; // The Subject of the email 
	$email_txt .= $body; // Message that the email has in it 



	$email_txt .= "\n\n";

	$ok = mail($email_to, $email_subject, $email_txt, $headers);

	if($ok) {
		echo "success";

	}else {
		die("error");
	}

?>