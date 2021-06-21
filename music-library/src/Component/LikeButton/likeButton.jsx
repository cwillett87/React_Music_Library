import React, { Component } from 'react';

function Like (props) {
    return (
        <div>
            <button onClick={() => props.likeSong(props.songid, props.songtitle)}>Like</button>
        </div>
    );
}

export default Like;