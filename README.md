# Project Nostos 
The prototype permitting application for the City of Boston 

## Table of Contents
- [Running the Project](#running-the-project)
    - [Dependencies](#project-dependencies)
    - [Running the React.js client](#running-client)
    - [Running the Node.js Express server](#running-server)
- [Resources](#resources)
    - [Developement Tools](#development-tools)
    - [External Resources](#external-resources)

- [About the Project](#about-the-project)
    - [Issue](#issue)
    - [Questions](#questions)
    - [Scope of Work](#scope-of-work)

## Running the Project
Information regarding dependencies, requirements, and commands used to build or run the project

### Dependencies
Before running the project, there are several dependencies for the front end and the back end.

First, make sure you have the latest version of NPM and Node.js installed. You can download and install it [here](https://nodejs.org/en/download/) or follow the instructions on their site to install it through other means.

Make sure node is up to date with :
`npm i npm@latest -g`

With NPM installed, download and install yarn with:
`npm i --global yarn` 

In the project directory, run:
`cd client && yarn`

Move back up to the top level of the directory, and run:
`cd server && yarn`

This should install all dependencies for the project using our yarn.lock files. Yarn will further be used to run the front end and back end concurrently.

Install nodemon using
`npm i nodemon -g`
Nodemon is used for managing live updates to our Node.js server

Install concurrently using
`npm i -g concurrently`
This allows us to run two commands simulataneously, using react-scripts and nodemon to manage live updates for both the front end and the back end.

Finally, in the top level, run
`yarn dev`
To serve the client and the server on their respective ports concurrently.

### Running the React.js client
To run only the front end, use
`cd client && npm start`
To create a build of the client, run
`cd client && npm run build`

### Running the Node.js Express server
To run the server, use
`cd server && nodemon server.js`

## Resources
Information regarding the tools and resources essential to the design and development of the project 

### Developement Tools
[Visual Studio Code](https://code.visualstudio.com)
[React.js](https://reactjs.org)
[Create React App](https://github.com/facebook/create-react-app)
[Node.js](https://nodejs.org/en/docs/)
[Nodemon](https://nodemon.io)
[Concurrently](https://www.npmjs.com/package/concurrently)
[Yarn](https://yarnpkg.com/en/)

### External Resources
[City of Boston Patterns Library](https://github.com/CityOfBoston/patterns)
[City of Boston Public Data Portal](https://data.boston.gov)
[MapBox](https://www.mapbox.com)

## About the Project
Information regarding the process and purposes of this project

### Issue
Moving day--September 1--is a big day in Boston. 
A large number of permits for moving trucks and moving pods are pulled for the day. 
While moving occurs citywide, permits are always pulled for the neighborhoods of Fenway, Mission Hill, and the North End. 
These neighborhoods are small, and permit spaces are finite.
These neighborhoods host a high density of movers.
Permits are presently issued for entire days, but trucks or pods often occupy spaces for a set of hours.
Only some people are able to hold moving spaces legally, producing both free riding on permitted spaces as well as illegal moves which may cause further congestion and safety hazards.

### Questions
Focusing on one neighborhood with high moving permitting, can we create a system that maximizes people’s ability to move legally and safely?
For what streets are moving permits ALWAYS pulled on moving day (Sept 1)?
How would people ‘reserve’ a space?
How long should people ‘reserve’ a space for?
How would a permitting officer/ticketing officer know who has the space reserved on a specific day and time?

### Scope of Work
Gordon College Consultants (below) will help Principle Stakeholders identify preliminary answers to the above Questions by prototyping a digital solution to the above Issue. The prototyped digital solution will require a deep spatial understanding of permitting data, a deep understanding of the experience of the current permitting system, and the skills and resources necessary to fabricate a working alpha (or beta!) digital system. This prototype will be delivered by the end of the Gordon College spring semester. Should the Gordon College team submit with ample time left (and should they be interested in pursuing a next step of those prototype), there is possibility for additional scoping.

The New Urban Mechanics will provide access to data, key stakeholders, and other resources as necessary. They will also provide regular feedback (frequency established in partnership with the team).

The prototype delivered by Gordon College Consultants will be used as a proof-of-concept design and catalyst for internal stakeholder conversations around moving day permitting, and may not be adopted as a final solution to the above Issue.

### Moving Truck Permit Dataset - https://data.boston.gov/dataset/open-moving-truck-permits
### Current Street Sweeping Schedules - https://data.boston.gov/dataset/street-sweeping-schedules
### Current Moving Permit Reservation System - https://www.boston.gov/how-reserve-parking-spot-your-moving-truck
### General Moving Day Information - https://www.boston.gov/movingx
### Proposal- https://docs.google.com/document/d/1U_7Pi0U9DdZ-eEz-trZTXDP3XaLs8rmhaDX_kh44vkM/edit#heading=h.6cxtcn9dvq82
