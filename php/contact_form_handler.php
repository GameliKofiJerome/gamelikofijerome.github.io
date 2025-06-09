<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

$response = ["success" => false];

function sanitize($input) {
  return htmlspecialchars(strip_tags(trim($input)));
}

$name = sanitize($data['name'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = sanitize($data['message'] ?? '');

if (!$name || !$email || !$message) {
  $response['error'] = "All fields are required.";
  echo json_encode($response);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $response['error'] = "Invalid email address.";
  echo json_encode($response);
  exit;
}

$to = "davorgamelikofijerome@gmail.com"; // Replace with your email
$subject = "New message from $name";
$body = "Name: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
  $response['success'] = true;
} else {
  $response['error'] = "Failed to send message. Please try again.";
}

echo json_encode($response);
exit;
?>