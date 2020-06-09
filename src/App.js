import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import ArticleList from './ArticleList';
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <div>
    <h1>Main Title</h1>
    {/*<Nav />*/}
    <Suspense fallback={'LOADING'}>
      <NetworkErrorBoundary>
        <ArticleList />
      </NetworkErrorBoundary>
    </Suspense>
  </div>
);

export default App;
