import React from "react";
import ReactDOM from "react-dom";
import Request from "superagent";

import Test from "./component";

Request
   .get('/releases')
   .then((res) => {
       const text = res.text;
       const releases = JSON.parse(text);
       const latest = releases.database[0];
       const url = latest.download_url;

       return Request.get(url);    
   })
   .then((res) => {
       console.log(res);
   })

ReactDOM.render(<Test />, document.getElementById("app-container"));
