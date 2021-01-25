// import Libraries
import React from "react";

// import Styles and Images
import "../assets/styles/components/NotFound.scss";

const NotFound = () => {
  return (
    <React.Fragment>
      <div class="mainbox">
        <div class="err">4</div>
        <div class="err1">0</div>
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <a href="/">home</a> and try from there.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
