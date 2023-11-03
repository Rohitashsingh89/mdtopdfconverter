import React from "react";
import styled from "styled-components";
import UploadButton from "./Upload.js";
import downloadimage from '../../assets/img/downloadpdf.png'

const Header = ({ className }) => {
  const onTransfrom = () => {
    // get the file name
    let candidateTitle = "";
    const previewEl = document.querySelector(".preview");
    const candidateTitleEl = previewEl.querySelector("h1");
    if (candidateTitleEl) {
      candidateTitle = candidateTitleEl.innerText;

      // do the effect change the title
      const currentTitle = document.title;
      document.title = candidateTitle;
      window.requestAnimationFrame(() => {
        // schedule resume back in next frame
        document.title = currentTitle;
      });
    }
    window.print();
  };
  return (
    <header className={className + " no-print header"}>
      <p className="project"> MD</p>
       
      <div className="menu">
        <UploadButton className="button upload" />
      </div>
      <div className="buttons">
        <button onClick={onTransfrom} className="shadow">Download <img src={downloadimage} alt="Download Icon"  height={"20px"} style={{  filter: "invert(100%)", paddingLeft: "5px"}} rel="noreferrer" /></button>  
        <a href="https://github.com/rohitashsingh89/" target="_blank" style={{marginLeft: "10px"}} rel="noreferrer">by R.S</a> 
      </div>
    </header>
  );
};

export default styled(Header)`
  * {
    box-sizing: border-box;
  }
  flex-shrink: 0;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 70px;
  .header{
    width: 100%;
  }
  .project {
    font-weight: 900;
    flex-shrink: 0;
    font-size: 50px;
    letter-spacing: 2px;
    font-family: 'Arial', sans-serif;
    color: black;
  }
  @media (max-width: 1500px) {
    .project {
      padding-left: 20px;
    }
  }
  @media (max-width: 768px) {
    .project {
      padding-left: 10px; 
    }
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: 3px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
      background-color: black;
      color: white;
      border-radius: 5px;
    }
  }

  .buttons {
    position: fixed;
    bottom: 10px;
    right: 20px;
    z-index: 1000;
  }

  .buttons button {
      color: white;
      background-color: #10122B;
      width: 200px;
      height: 50px;
      border-radius: 4px;
      border: none;
      outline: none;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .buttons a {
      padding: 14px 5px;
      text-decoration: none;
      background-color: #111113;
      color: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`;
