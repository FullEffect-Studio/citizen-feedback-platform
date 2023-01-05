import React from "react";
import styled from "styled-components";
import ClientKnowHow from "./ClientKnowHow";

const HomeBannerStyle = styled.main`
  width: 100vw;
  height: 80vh;
  background: #333;
  display: flex;
  gap: 1rem;
  position: relative;

  .mainBanner {
    display: flex;
    gap: 1rem;
    width: 95%;
    height: 90%;
  }

  .greeting {
    width: 60%;
    height: 80%;
    text-align: center;
  }
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyle>
      <div className="mainBanner">
        <div className="greeting">
          <h2
            className="text-light text-center d-flex justify-content-center align-items-center h-75"
            style={{ fontSize: "3rem" }}
          >
            Welcome to Citizen Feedback Platform
          </h2>
          <div className="btn-group p-3" style={{display: "flex", gap: "1rem"}}>
            <button
              className="btn text-light p-3 text-sm"
              style={{ backgroundColor: "orangered" }}
            >
              Administrator Login
            </button>
            <button
              className="btn text-light p-3 text-sm"
              style={{ backgroundColor: "purple" }}
            >
              Community Worker Login
            </button>
            <button className="btn btn-danger text-light p-3 text-md">
              Public Official Login
            </button>
          </div>
        </div>
        <div className="report-img" style={{ paddingTop: "3rem" }}>
          <img
            src="images/womanhone.jpeg"
            alt="woman"
            width="400"
            height="400"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <ClientKnowHow />
    </HomeBannerStyle>
  );
};

export default HomeBanner;
