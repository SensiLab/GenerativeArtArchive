import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

const ContributeModal = ({ open, dialogClose }) => {
  return (
    <Dialog
      open={open}
      onClose={dialogClose}
      fullWidth
      PaperProps={{
        style: {
          borderRadius: "15px",
        },
      }}
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={dialogClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          &#x2715;
        </IconButton>
      </DialogTitle>
      {/* TODO: Content for making contributions */}
      <DialogContent>
        <h1>Contribute to the Archive</h1>
      </DialogContent>
    </Dialog>
  );
};

export default ContributeModal;
