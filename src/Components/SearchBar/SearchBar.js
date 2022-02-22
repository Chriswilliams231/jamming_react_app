import React from 'react';
import "./SearchBar.css";


export default class SearchBar extends React.Component {
    search() {
        this.props.onSearch(this.props.search)
    }
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button class="SearchButton">SEARCH</button>
            </div>
        )
    }
}