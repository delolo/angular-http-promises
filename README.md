# Seeing how $http and .then work and how they handle errors when chained

## Prerequisites

You need to have [Node.js][node-download] and [Node Package Manager (npm)][npm] installed. Of course all installs can be done manually without `npm` but I recommend `npm` because it makes life easier.

## Setup

We'll be using [express] and [nodemon]. To install run the following command in the root folder:

```
npm install express nodemon
```

## Deployment

To run the server just run

```
nodemon server.js
```

To check out if it's working, go to whichever address you're serving your data. For the example here you'd go to

```
http://localhost:3000/random-user
```



[npm]: https://www.npmjs.org/
[node-download]: http://nodejs.org/download/
[express]: http://expressjs.com/
[faker]: http://marak.com/faker.js/
[nodemon]: https://github.com/remy/nodemon
[tutorial]: https://egghead.io/lessons/angularjs-basic-server-setup-for-jwt-authentication