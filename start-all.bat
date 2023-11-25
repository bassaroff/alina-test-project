@echo off

rem Start Backend
cd backend
start npm run start-server

rem Start Web
cd ..\web
start npm start
