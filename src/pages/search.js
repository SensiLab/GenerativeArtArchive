import * as React from "react"
import { useFlexSearch } from 'react-use-flexsearch'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "../layout/header"
import Footer from "../layout/footer"

const Search = ({location}) => {
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('search')
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
    const results = useFlexSearch(searchTerm, index, store)

    return (
        <>
        <Header/>
        <div className="full-inner search">
            <h1>Search Results for <em>{searchTerm}</em></h1>
            <div>
            { results.map(result => (
                <div key={result.id}><Link to={result.slug}>{ result.title }</Link></div>))
            }
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Search