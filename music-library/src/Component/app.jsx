import React, { Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import axios from 'axios';

class App extends Component {
    state = { 
        songs: []
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
    render() {
        return (
            <div>
                <MusicTable songs={this.state.songs}/>
            </div>
        );
    }
}

export default App;