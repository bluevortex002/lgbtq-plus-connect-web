/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

import { Route, Router, Routes } from "@solidjs/router";
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import ChatPage from './pages/Chat';
import RecommendPage from './pages/Recommend';
import ChatDetailsPage from './pages/ChatDetails';
import ContactsPage from './pages/Contacts';
import SettingsPage from './pages/Settings';
import SearchPage from './pages/Search';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/chat-details" component={ChatDetailsPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/app" component={App}>
          <Route path="/chat" component={ChatPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/recommend" component={RecommendPage} />
          <Route path="/settings" component={SettingsPage} />
        </Route>
      </Routes>
    </Router>
  )
  , root!);
