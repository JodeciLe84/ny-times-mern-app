import React, { Component, Fragment } from "react";
import "./App.css";
import Search from './Components/Search'
import Results from './Components/Results'
import Saved from './Components/Saved'

class App extends Component {
  render() {

    // state {

    // }


    return (
      <Fragment >
        <div className='container'>

          <Search />
          <Results />
          <Saved />

        </div>
      </Fragment>
    );
  }
}

export default App;
