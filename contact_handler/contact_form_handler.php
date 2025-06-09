<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars(strip_tags($data["name"]));
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL) ? $data["email"] : null;
$message = htmlspecialchars(strip_tags($data["message"]));

if (!$name || !$email || !$message) {
    echo json_encode(["success" => false, "error" => "Invalid input"]);
    exit;
}

$to = "davorgamelikofijerome@gmail.com";
$subject = "New Contact Form Message from $name";
$body = "Name: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $email";

mail($to, $subject, $body, $headers);

echo json_encode(["success" => true]);
?>