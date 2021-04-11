import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.React_App_PROJECT_ID}
      userName={process.env.React_App_USER_NAME}
      userSecret={process.env.React_App_USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;