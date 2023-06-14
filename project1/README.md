## Project #1
Give a high-level overview of the project purpose -- this project was built to gain knowledge of endpoints using Nodejs
- note: 
## refer to ReadMe inside ada2.0 for a complete build process of the application.
- (*Situation*) This application was built to test Endpoints using Nodejs, Express and Postman and was created to gain knowledge about api endpoints using JWT
- (*Task*) The overall structure of the application was designed around test cases that allows a user to add notes to a log which then is stored within a database using sqlite3.
- (*Action*) I was tasked with creating base files and database as well as help with the api testing
- The following shows a delete method where it uses /:id to select specific parts in the data
- (*Result*)![image](https://github.com/BigThinkerYes/Portfolio-Template/assets/21373535/39e12c57-a44f-4941-9e69-409b965b9a78)


## Technologies
- List all technologies and versions here
- The dependencies and versions used are the following:
      "cors": "2.8.5",
      "dotenv": "^16.1.4",
      "express": "^4.18.2",
      "express-openid-connect": "^2.16.0",
      "express-validator": "^7.0.1",
      "jsonwebtoken": "^9.0.0",
      "morgan": "1.10.0",
      "path": "^0.12.7",
      "sequelize": "^6.32.0",
      "sqlite": "^4.2.1",
      "sqlite3": "^5.1.6",
      "nodemon": "^2.0.22"
- The tools used for testing were Visual Studio Code and postman

## Competencies
### JF 3.6
- Can implement a RESTful API
- one way this was demonstrated this poject was with | router.get("/:id", async (req, res, next) => { | which gets all messages based on there id
- Some actions taken in this project came from testing the seedData file against api route to see if it pulled correct data   
- This project was built with a team of 3 and we each learned how to communicate well while be in different circumstances that could have delayed the testing
- The end goal of this project was to work together and have a funtional server application which went well. 

### JF 5.4
- Understands and is able to identify and create test scenarios
- There were several test scenarios where we need to test the vaule comming in so a try catch was use to filter out the data 
- The results led the team discover how data was transmitted when routes were protected and when they weren't protected. 
- The project gave me a great understanding how endpoints could be tested using Nodejs, Sequelize, and Postman.
