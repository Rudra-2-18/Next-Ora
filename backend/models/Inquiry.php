<?php
declare(strict_types=1);

class Inquiry
{
    public function __construct(private PDO $pdo)
    {
    }

    public function hasRecentDuplicate(string $phone, string $email, string $message): bool
    {
        $sql = "SELECT id FROM inquiries WHERE (phone = :phone OR email = :email) AND message = :message AND created_at >= (NOW() - INTERVAL 10 MINUTE) LIMIT 1";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':phone' => $phone,
            ':email' => $email,
            ':message' => $message,
        ]);

        return (bool) $stmt->fetchColumn();
    }

    public function create(array $payload): bool
    {
        $sql = "INSERT INTO inquiries (name, phone, email, business_type, city, services, message, created_at) VALUES (:name, :phone, :email, :business_type, :city, :services, :message, NOW())";
        $stmt = $this->pdo->prepare($sql);

        return $stmt->execute([
            ':name' => $payload['name'],
            ':phone' => $payload['phone'],
            ':email' => $payload['email'],
            ':business_type' => $payload['business_type'],
            ':city' => $payload['city'],
            ':services' => implode(', ', $payload['services']),
            ':message' => $payload['message'],
        ]);
    }
}
