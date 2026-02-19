<?php
declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../models/Inquiry.php';

class InquiryController
{
    private array $allowedBusinessTypes = [
        'Cafe', 'Salon', 'Gym', 'Travel Agency', 'Clinic', 'Coaching Institute', 'Other Local Business'
    ];

    private array $allowedServices = [
        'Website Development', 'Instagram Growth', 'WhatsApp Automation', 'Combo Package'
    ];

    public function submit(): void
    {
        header('Content-Type: application/json; charset=utf-8');

        if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
            $this->respond(405, false, 'Method not allowed.');
            return;
        }

        $payload = $this->sanitize($_POST);
        $errors = $this->validate($payload);

        if (!empty($errors)) {
            $this->respond(422, false, 'Please correct the form fields and try again.', $errors);
            return;
        }

        try {
            $inquiry = new Inquiry(getDatabaseConnection());

            if ($inquiry->hasRecentDuplicate($payload['phone'], $payload['email'], $payload['message'])) {
                $this->respond(429, false, 'Duplicate inquiry detected. Please wait before submitting again.');
                return;
            }

            if (!$inquiry->create($payload)) {
                $this->respond(500, false, 'Unable to save your inquiry right now.');
                return;
            }

            $this->respond(201, true, 'Thank you. Your inquiry has been submitted successfully.');
        } catch (Throwable $e) {
            error_log('Inquiry error: ' . $e->getMessage());
            $this->respond(500, false, 'Server error. Please try again shortly.');
        }
    }

    private function sanitize(array $input): array
    {
        $services = $input['services'] ?? [];
        if (!is_array($services)) {
            $services = [];
        }

        return [
            'name' => $this->cleanText((string)($input['name'] ?? '')),
            'phone' => preg_replace('/[^0-9+]/', '', (string)($input['phone'] ?? '')),
            'email' => filter_var(trim((string)($input['email'] ?? '')), FILTER_SANITIZE_EMAIL),
            'business_type' => $this->cleanText((string)($input['business_type'] ?? '')),
            'city' => $this->cleanText((string)($input['city'] ?? '')),
            'services' => array_values(array_filter(array_map([$this, 'cleanText'], $services))),
            'message' => $this->cleanText((string)($input['message'] ?? '')),
        ];
    }

    private function validate(array $payload): array
    {
        $errors = [];

        if ($payload['name'] === '' || mb_strlen($payload['name']) < 2 || mb_strlen($payload['name']) > 80) {
            $errors['name'] = 'Please enter a valid full name.';
        }

        if (!preg_match('/^\+?[0-9]{10,15}$/', $payload['phone'])) {
            $errors['phone'] = 'Please enter a valid phone number.';
        }

        if (!filter_var($payload['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please enter a valid email address.';
        }

        if (!in_array($payload['business_type'], $this->allowedBusinessTypes, true)) {
            $errors['business_type'] = 'Please choose a valid business type.';
        }

        if ($payload['city'] === '' || mb_strlen($payload['city']) > 80) {
            $errors['city'] = 'Please enter a valid city.';
        }

        if (count($payload['services']) < 1) {
            $errors['services'] = 'Please select at least one service.';
        } else {
            foreach ($payload['services'] as $service) {
                if (!in_array($service, $this->allowedServices, true)) {
                    $errors['services'] = 'One or more selected services are invalid.';
                    break;
                }
            }
        }

        if ($payload['message'] === '' || mb_strlen($payload['message']) < 10 || mb_strlen($payload['message']) > 1000) {
            $errors['message'] = 'Please provide message details between 10 and 1000 characters.';
        }

        return $errors;
    }

    private function cleanText(string $value): string
    {
        $value = trim(strip_tags($value));
        return preg_replace('/\s+/', ' ', $value) ?? '';
    }

    private function respond(int $status, bool $success, string $message, array $errors = []): void
    {
        http_response_code($status);
        echo json_encode([
            'success' => $success,
            'message' => $message,
            'errors' => $errors,
        ], JSON_UNESCAPED_UNICODE);
    }
}
