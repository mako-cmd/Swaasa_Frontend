import "./Landing.css";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";
let Landing = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="header-wrapper wrapper">
          <div className="header bubble">
            <div className="company-title">
              <div className="title flex-spaced-item">White Label</div>
              <div className="separator">|</div>
              <img className="logo flex-spaced-item" src="../public/vite.svg" />
            </div>
            <div className="app-title">COVID-19 Screening Test</div>
          </div>
        </div>
        <div className="body-wrapper wrapper">
          <div className="body bubble">
            <div className="instruction">Press Start To Begin</div>
            <div className="start-button">
              <Link to="start/step-1">
                <LoadingButton variant="outlined">
                  <span>Start</span>
                </LoadingButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
