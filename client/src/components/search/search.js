import React from "react";


const Search = props =>
    <div className="container">
         <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Search
                            {/* <strong> */}
                            {/* <i className="fa fa-search" aria-hidden="true"></i> Search */}
                            {/* </strong> */}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" name="topic" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-year">Start Year</label>
                                <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" name="startYear" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-year">End Year</label>
                                <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" name="endYear" />
                            </div>
                            <button onClick={props.handleSubmitButton} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
             </div>
        // </div>

        <br /><br />

        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <strong>
                                Results
              </strong>
                        </h3>
                    </div>
                    <div className="panel-body">
                        {props.renderArticles()}
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
     </div>


export default Search;