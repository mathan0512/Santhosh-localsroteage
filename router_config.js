import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link, BrowserRouter as Router } from 'react-router-dom';
import tasklist_home from './tasklist_home';
import tasklist_datatable from './tasklist_datatable';
import tasklistForm from './tasklist_Form';


class RounterConfig extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
          <Router>
            <div>
            <nav>
              <ul>
                <li>
                  <Link to={'/Home'}> Home </Link>
                </li>
                <li>
                  <Link to={'/CreateTask'}> Create a Task </Link>
                </li>
                {/* <li>
                  <Link to={'/TaskList'}> Task List </Link>
                </li> */}
              </ul>
            </nav>
            <Switch>
              <Route path={'/Home'} exact component={tasklist_home} />
              <Route path={'/CreateTask'} exact component={tasklistForm} />
              {/* <Route path={'/TaskList'} exact component={tasklist_datatable} /> */}
            </Switch>
          </div>
          </Router>
        );
    }
}

export default RounterConfig;