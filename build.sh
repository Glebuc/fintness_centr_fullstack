#!/bin/bash

docker compose up --remove-orphans --build -d postgres-db
sleep 10
docker compose up --remove-orphans --build -d express-app react-app