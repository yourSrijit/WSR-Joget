
import useProjectInfo from "../store/useProjectInfo";

export default function ProjectStats() {
  const { totalProjects, consultProjects, constructProjects } = useProjectInfo();

  const boxStyle = {
    // backgroundColor: "#121212",
    color: "Black",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
    width: "80%",
    textAlign: "center",
  };

  const labelStyle = {
    fontSize: "1.2rem",
    marginBottom: "5px",
    fontWeight: "500",
  };

  const valueStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  return (
    <div style={boxStyle}>
      <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>📊 Project Statistics</h3>
      <div style={{ marginBottom: "15px" }}>
        <div style={labelStyle}>Total Projects</div>
        <div style={valueStyle}>{totalProjects}</div>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <div style={labelStyle}>Consult Projects</div>
        <div style={valueStyle}>{consultProjects}</div>
      </div>
      <div>
        <div style={labelStyle}>Construct Projects</div>
        <div style={valueStyle}>{constructProjects}</div>
      </div>
    </div>
  );
}
