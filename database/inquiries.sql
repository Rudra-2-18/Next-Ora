CREATE DATABASE IF NOT EXISTS the_next_ora CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE the_next_ora;

CREATE TABLE IF NOT EXISTS inquiries (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(120) NOT NULL,
  business_type VARCHAR(60) NOT NULL,
  city VARCHAR(80) NOT NULL,
  services TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_phone_created_at (phone, created_at),
  INDEX idx_email_created_at (email, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
