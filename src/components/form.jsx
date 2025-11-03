import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // ⬅️ Import close icon
import { useProjectStore } from "../store/useProjectStore.js";

export default function Form({ open, handleClose }) {
  const { addProject } = useProjectStore();
  const [month, setMonth] = useState("");
  const [count, setCount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(month.trim(), parseInt(count));
    setMonth("");
    setCount("");
    // ❌ Do NOT close after submit
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={{ zIndex: 1300 }}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Add Project Data
        {/* Close button on top-right */}
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

      <DialogContent>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "10px",
          }}
        >
          <TextField
            label="Month (e.g., Nov 25)"
            variant="outlined"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
          <TextField
            label="Projects Count"
            type="number"
            variant="outlined"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
