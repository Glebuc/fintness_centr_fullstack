@echo off

docker compose up --remove-orphans --build -d postgres-db
timeout /t 10 /nobreak
docker compose up --remove-orphans --build -d express-app react-app
timeout /t 5 /nobreak
docker compose stop express-app
docker compose start express-app
