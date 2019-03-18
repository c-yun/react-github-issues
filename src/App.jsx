import React, {Component} from 'react';
import './App.css';
import IssueIndex from './IssueIndex';
import IssueShow from './IssueShow';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitIssues: []
    }
  }

  componentDidMount() {
    let githubApi = 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=20'

    axios.get(githubApi).then( response => {
      console.log(response)
      this.setState({
        gitIssues: response.data
      })
    })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> {' '}
            <Link to='/pullrequests'>Pull Requests</Link> {' '}
            <Link to='/issues'>Issues</Link> {' '}
            <Link to='/marketplace'>Marketplace</Link> {' '}
            <Link to='/explore'>Explore</Link>
          </nav>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/issues' render={() => <IssueIndex issues={this.state.gitIssues} />} />
          <Route path= "/issue/:id" render={(props) => <IssueShow issues={this.state.gitIssues} {...props} /> }/>        
        </div>
      </Router>
      );
    }
  }

export default App;





