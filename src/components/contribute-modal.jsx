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
      <DialogContent>
        <h1>Contribute to the Archive</h1>
        <p>
          Have some content you'd like to add to the archive? Head on over to
          our{" "}
          <a
            href="https://github.com/SensiLab/GenerativeArtArchive?tab=readme-ov-file#how-to-contribute"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            GitHub repository
          </a>{" "}
          where you'll find contribution instructions.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ContributeModal;
