import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

const ContactModal = ({ open, dialogClose }) => {
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
      <DialogContent>
        <h1>Contact Us</h1>
        <p
          style={{ whiteSpace: "pre-line" }}
        >{`SensiLab\nT +61 (0) 3 9903 4889\nBuilding G, Monash University\n900 Dandenong Road\nCaulfield East Victoria 3145\nAustralia`}</p>
        <p>
          <a
            href="mailto:sensilab@monash.edu"
            style={{ textDecoration: "none" }}
          >
            sensilab@monash.edu
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
