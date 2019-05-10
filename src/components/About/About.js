import React from "react";
import avatar_image from "../About/images/dp.PNG";
import './About.css'
export default function About() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              About me
            </button>
          </h2>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            
              <img
                src={avatar_image}
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                className="card-img-top mb-3"
                alt="avatar..."
              />
              <p>
                Learning to write better code each day.I know <strong>React.js,Node.js,Redux,Javascript,MongoDB,SQL,Bootstrap,PWAs</strong> .
              </p>
            

            <div className="social-links">
              <a
                href="https://github.com/utk0730/GITrack"
                rel="noopener noreferrer"
                target="_blank"
              >
                GithubLink
              </a>
              <a
                href="https://leetcode.com/utkarsh_bharti/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Leetcode
              </a>
              <a
                href="https://github.com/utk0730"
                rel="noopener noreferrer"
                target="_blank"
              >
                Linkedin
              </a>
              </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About Project
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <h5>Name : GITrack</h5>
            <p>
              Helps you search for open issues in a public github repository.
            </p>
            <p>How to use</p>
            <ol>
              <li>copy github repo link</li>
              <li>paste in input field</li>
              <li>click on search button</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Project details
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Assigned to : <strong>Utkarsh bharti</strong>
              </li>
              <li className="list-group-item">
                Assigned By : <strong>Radius (Agentdesks Incorporated)</strong>
              </li>
              <li className="list-group-item">
                Date : <strong>11/05/2019</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Tech & accessibility
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <p>
              I have build this project with React.js and bootstrap.I have used
              ES6 syntax.
            </p>
            <p>
              <a
                href="https://github.com/utk0730/GITrack"
                rel="noopener noreferrer"
                target="_blank"
              >
                GithubLink
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
