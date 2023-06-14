# express-get-adas-journal

adasjournal.onrender.com

steps to install application
```bash
npm install
npm i sqlite3
npm run seed # runs the seed file
npm start

--
make sure packages are updated
npm i jsonwebtoken -- if using
npm i express-validator
npm i express-openid-connect
npm i sequelize
npm i sqlite3
npm i dotenv
--
create .env file for jwt secret

--
In package.json file if not added add to scripts ----> "start-dev": nodemon server.js"
To run nodemon ---> npm run start-dev
--
main route for testing endpoints -- https://localhost:3000/adas_journal/


-- 
how to check endpoints
```
use link to access login page on local enviroment : 'http://localhost:3000/login'
