import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.React_App_PROJECT_ID}
      userName={process.env.React_App_USER_NAME}
      userSecret={process.env.React_App_USER_SECRET}
    />
  )
}

export default App;