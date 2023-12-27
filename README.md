## Фитнесс-центр Атом


### Сборка с помощью docker

1. Если вы используйте docker для запуска, то необходимо проверить конфигурацию соединения с БД в файле `/server/.env`
    - Конфигурация должна выглядить вот так:
    ```
    PORT=7000
    DB_NAME=fitness_center
    DB_USER=postgres
    DB_PASSWORD=gleb
    DB_HOST=postgres-db
    DB_PORT=5432
    #DB_HOST=localhost //localhost необходим только для локального запуска
    SECRET_KEY=very_secret_key594
    ```
2. Далее, когда вы изменили `.env` файл, выполните скрипт для запуска docker compose
    - Если Вы используйте Windows:

        `.\build.bat`
    - Если Вы используйте Linux (Возможно необходимо будет поменять права на файл, используйте команду `chmod 755 build.sh`):

        `.\build.sh`
3. После запуска, контейнеры будут работать по адресам:
    - React - `localhost:3000`
    - Express - `localhost:7000`
    - Postgres - `localhost:5434`


### Сборка с помощью node

1. Если вы используйте node.js для запуска, то необходимо проверить конфигурацию соединения с БД в файле `/server/.env`
    - Конфигурация должна выглядить вот так:
    ```
    PORT=7000
    DB_NAME=fitness_center
    DB_USER=postgres
    DB_PASSWORD=gleb
    #DB_HOST=postgres-db
    DB_PORT=5432 #Проверьте, что Ваша БД развернута на этом порту
    DB_HOST=localhost
    SECRET_KEY=very_secret_key594
    ```
2. Перейдите в папку `/client` и установите зависимости командой `npm install .`
3. Перейдите в папку `/server` и установите зависимости командой `npm install .`
4. Перейдите в папку `/server` и запустите server командой `npm run dev`
4. Далее перейдите в папку `/client` и запустите client командой `npm start`