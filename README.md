# Сервис поиска фильмов movies-explorer

## Структура проекта
- Frontend - текущий репозиторий
- [Backend](https://github.com/trallik74/movies-explorer-api)

## Технологии
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Что сделал
- создал сервер на Express, который включает в себя модели MongoDB для сохранения фильмов и регистрации, авторизации пользователей;
- для описанного функционала разработал контроллеры и роуты Api;
- в целях защиты роутов добавил:
серверную аутентификацию запросов, разрешённые cors-соединения, предварительную валидацию приходящих данных через Joi,ограничение числа запросов в минуту;
- сверстал компоненты интерфейса на React;
- описал логику приложения для авторизованных и неавторизованных пользователей;
- реализовал асинхронные запросы на сервер;
- настроил фильтрацию данных на стороне клиента;
- готовый проект задеплоил на Яндекс облако, настроил Nginx, добавил HTTPS сертификаты;

## Функционал
- регистрация и авторизация пользователя
- главная: страница портфолио
- фильмы: возможность сохранить фильм, фильтрация по названию и продолжительности.
- сохраненные фильмы: удаление фильмов из сохраненных, фильтрация и продолжительности.
- профиль: редактирование профиля
- вывод нотификаций пользователю
