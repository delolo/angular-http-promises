# How to set up a fake HTTP server using Express and Faker

This is a starter project for serving random fake JSON data on your machine. It's taken from [this Egghead.io tutorial][tutorial].

## Prerequisites

You need to have [Node.js][node-download] and [Node Package Manager (npm)][npm] installed. Of course all installs can be done
manually without `npm` but I recommend `npm` because it makes life easier.

## Setup

We'll be using [express] and [faker] and [nodemon]. To install run the following command in the root folder:

```
npm install express faker nodemon
```

## Development

Create a `server.js` script like the example included in this repository:

```
var express = require('express');
var faker = require('faker');

var app = express();

app.get('/random-user', function(req, res) {
	var user = faker.helpers.userCard();
	user.avatar = faker.image.avatar();
	res.json(user);
});

app.listen(3000, function() {
	console.log('App listening on localhost:3000');
});
```

 How to extend this should be self-explanatory. All the details can
be found on the links to [express] and [faker].

## Deployment

To run the server just run

```
nodemon server.js
```

To check out if it's working, go to whichever address you're serving your data. For the example here you'd go to

```
http://localhost:3000/random-user
```

and you should see a random user in JSON format.


[npm]: https://www.npmjs.org/
[node-download]: http://nodejs.org/download/
[express]: http://expressjs.com/
[faker]: http://marak.com/faker.js/
[nodemon]: https://github.com/remy/nodemon
[tutorial]: https://egghead.io/lessons/angularjs-basic-server-setup-for-jwt-authentication