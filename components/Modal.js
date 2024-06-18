import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

const ModalComponent = ({ open, message, handleClose }) => {
  return (
    <Dialog open={open} aria-labelledby="modal-title">
      {/* <DialogTitle id="modal-title">Message</DialogTitle> */}
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
