import * as React from "react"
import { useFlexSearch } from 'react-use-flexsearch'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "../layout/header"
import Footer from "../layout/footer"

const SearchResults = ({searchTerm}) => {
    // const params = new URLSearchParams(location.search);
    // const searchTerm = params.get('search')
    // const searchTerm = 'test'
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
        <div className="search">
            <div>
            { results.map(result => (
                <div key={result.id}><Link to={result.slug}>{ result.title }</Link></div>))
            }
            </div>
        </div>
    )
}

export default SearchResults