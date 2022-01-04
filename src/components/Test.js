import React, { useState, useEffect } from 'react';

function Test() {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/toys')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setToys(data)
        })
    }, [])


    return (
        toys.map(toy => {
            return (
                <p>{toy.name}</p>
            )
        })
    )
}

export default Test;