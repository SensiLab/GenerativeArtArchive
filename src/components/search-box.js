import React, { useEffect, useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { navigate, useStaticQuery, graphql } from "gatsby"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const SearchBox = () => {
    const [query, setQuery] = useState('')
    const [open, setOpen] = React.useState(false);
    const searchData = useStaticQuery(
        graphql`
        {
            localSearchEntries {
                store
                index
            }
        }`
    )
    const store = searchData['localSearchEntries']['store']
    const index = searchData['localSearchEntries']['index']
    const options  = Object.entries(JSON.parse(index)[1])
    const results = useFlexSearch(query, index, store)

    // useEffect(() => {
    //     console.log(results)
    //     setOptions(results)
    // }, [results]);
    
    // const onInputChange = (_e, value) => {
    //     const results = useFlexSearch(value, index, store)
    //     console.log(res)
    //     setOptions(results)
    // }
    const goToSearch = (_e, value) => {
        // _e.preventDefault()
        setQuery(value[0])
        console.log(value[0])
        navigate('/search?search='+value[0])
    }

    const dialogOpen = () => setOpen(true);
    const dialogClose = () => setOpen(false);

    return (
        <div>
            <button onClick={dialogOpen}>Search</button>
            <Dialog open={open} onClose={dialogClose}>
                <DialogContent>
                    <IconButton
                        aria-label="close"
                        onClick={dialogClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                        >
                        &#x2715;
                    </IconButton>
                    <Autocomplete
                        options={options}
                        getOptionLabel={o => o[0]}
                        onInputChange={(_e, value) => {setQuery(value)}}
                        onChange={goToSearch}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SearchBox

