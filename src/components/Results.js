import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
    if (!results) return(<p style={{color: "white"}} >No results found matching</p>)
    return (
        <section className="results">
            {(results || []).map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </section>
    )
}

export default Results
