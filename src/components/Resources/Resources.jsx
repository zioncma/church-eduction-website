import React from 'react';
import File from './File';

export default function Resources(props) {
    const listFiles = props.files.map( (file) => {<File props={props}/>})
    
    return (
        <div>
            <div>Resources</div>
            <div> {listFiles}</div>
        </div>
    )
}