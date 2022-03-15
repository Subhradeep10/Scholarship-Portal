import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Research_Data = () => {
    return (
        <div>
            <Navbar />
            <Link to="/research" >
                Research
            </Link>
        </div>
    )
}

export default Research_Data