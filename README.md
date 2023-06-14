# Final Portfolio

This repository is a collection of some of my key learnings during my time with the Multiverse apprenticeship program at Verizon.
## The complete in depth detail of each project can be found in project1 and project2 folders
## Competencies:
# Ada2.0 --- backend application using nodejs, Sequelize, sqlite3 and express
- (Situation) This application was built to test Endpoints using Nodejs, Express and Postman and was created to gain knowledge about api endpoints using JWT
- (Task) The overall structure of the application was designed around test cases that allows a user to add notes to a log which then is stored within a database using sqlite3.
- (Action) I was tasked with creating base files and database as well as help with the api testing
- JF 3.6
- Can implement a RESTful API
- one way this was demonstrated this poject was with | router.get("/:id", async (req, res, next) => { | which gets all messages based on there id
- Some actions taken in this project came from testing the seedData file against api route to see if it pulled correct data
- This project was built with a team of 3 and we each learned how to communicate well while be in different circumstances that could have delayed the testing
- The end goal of this project was to work together and have a funtional server application which went well.
- JF 5.4
- Understands and is able to identify and create test scenarios
-There were several test scenarios where we need to test the vaule comming in so a try catch was use to filter out the data
- The results led the team discover how data was transmitted when routes were protected and when they weren't protected.
- The project gave me a great understanding how endpoints could be tested using Nodejs, Sequelize, and Postman.

# Hustlers --- CRUD applications using reactjs and postgresql
- (Action) I was tasked with creating base files and database configuration as well as help with the Login
- (Result) here is the link to a deployed version of the supabase site https://calm-fairy-b68c30.netlify.app/
- JF 4.3
- Is able to build, manage and deploy code into the relevant environment
- one way this was demonstrated this poject was by using netlify and supabase
- Some actions taken in this project came from testing the postgresql RLS policies in order to get funtions to work properly.
- This project was built with the idea that communication could be built using memos.
- The end goal of this project was to work together and have a application each user could log in and talk to.
- JF 5.4
- Understands and can apply structured techniques to problem solving, can debug code and can understand the structure of programmes to identify and resolve issues
- There were several scenarios where problem solving played a big part when not having the policy correctly configured the data would not be effected leaving it unchanged
- The results led the team discover how data was transmitted using (RLS)Row-Level Security.
- The project gave me a great understanding how components and postgresql could be used in Reactjs.

## Overview of Apprenticeship
- **Host Company**: Verizon
- **Duration**: 1yr
- **Link to Portfolio Website**: https://calm-fairy-b68c30.netlify.app/

## Portfolio Introduction
- I am Lavor
- I am a apprentice on the sre cloud infrastructure team
- My areas of interest are reactjs, nodejs, java, webflux, aws, aws lambdas

## requirements for project 1 - Ada2.0
This project introduced me to the backend were I was able to learn about postman and how to use Nodejs
with express to make custom endpoints that use jwt and protected routes
- must have program to test apis a example would be postman
- the project was created to show knowledge of oAuth and creating CRUD endpoints that test user actions 
## Technologies
- React
- Nodejs
- Postman
- JWT
- Express

## requirements for project 2 - Hustlers(communication app)
## Technologies
- React
- Postgresql
- JWT
- supabase.com
- must have supabase configured in server and for local testing -- https://supabase.com/
- the project uses a relational database known as postgres to create read delete and update data in real time on a server
- purpose of project was to implement a chat funtionality that could show real time response from a user
