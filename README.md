## MEAN Stack with Angular 2 Tutorial

This is an application demonstrating the basic components needed for a Single Page Application using MongoDB, ExpressJS, Angular 2, and NodeJS.

A working example can be found [here](https://damp-bastion-39490.herokuapp.com/). Additionally, a YouTube tutorial series illustrating how to create this application from scratch can be found [here](https://youtu.be/pDYhwfi7VU0).

## Requirements

- NodeJS
- MongoDB
- @angular/cli

## Description

This applications demonstrates how to setup a RESTful API using NodeJS with Angular 2 Frontend. The application features a blog feed, where users can post comments, like posts, dislike posts, and create/edit/delete their own blog posts.

## Installation

- Install all dependencies in package.json file. This can be done by navigating to the root directory in the command line interface and running the following command:
```
$ npm install
```

- Next, install all of the Angular 2 development dependencies in package.json file:
```
$ cd client/
$ npm install
```

- Installation is complete. Navigate to the root directory and then:  

## Production
-- In root directory:
```
$ npm run build
$ npm start
```
-- Access production server at: http://localhost:8080

## Development
```
$ cd client/
$ ng serve
```
-- In another window, from root directory run:
```
$ npm start
```
-- Access development server at: http://localhost:4200

-- Access API at: http://localhost:8080


## Contributors

David Acosta.

## License

No license.
