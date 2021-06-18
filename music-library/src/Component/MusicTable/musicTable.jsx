import React from 'react';

function MusicTable(props){
    if(props.songs === undefined){
        return (
            <div></div>
        );
    }
    else{
        let musicList = props.songs.map(function(song){
            return <tr>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <td>{song.likes}</td>
            </tr>
        })
        return (
            <div>
                <table>
                    <h1>Music Library</h1>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Likes</th>
                    </tr>
                    {musicList}
                </table>
            </div>
        );
    }
}
   
export default MusicTable;