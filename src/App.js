import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NetworkErrorBoundary } from 'rest-hooks';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetail from './pages/EmployeeDetail';
import Contacts from './pages/Contacts';
import Nav from './components/navigation/Nav';

const App = () => (
  <div>
    <Suspense fallback={'LOADING'}>
      <NetworkErrorBoundary>
        <Router>
          <Nav />
          <br />
          <Switch>
            <Route exact path="/" component={EmployeeList} />
            <Route path="/employee/:id" component={EmployeeDetail} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </NetworkErrorBoundary>
    </Suspense>
  </div>
);

export default App;
