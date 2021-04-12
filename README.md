# Chat Application

This app utilizes ReactJS and the Chat Engine framework to produce a realtime chat application. useState Hooks manage the state throughout the app. Credentials are created through Chat Engine and are passed via Axios. These credentials are kept private with the use of environmental variables. Ónly the Admin can add new users and manage which chat rooms they have access to.

# How to Use the Chat Application

- In your terminal, change directory into the React application and type 'npm install' for the React app to install its node modules. 

- You will also need to install the following dependencies:
  - axios
  - react-chat-engine
  - @ant-design/icons

- In the terminal, type the following: 
  - npm install --save axios react-chat-engine @ant-design/icons

- Visit [Chat Engine](https://chatengine.io/) and create an account.

- In the Chat Engine dashboard, create a new project, new user, and a new chat.

- In the React project, create a dotenv file. Inside the file, add the Project ID to a 'React_App_PROJECT_ID' variable.

- In your terminal, type in 'npm start' to run the React App locally

- Log in using the credentials that were created on Chat Engine's website.

- Have fun!

# Future Features

- Sound Effects when a message sends
- The ability to edit a message
- The ability to delete a message
- Update logo

# Bugs

- There are currently no bugs to report.