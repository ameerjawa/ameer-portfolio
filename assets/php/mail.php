<?php
$name = $_POST['field1'];
$email = $_POST['field2'];
$subject = "From portfolio Site";
$message = $_POST['field3'];
echo "$name";

$email_message = "

Name: " . $name . "
Email: " . $email . "
Subject: " . $subject . "
Message: " . $message . "

";

//mail($email, "New Message", $email_message);
header('location:../../index.html')

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <form action="" method="POST">


        <input type="text" name="field1">
        <Button type="submit">ssd</Button>
    </form>
</body>

</html>