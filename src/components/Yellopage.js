import React from "react";
import "./Yellopage.css";
import { Button } from "react-bootstrap";
const Yellopage = () => {
  return (
    <div className="design">
      <div className="h3">
        <h3>Looking Best Partner For Your Next Project</h3>
      </div>

      <div className="custom-button">
        <Button variant="outline-light" >
          Let us know
        </Button>
      </div>
    </div>
  );
};

export default Yellopage;
