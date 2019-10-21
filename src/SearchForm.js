import React from 'react'

class SearchForm extends React.Component {
    getRepos = (e) => {
        e.preventDefault()
        const searchTerm = e.target.search.value
        this.props.getRepos(searchTerm);
        e.target.search.value = ''
    }
    render() {
        return (
            <form className="search" onSubmit={this.getRepos}>
                <label htmlFor="search">Search: </label>
                <input type="text" name="search" placeholder="Enter GitHub handle"></input>
                <button type="submit">Go!</button>
            </form>
        )
    }
}

export default SearchForm