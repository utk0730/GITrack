import React from "react";
import './Table.css'
export default function Table({url,owner,
  totalOpenIssues,
  recentIssues,
  lastWeekIssues,
  oldIssues
}) {
  return (
    

<div className="container table-container">
<h3>displaying open issues</h3>
  <div className="row">
    <div className="col-xs-12">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
        <thead>
        <tr>
          <th>Repository Link</th>
          <th>User name</th>
          <th>Total Issues</th>
          <th>Recent Issues</th>
          <th>Last week issues</th>
          <th>older issues</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{url}</td>
          <td>{owner}</td>
          <td>{totalOpenIssues}</td>
          <td>{recentIssues}</td>
          <td>{lastWeekIssues}</td>
          <td>{oldIssues}</td>
        </tr> 
      </tbody>
          
        </table>
      </div>
    </div>
  </div>
</div>
   
  );
}
