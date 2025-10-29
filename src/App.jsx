import React, { useRef } from "react";
import html2canvas from "html2canvas";

import './App.css'

function App() {

  //For cCurrent Date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  //For ScreenShot
  const pageRef = useRef();

  const handleCaptureClick = async () => {
    const element = pageRef.current;
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL("image/png");

    // Download the screenshot automatically
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "screenshot.png";
    link.click();
  };

 
 return (
  <div
  ref={pageRef}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",   
      justifyContent: "flex-start", 
      width: "100%",         
      paddingTop: "1vw",     
      
    }}
  >
    <h1
      style={{
        fontWeight: "bold",
        fontSize: "25px",
        marginTop: "2px",
        marginBottom: "2px",
        textAlign: "center",
      }}
    >
      C2P Decision Matrix Weekly Status Report {" "}
      <span style={{ fontSize: "18px", fontWeight: "normal" }}>
        | {formattedDate}
        </span>
    </h1>
    <button
        onClick={handleCaptureClick}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📸
      </button>
  </div>
);

}

export default App
