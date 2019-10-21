import React from 'react';
import SearchForm from './SearchForm';
import './App.css'
import ResultsList from './ResultsList';



class App extends React.Component {
  state = {
    repos: [], 
    error: null,
    loading: false
  }

  getRepos = (searchTerm) => {
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
      .then(this.setState({loading: true, error: null}))
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        console.log(res.statusText)
        throw new Error(res.statusText)
      })
      .then(data => {
        this.setState({
          repos: data,
          loading: false
        })
      })
      .catch(err => {
        let errorMessage = err.toString()
        this.setState({
          error: errorMessage
        })
      })
  }

  render() {
    const loading = <div className="loading">Loading...</div>
    return (
      <div className="App">
        <header>
          <h1>GitHub Repo Search</h1>
        </header>
        <SearchForm getRepos={this.getRepos}/>
        {this.state.error ? <div className="error">{this.state.error}</div> : ''}
        {this.state.loading && !this.state.error ? loading : <ResultsList repos={this.state.repos}/>}
      </div>
    )
  }
}

export default App;
