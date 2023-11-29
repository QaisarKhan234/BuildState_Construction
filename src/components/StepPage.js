import React from "react";
import "./StepPage.css";
const StepPage = () => {
  return (
    <div className="step-page">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="text-center ">
              <h2 className="mar">How we work</h2>
              <hr className="solid"></hr>
            </div>
          </div>

          <div className="step-mainss">
            <div className="row">
              <div className="step-main col-md-3">
                <a className="filt-step active" data-filter=".">
                  <span>Planning</span>
                </a>
              </div>

              <div className="step-main col-md-3">
                <a className="filt-step " data-filter=".">
                  <span>Concept Designs</span>
                </a>
              </div>

              <div className="step-main col-md-3">
                <a className="filt-step " data-filter=".">
                  <span>Construct</span>
                </a>
              </div>

              <div className="step-main col-md-3">
                <a className="filt-step " data-filter=".">
                  <span>Finishing</span>
                </a>
              </div>
            </div>
          </div>

          <div className="step-text col-md-12">
            <div className="inn-text">

            <div>
              Maecenas justo neque, efficitur sit amet scelerisque eu, ornare a
              justo. Morbi scelerisque ex ut consequat vestibulum. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Praesent vel augue rutrum, scelerisque velit non,
              interdum nisl. Etiam purus lorem, aliquet a eros sit amet,
              vestibulum finibus augue. Cras egestas neque vitae dui tincidunt,
              vitae tristique tellus volutpat. Fusce justo ante, interdum in
              augue in, commodo imperdiet turpis.
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPage;
