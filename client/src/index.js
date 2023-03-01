import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import { SportProvider } from './contextApi/contexts/SportContext';
import { UserProvider } from './contextApi/contexts/UserContext';
import { PostProvider } from './contextApi/contexts/PostContext';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <SportProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </SportProvider>
  </UserProvider>
);
