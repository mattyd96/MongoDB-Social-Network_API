# MongoDB Social Network API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A simple backend for a social network created using node, express, and mongoDB. It has been written to satisfy the following user story and acceptance criteria.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Stack

* nodejs
* express
* MongoDB

## Installation and deployment

You will need mongodb installed on your local computer. This is also only a backend so you will need to test paths either in your browser or with a request testing platform such as postman or insomnia.


```md
npm install
```

then run with

```md
npm run watch
# or
npm start
```

## Demo



## License

MIT


## Links

[My Github Account](https://github.com/mattyd96)

[Email: matthewdcodes@gmail.com](mailto:matthewdcodes@gmail.com)