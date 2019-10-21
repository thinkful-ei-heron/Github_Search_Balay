import React from 'react' 

class ResultsList extends React.Component {
    render() {
        return (
            <ul className="results">
                {this.props.repos.map(itm => <li key={itm.id}><span>{itm.name}</span><a href={itm.html_url} target="_blank" rel="noopener noreferrer">Go to Repo</a></li>)}
            </ul>
        )
    }
}

export default ResultsList