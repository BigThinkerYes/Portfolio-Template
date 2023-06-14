# learning
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

# you can now run the project:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

