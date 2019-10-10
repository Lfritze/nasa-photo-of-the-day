import React, { useState, useEffect} from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';

export default function Nasa() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios
        .get ('https://api.nasa.gov/planetary/apod?api_key=l3wLQHHE6HEAM2MyZFCA0YaSyowY4Lsaj6R2cqFD')
        .then(response => {
            const object = response.data;
            setItem(object);
        })
        .catch(error => {
            console.log('No data received', error);
        })
    },[]);

        return (
            <div className = 'nasa-container'>
                <div className = 'nasa-entry'>
                    <NasaCard 
                        title = {item.title}
                        explanation = {item.explanation}
                        hdurl = {item.hdurl}
                        date = {item.date}
                        />
                </div>
            </div>
        )
}