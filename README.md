# covid-19-project

## Project Requirements:

-The code should be written in ES6 as much as possible

-Use the create-react-app generator to start your project.

-app should have one HTML page to render react-redux application

-there should be 2 container components

-there should be 5 stateless components

-there should be 3 routes

-The Application must make use of react-router and proper RESTful routing

-Use Redux middleware to respond to and modify state change

-Make use of async actions and redux-thunk middleware to send data to and receive data from a server

-Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

-Your client-side application should handle the display of data with minimal data manipulation

Covid-19 App backend functionality was build with Ruby on Rails RESTful API and the front end with React Redux.

## Overview

Covid-19 application easily explore and compare the COVID-19 outbreak worldwide, using real-time global data to check information like total, deaths and recovered cases or look into more detailed information for specific country such as: number of cases, recovered active, critical, tests, today’s cases, deaths and population.

## Installation

Fork and clone repo

    $ git clone https://github.com/ivanadokic/covid-19-project

Switch to directory

    $ cd covid-19-project

Switch to the frontend (cd covid-19) and in the other terminal, switch to the backend (cd covid-19-api)

    $ cd covid-19
    $ cd covid-19-api

Startup the server (within the backend terminal)

    $ rails s

Enter in browser to launch the rails server

    $  localhost:3000

Open index.html (within the frontend terminal)

    $ open index.html

## Usage

## Contributing

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Fixit project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/<AnnaWijetunga>/book_selector/blob/master/CODE_OF_CONDUCT.md).
