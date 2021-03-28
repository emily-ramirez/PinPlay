# Design

## Description

## Architecture

## Class Diagram

## Sequence Diagram

## Design Patterns
**Design Pattern (Behavioral) - Command**\
The Axios object encapsulates all of the information from the backend so that it can accessed by the front end easily.\
![Class Diagram](media/design/command_pattern.png)\
Playlist: https://github.com/samantha-milligan/heroku/blob/1dc08ae01d93746a8937c520a9ee9a2287402109/pinplay_api/views.py\
Axios: https://github.com/emily-ramirez/PinPlay/blob/master/pinplay_front/src/apis/django.js \
FilterList: https://github.com/emily-ramirez/PinPlay/blob/master/pinplay_front/src/components/Filters.js \\

**Design Pattern (Structural) - Flyweight**\
When you use create() on Axios with a baseURL, this allows the app to have an absolute URL for every request. This design pattern fits because we do not have to keep creating a object every single time a request is made. \
![Class Diagram](media/design/flyweight_pattern.png)\
Django: https://github.com/emily-ramirez/PinPlay/blob/master/pinplay_front/src/apis/django.js

## Design Principles
