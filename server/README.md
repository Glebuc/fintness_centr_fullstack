# Для запуска сервера:

Запустите команду, которая создаст образ docker:

docker image build -t express-i:latest .

Далее запустите Ваш контейнер:

docker run -it -p 5000:5000 --name express-exam express-i:latest

На порту 5000 localhost (по умолчанию), Вам будет доступен сайт "Фитнес-центра Саров"
