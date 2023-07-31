<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if (isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    // detect & prevent header injections
    $test = "/(content-type|bcc:|cc:|to:)/i";
    foreach ($_POST as $key => $val) {
        if (preg_match($test, $val)) {
            exit;
        }
    }

    $headers = 'From: ' . $_POST["name"] . ' <' . $_POST["email"] . '>' . "\r\n" .
        'Reply-To: ' . $_POST["email"] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $subject = "Nuevo mensaje de contacto desde tu sitio web";
    $message = $_POST["message"];

    // Replace with your email
    $recipient_email = "sirimarcolucasleonel@gmail.com";

    // Send the email
    mail($recipient_email, $subject, $message, $headers);

    // Optionally, you can redirect the user to a "thank you" page after the form submission.
    // header("Location: thank_you_page.html");
}
?>
