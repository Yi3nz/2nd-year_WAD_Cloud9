<?php
// Check for empty fields
if(empty($_POST['username'])  		||
   empty($_POST['email']) 		||
   empty($_POST['recipe'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$username = $_POST['username'];
$email_address = $_POST['email'];
$recipe = $_POST['recipe'];
	
// Create the email and send the recipe to that email
$to = 'siopauchi@yahoo.ie'; // This is where the form will send a message to.
$email_subject = "Recipe Submission Form:  $username";
$email_body = "You have received a new recipes from your website submission form.\n\n"."Here are the details:\n\nUsername: $username\n\nEmail: $email_address\n\nRecipe:\n$recipe";
$headers = "From: noreply@yourdomain.ie\n"; // This is the email address the generated message will be from.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>