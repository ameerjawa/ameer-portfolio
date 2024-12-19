<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['field1'] ?? 'Anonymous';
    $email = $_POST['field2'] ?? 'no-reply@example.com';
    $message = $_POST['field3'] ?? 'No message provided';
    $ownerEmail = "ameer0233@gmail.com";
    $subject = "New Message from Portfolio Site";

    // HTML email content
    $email_message = "
    <html> 
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: #fff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .email-header {
                background-color: #0078d7;
                color: white;
                padding: 20px;
                text-align: center;
            }
            .email-header h1 {
                margin: 0;
                font-size: 24px;
            }
            .email-body {
                padding: 20px;
            }
            .email-body h2 {
                color: #0078d7;
                margin-bottom: 10px;
            }
            .email-footer {
                background-color: #f4f4f4;
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #666;
            }
            .email-footer a {
                color: #0078d7;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class='email-container'>
            <div class='email-header'>
                <h1>New Message Received</h1>
            </div>
            <div class='email-body'>
                <h2>Details:</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Message:</strong></p>
                <p>$message</p>
            </div>
            <div class='email-footer'>
                <p>This email was sent from your portfolio website.</p>
                <p><a href='mailto:$email'>Reply to $name</a></p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Send email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    if (mail($ownerEmail, $subject, $email_message, $headers)) {
        header('Location: ../../index.html');
        exit();
    } else {
        echo "Failed to send the email. Please try again later.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .form-container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        .form-container h1 {
            margin-bottom: 20px;
            color: #0078d7;
        }
        .form-container input,
        .form-container textarea,
        .form-container button {
            width: 100%;
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .form-container button {
            background: #0078d7;
            color: white;
            border: none;
            cursor: pointer;
        }
        .form-container button:hover {
            background: #005bb5;
        }
    </style>
</head>

<body>
    <div class="form-container">
        <h1>Contact Me</h1>
        <form action="" method="POST">
            <input type="text" name="field1" placeholder="Your Name" required>
            <input type="email" name="field2" placeholder="Your Email" required>
            <textarea name="field3" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
</body>

</html>
