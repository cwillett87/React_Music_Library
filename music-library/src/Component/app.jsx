import React, { Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            songs: []
        }
    }
    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    deleteSong = async (id) => {
        console.log(this.props)
        await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        let response = await this.getAllSongs()
        this.setState({
            songs: response.data
        });
    }

    render() {
        return (
            <div>
                <MusicTable songs={this.state.songs} deleteSongs={this.deleteSong}/>
            </div>
        );
    }
}

export default App;