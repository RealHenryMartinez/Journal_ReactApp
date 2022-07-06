import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const EntryHeader = () => {
    return <h3>Title</h3>
}

const EntryBody = props => {

        return (
            <div key={props.entryData._id}>
                <h2>{props.entryData.title}</h2>
                <p>{props.entryData.body}</p>
                <button onClick={() => props.removeEntry(props.entryData._id)}>Delete</button>
            </div>
        )

}

const Entries = (props) => {

    const { entryData, removeEntry } = props;

    return (
        <div>
            <h2>My Entries</h2>
            {entryData.map((journal) => (

// get data with id
                <div key={journal._id}>
                    <EntryHeader />
                    <EntryBody entryData={journal} removeEntry={removeEntry} />
                </div>
            ))}

        </div>

    )

}

export default Entries