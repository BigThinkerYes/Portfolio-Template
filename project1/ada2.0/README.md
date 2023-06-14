# express-get-adas-journal
# this project is backend only -- and can be viewed using postman(https://www.postman.com/)
## Here are the steps to get the application working.
## inside your terminal (bash or cmd) go to the directory of your cloned project and type the following:
npm install
npm i sqlite3
npm run seed # runs the seed file
npm start

## In the package.json file check to make sure these packages are up to date
npm i jsonwebtoken -- if using
npm i express-validator
npm i express-openid-connect
npm i sequelize
npm i sqlite3
npm i dotenv
--
## Next steps setup a account with https://auth0.com/
choose Applications from the menu on the right create a single page application
go to settings 
- copy the domain and client ID an place in .env file in root directory
- set the Allowed Callback URLs, Allowed Logout URLs, Allowed Web Origins to http://localhost:3000
the 3000 is the default port number - but you can change it if needed. 
- click save changes
create .env file for jwt secret

## Let's view adas journal
-- install postman is the first step
https://www.postman.com/

-- next step
In package.json file if not added add to scripts ----> "start-dev": nodemon server.js"
To run nodemon ---> npm run start-dev

-- when sever is running open postman
- choose workspaces from the top then create workspace
- you now access to the GET, POST, PUT, DELETE
- to test endpoints use the api (https://localhost:3000/adas_journal/)
   


-- 
how to check endpoints
```
use link to access login page on local enviroment : 'http://localhost:3000/login'
