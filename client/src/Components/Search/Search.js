import React, { Fragment } from 'react';

const Search = props => {
  return (
    <Fragment>
      {/* Jumbotron */}
      <div className="jumbotron" >
        <h1 className="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
      </div>

      <div className="row">
        <div className="col-sm-12">
        <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i class="fa fa-newspaper-o"></i> Search Parameters</strong></h3>
            </div>
            <div className="panel-body">

            <form role="form">

              {/* Text box for capturing the search term */}
              <div className="form-group">
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" />
              </div>

              {/* Number of records that the user wants to retrieve */}
              <div className="form-group">
                <label for="pwd">Number of Records to Retrieve:</label>
                <select className="form-control" id="num-records-select">
                  <option value="1">1</option>
                  {/* Setting the option for 5 as default  */}
                  <option value="5" selected>5</option>
                  <option value="10">10</option>
                </select>
              </div>

              {/* Start Year Parameter */}
              <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year" />
              </div>

              {/* End Year Parameter  */}
              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year" />
              </div>

              {/* Submit button  */}
              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

            </form>
          </div>
        </div>
      </div>
    </div>

  </Fragment>
  );
};

export default Search;