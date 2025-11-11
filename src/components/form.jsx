import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Divider,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useProjectStore } from "../store/useProjectStore.js";
import { useClientSectorStore } from "../store/useClientSector.js";
import { useProjectStatusStore } from "../store/useProjectStatus.js";
import useProjectInfo from "../store/useProjectInfo.js"; // 🆕 Import Project Info store

export default function Form({ open, handleClose }) {
  // 🟩 Project Store
  const { addProject } = useProjectStore();

  // 🟨 Sector Store
  const { addSector } = useClientSectorStore();

  // 🟦 Status Store
  const { addStatus } = useProjectStatusStore();

  // 🟪 Project Info Store
  const { setTotalProjects, setConsultProjects, setConstructProjects } = useProjectInfo();

  // 🟩 Project input
  const [month, setMonth] = useState("");
  const [count, setCount] = useState("");

  // 🟨 Sector input
  const [sector, setSector] = useState("");
  const [value, setValue] = useState("");

  // 🟦 Status input
  const [status, setStatus] = useState("");
  const [statusValue, setStatusValue] = useState("");

  // 🟪 Project Info input
  const [total, setTotal] = useState("");
  const [consult, setConsult] = useState("");
  const [construct, setConstruct] = useState("");

  // Handlers
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (!month || !count) return;
    addProject(month.trim(), parseInt(count));
    setMonth("");
    setCount("");
  };

  const handleSectorSubmit = (e) => {
    e.preventDefault();
    if (!sector || !value) return;
    addSector(sector.trim(), parseInt(value));
    setSector("");
    setValue("");
  };

  const handleStatusSubmit = (e) => {
    e.preventDefault();
    if (!status || !statusValue) return;
    addStatus(status, parseInt(statusValue));
    setStatus("");
    setStatusValue("");
  };

  const handleProjectInfoSubmit = (e) => {
    e.preventDefault();
    if (!total && !consult && !construct) return;
    if (total) setTotalProjects(parseInt(total));
    if (consult) setConsultProjects(parseInt(consult));
    if (construct) setConstructProjects(parseInt(construct));
    setTotal("");
    setConsult("");
    setConstruct("");
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={{ zIndex: 1300, "& .MuiDialog-paper": { width: 420 } }}>
      <DialogTitle sx={{ m: 0, p: 2, fontWeight: 600, fontSize: "1.2rem" }}>
        Add or Update Data
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ display: "flex", flexDirection: "column", gap: 3, bgcolor: "#0d1117" }}>
        {/* 🟩 Project Section */}
        <Box component="form" onSubmit={handleProjectSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" color="white">📊 Add Project Data</Typography>
          <TextField
            label="Month (e.g., Nov 25)"
            variant="outlined"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />
          <TextField
            label="Projects Count"
            type="number"
            variant="outlined"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />
          <DialogActions>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save Project
            </Button>
          </DialogActions>
        </Box>

        <Divider sx={{ borderColor: "gray" }} />

        {/* 🟨 Client Sector Section */}
        <Box component="form" onSubmit={handleSectorSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" color="white">🏢 Add Client Sector</Typography>
          <TextField
            label="Sector Name"
            variant="outlined"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            required
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />
          <TextField
            label="Sector Value"
            type="number"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />
          <DialogActions>
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Save Sector
            </Button>
          </DialogActions>
        </Box>

        <Divider sx={{ borderColor: "gray" }} />

        {/* 🟦 Project Status Section */}
        <Box component="form" onSubmit={handleStatusSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" color="white">📁 Update Project Status</Typography>

          <TextField
            select
            label="Select Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            sx={{
              input: { color: "white" },
              label: { color: "gray" },
              "& .MuiSelect-select": { color: "white" },
            }}
          >
            <MenuItem value="Tender">Tender</MenuItem>
            <MenuItem value="Lost">Lost</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Awarded">Awarded</MenuItem>
          </TextField>

          <TextField
            label="Status Value"
            type="number"
            variant="outlined"
            value={statusValue}
            onChange={(e) => setStatusValue(e.target.value)}
            required
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />

          <DialogActions>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Save Status
            </Button>
          </DialogActions>
        </Box>

        <Divider sx={{ borderColor: "gray" }} />

        {/* 🟪 Project Info Section */}
        <Box component="form" onSubmit={handleProjectInfoSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" color="white">📈 Update Project Info</Typography>

          <TextField
            label="Total Projects"
            type="number"
            variant="outlined"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />
          <TextField
            label="Consult Projects"
            type="number"
            variant="outlined"
            value={consult}
            onChange={(e) => setConsult(e.target.value)}
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />
          <TextField
            label="Construct Projects"
            type="number"
            variant="outlined"
            value={construct}
            onChange={(e) => setConstruct(e.target.value)}
            sx={{ input: { color: "white" }, label: { color: "gray" } }}
          />

          <DialogActions>
            <Button type="submit" variant="contained" color="warning" fullWidth>
              Save Project Info
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
