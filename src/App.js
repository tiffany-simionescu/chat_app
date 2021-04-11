import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) {
    return <LoginForm />
  }

  return (
    <div>
      <Logout />
      <ChatEngine 
        height="95vh"
        projectID={process.env.React_App_PROJECT_ID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  )
}

export default App;