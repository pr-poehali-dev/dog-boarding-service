CREATE TABLE IF NOT EXISTS t_p55554963_dog_boarding_service.gallery_photos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);