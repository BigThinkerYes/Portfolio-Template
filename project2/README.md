# Project name is Hustlers
## requirements for project 2
- must have supabase configured in server and for local testing -- https://supabase.com/
- choose The table menu on the left and name it chatMessage and create a row called message
- next click the settings icon -> api -> and copy the api key and url  and place in a .env file
- you will need to create a supabaseClient.js file to store the connection values for the .env file.
- import { createClient } from '@supabase/supabase-js';
- const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
- const supabaseKey = process.env.REACT_APP_ANON_KEY
- const supabase = createClient(supabaseUrl, supabaseKey)
- export default supabase;

- you need to create policies for create, read, update, delete and can set the sql to true

# you can now run the project:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## This project was designed to implement backend technology (postgresql) with frontend (reactJS) 
- (*Situation*) This application was built to test deployment and the frontend uses JWT to authorize login
- (*Task*) The overall structure of the application was designed to allow users to add notes to a log which then is stored within a database using postgresql.
- (*Action*) I was tasked with creating base files and database configuration as well as help with the Login
- (*Result*) here is the link to a deployed version of the supabase site https://calm-fairy-b68c30.netlify.app/

## Technologies
- List all technologies and versions here
- The dependencies and versions used are the following:
    "@auth0/auth0-react": "^2.1.0",
    "@chakra-ui/react": "^2.7.0",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.11.16",
    "@mui/material": "^5.13.1",
    "@supabase/auth-ui-react": "^0.4.2",
    "@supabase/supabase-js": "^2.24.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "framer-motion": "^10.12.16",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.11.2",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
    "web-vitals": "^2.1.4"
- The tools used for testing were Visual Studio Code and supabase
- 
## Competencies
### JF 4.3
- Is able to build, manage and deploy code into the relevant environment
- one way this was demonstrated this poject was by using netlify and supabase
- Some actions taken in this project came from testing the postgresql RLS policies in order to get funtions to work properly.   
- This project was built with the idea that communication could be built using memos.
- The end goal of this project was to work together and have a application each user could log in and talk to. 

### JF 5.4
- Understands and can apply structured techniques to problem solving, can debug code and can understand the structure of programmes to identify and resolve issues
- There were several scenarios where problem solving played a big part when not having the policy correctly configured the data would not be effected leaving it unchanged 
- The results led the team discover how data was transmitted using (RLS)Row-Level Security. 
- The project gave me a great understanding how components and postgresql could be used in Reactjs.
