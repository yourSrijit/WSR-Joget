import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { FaEdit } from "react-icons/fa";
import Form from "./components/form";
import "./App.css";

import SimpleBarChart from "./components/projectCreation";
import ClientSector from "./components/clientSector";
import ProjectStatus from "./components/projectStatus";
import ProjectStats from "./components/ProjectStats";
import MarkdownPreview from "./components/MarkdownPreview";



function App() {
  const [showForm, setShowForm] = useState(false);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const pageRef = useRef();

  const handleCaptureClick = async () => {
    const element = pageRef.current;
    const canvas = await html2canvas(element);
    const dataUrl = canvas.toDataURL("image/png");
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
        height: "100vh",
        // padding: "5px",
        border: "1px solid black",
        boxSizing: "border-box",
        // backgroundColor: "#1A2A4F",
      }}
    >
      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FF9013",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          C2P Decision Matrix Weekly Status Report{" "}
          <span style={{ fontSize: "18px", fontWeight: "normal" }}>
            | {formattedDate}
          </span>
        </h1>

        <div
          onClick={handleCaptureClick}
          style={{
            marginLeft: "20px",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          📸
        </div>

        <FaEdit
          style={{
            marginLeft: "2vw",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={handleEditClick}
        />
      </div>

      {/* Form Popup */}
      <Form open={showForm} handleClose={handleFormClose} />

      {/* Lower Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "blue",
          width: "full",
          height: "100%",
          margin: "5px",
          boxSizing: "border-box",
        }}
      >

        {/* Left Div  */}
      <div
  style={{
    display: "flex",
    flexDirection: "column", 
    width: "100%",height: "100%",backgroundColor: "#f0f0f0",gap: "10px", // optional spacing between sections
  }}
>
  {/* Left Up */}
 <div
  style={{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  }}
>
  



  <div
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ccc",
    }}
  >
    <ClientSector/>
   
  </div>
</div>



  {/* Left Down */}
  <div
    style={{
      display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    }}
  >
  <SimpleBarChart />
  
  </div>


  
      </div>



        {/* Right Div  */}

        <div
        style={{
          display: "flex",
          flexDirection: "column", 
          width: "100%",height: "100%",backgroundColor: "#f1f0f0", border: "1px solid #ccc", // optional spacing between sections
        }}
>
 


<div
  style={{
    display: "flex",
    flexDirection: "row", // makes children sit side by side
    width: "100%",
    height: "100vh", // or any height you want
  }}
>
  {/* Left child */}
  <div
    style={{
      flex: 1, // takes half space
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ccc",
    }}
  >
    <ProjectStatus />
  </div>

  {/* Right child */}
  <div
    style={{
      flex: 1, // takes other half
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ccc",
    }}
  >
    < ProjectStats/>
    
  </div>
</div>




  {/* Right Down */}
  <div
    style={{
      display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
     
    }}
  >
  {/* Markdown text  */}
  < MarkdownPreview/>
  
  </div>


  
      </div> 
      </div>
    </div>
  );
}

export default App;


