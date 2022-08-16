import React, { useEffect, useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { navigate, useStaticQuery, graphql } from "gatsby"
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

const SearchBox = () => {
    const [query, setQuery] = useState('')
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

    return (
        <div>
            <Autocomplete
                options={options}
                getOptionLabel={o => o[0]}
                onInputChange={(_e, value) => {setQuery(value)}}
                onChange={goToSearch}
                renderInput={(params) => <TextField {...params} label="Search" />}
            />
        </div>
    )
}

export default SearchBox

