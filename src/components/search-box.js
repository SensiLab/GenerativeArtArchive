import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

import SearchResults from "./search-results";
import "./search-box.css";

const QUERY_PREFIX = "Search for";

const StyledOption = styled("li")(({ isCustomQuery }) => ({
  ...(isCustomQuery && {
    fontStyle: "italic",
  }),
}));

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [titles, setTitles] = useState([]);

  const searchData = useStaticQuery(
    graphql`
      {
        localSearchEntries {
          store
        }
      }
    `
  );

  const store = searchData["localSearchEntries"]["store"];

  useEffect(() => {
    const uniqueTitles = [
      ...new Set(Object.values(store).map((item) => item.title)),
    ];
    setTitles(uniqueTitles);
  }, [store]);

  const handleInputChange = (_, newInputValue) => {
    let newQuery;
    if (newInputValue.startsWith(QUERY_PREFIX)) {
      newQuery = newInputValue.split(QUERY_PREFIX)[1].trim();
    } else {
      newQuery = newInputValue;
    }
    setQuery(newQuery);
  };

  const dialogOpen = () => setOpen(true);
  const dialogClose = () => setOpen(false);

  return (
    <div className="search">
      <button onClick={dialogOpen}>
        <StaticImage src="../images/search.svg" alt="search icon" width={50} />
      </button>
      <Dialog
        open={open}
        onClose={dialogClose}
        fullWidth
        PaperProps={{
          style: {
            height: "50%",
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
          <Autocomplete
            freeSolo
            options={query ? [`${QUERY_PREFIX} ${query}`, ...titles] : titles}
            onInputChange={handleInputChange}
            inputValue={query}
            blurOnSelect="touch"
            sx={{ marginTop: 6 }}
            renderInput={(params) => (
              <TextField {...params} label="Search" autoFocus />
            )}
            renderOption={(props, option, { selected }) => {
              const isCustomQuery = option.startsWith(QUERY_PREFIX);
              return (
                <StyledOption
                  {...props}
                  selected={selected}
                  isCustomQuery={isCustomQuery}
                >
                  {option}
                </StyledOption>
              );
            }}
          />
        </DialogTitle>
        <DialogContent>
          <SearchResults
            searchTerm={query}
            dialogClose={dialogClose}
            setQuery={setQuery}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchBox;
