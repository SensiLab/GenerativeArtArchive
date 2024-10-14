import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import "./search-box.css";

const InfoButton = () => {
  const [open, setOpen] = useState(false);

  const dialogOpen = () => {
    setOpen(true);
  };
  const dialogClose = () => {
    setOpen(false);
  };

  return (
    <div className="search">
      <button onClick={dialogOpen}>
        <StaticImage src="../images/info.svg" alt="search icon" width={50} />
      </button>
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
          <>
            <h1>What is this site about?</h1>
            <p>
              The Generative Systems Archive was born from our collective desire
              to have a systematic way of documenting, situating and
              consolidating the experience we have collectively acquired through
              our creative work and research with and around computational
              generative methods.
            </p>
            <p>
              The idea then grew into a more encompassing resource, with a
              twofold aim: On the one hand, we want to create a platform where
              creators can archive and showcase their work in context –
              alongside their peers – and on the other, we want to build a
              resource for teachers, beginners, enthusiasts and experts to
              acquire and share their knowledge about computational generative
              systems in a collegial manner.
            </p>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InfoButton;
