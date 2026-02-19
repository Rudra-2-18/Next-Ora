<?php
declare(strict_types=1);

require_once __DIR__ . '/../controllers/InquiryController.php';

$routes = require __DIR__ . '/../routes/web.php';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$uriPath = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH) ?: '/submit-inquiry.php';
$path = '/' . ltrim((string)basename($uriPath), '/');

$target = $routes[$method][$path] ?? $routes[$method]['/submit-inquiry.php'] ?? null;

if ($target === null) {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(404);
    echo json_encode([
        'success' => false,
        'message' => 'Route not found.',
        'errors' => [],
    ]);
    exit;
}

[$controllerClass, $action] = $target;
$controller = new $controllerClass();
$controller->$action();
