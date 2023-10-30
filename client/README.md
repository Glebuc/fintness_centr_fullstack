# Для запуска FRONT-END:

Запустите команду, которая создаст образ docker:

docker image build -t react-i:latest .

Далее запустите Ваш контейнер:

docker run -it -p 8000:3000 --name react-exam react-i:latest

На порту 8000 localhost, Вам будет доступен сайт "Фитнес-центра Саров"

