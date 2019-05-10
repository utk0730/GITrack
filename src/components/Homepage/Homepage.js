import React, { Component } from "react";
import axios from "axios";
import Table from "../Table/Table";
import "./Homepage.css";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      owner: "",
      result: {
        totalOpenIssues: "",
        recentIssues: "",
        lastWeekIssues: "",
        oldIssues: ""
      },
      error: "",
      showTable: false
    };
    this.getGithubData = this.getGithubData.bind(this);
  }
  async getGithubData(e) {
    console.log("fetching data");
    e.preventDefault();
    let link = this.state.url.replace("https://github.com/", "").split("/");
    let repoOwner = link[0];
    let repoName = link[1];

    //check for invalid repo link
    if (link.length > 2 || repoOwner === undefined || repoName === undefined) {
      this.setState({ error: "Invalid repository link" });
    } else {
      try {
        const { data } = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/issues`
        );
        //check if any open issue is there
        if (data !== undefined && data.length > 0) {
          console.log(data);
          let totalOpenIssues = 0,
            recentIssues = 0,
            lastWeekIssues = 0,
            oldIssues = 0;
          let today = new Date();
          let creationDate;
          data.forEach(d => {
            const { state, created_at } = d;
            creationDate = new Date(created_at);
            if (state === "open") {
              totalOpenIssues++;
              //checking issues opened in last 24 hours
              if (
                Math.abs(today.getTime() - creationDate.getTime()) /
                  (1000 * 3600) <=
                24
              ) {
                recentIssues++;
              }
              //checking issues open 24 hours ago but less than 7 days ago
              else if (
                Math.abs(today.getTime() - creationDate.getTime()) /
                  (1000 * 3600) >
                  24 &&
                Math.abs(today.getTime() - creationDate.getTime()) /
                  (1000 * 3600) <=
                  168
              ) {
                lastWeekIssues++;
              } else {
                //checking issues that were open more than 7 days ago
                oldIssues++;
              }
            }
          });

          //set state with required data
          this.setState({
            error: "",
            owner: repoOwner,
            showTable: true,
            result: {
              totalOpenIssues,
              recentIssues,
              lastWeekIssues,
              oldIssues
            }
          });
        } else {
          this.setState({
            error: "we could find any open Issues in this repo!",
            showTable: false
          });
        }
      } catch (error) {
        console.log("error in fetching data from api");
        this.setState({ error: error.message });
      }
    }
  }
  render() {
    console.log("rendering", this.state);
    return (
      <div>
        <div className="jumbotron showcase-jumbotron">
          <h4 className="display-5">GITrack...</h4>
          <p className="lead">Monitor open issues in Github repositories</p>
          {this.state.error && <h3 className="my-2">{this.state.error}</h3>}
          <div className="bar container"> </div>
          {/*form */}
          <form onSubmit={this.getGithubData}>
            <div className="form-container container">
            {/*controlled input */}
              <input
                value={this.state.url}
                type="text"
                className="form-control py-4 mr-4"
                placeholder="Paste github repository link...."
                onChange={e =>
                  this.setState({
                    url: e.target.value,
                    showTable: false,
                    repoOwner: "",
                    error: "",
                    result: {
                      totalOpenIssues: "",
                      recentIssues: "",
                      lastWeekIssues: "",
                      oldIssues: ""
                    }
                  })
                }
              />
              <button className="btn btn-secondary btn-lg" id="search">
                Search
              </button>
            </div>
          </form>
        </div>
        {/*check if table needs to be shown */}
        {this.state.showTable && (
          <Table
            url={this.state.url}
            owner={this.state.owner}
            {...this.state.result}
          />
        )}
      </div>
    );
  }
}
