import React, { useState, createContext } from 'react'

const SearchQueueContext = createContext()
const SearchQueueProvider = (props) => {
    const [query, setQuery] = useState(null)
    const setSearchQuery = (query) => {
        try{setQuery(query.trim())}
        catch(e){setQuery(null)}
    }
    return (
        <SearchQueueContext.Provider value={
            {
                query: query,
                setQuery: setSearchQuery
            }
        }>
            {props.children}
        </SearchQueueContext.Provider>
    )
}

export default SearchQueueProvider
export {SearchQueueContext}
