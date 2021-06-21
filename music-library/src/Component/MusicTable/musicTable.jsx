import React from 'react';
import Delete from '../Delete/delete';
import Like from '../LikeButton/likeButton';

function MusicTable(props){
    console.log(props);
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
                <Like songid={song.id} songtitle={song.title} likeSong={props.likeSong}/>
                <Delete songid={song.id} deleteSongs={props.deleteSongs} />
            </tr>
        })
        return (
            <div>
                <center>
                <h1>Music Library</h1>
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
                    {musicList}
                    </tbody>
                </table>
                
            </div>
        );
    }
}
   
export default MusicTable;