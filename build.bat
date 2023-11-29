@echo off

docker compose up --remove-orphans --build -d postgres-db
timeout /t 10 /nobreak
docker compose up --remove-orphans --build -d express-app react-app