import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: '',
            likes: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        console.log(this.props);
        let songs = this.props.songs.filter(song => song.title.includes(this.state.filter) || song.genre.includes(this.state.filter) || 
        song.album.includes(this.state.filter)  || song.artist.includes(this.state.filter) || song.release_date.includes(this.state.filter))
        .map(song => (
            <tr>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td>{song.likes}</td>
            </tr>
        ))
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Search:  </label>
                <input type='text' value={this.state.filter} onChange={this.handleChange}/>
                <center>
                <h1>Song Results</h1>
                </center>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Likes</th>
                    </tr>
                    <tbody>
                    {songs}
                    </tbody>
                </table>
                </form>
            </div>
        );
    }
}

export default SearchBar;