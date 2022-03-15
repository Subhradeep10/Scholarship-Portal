import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Regional_Data = () => {
    return (
        <div>
            <Navbar />
            <Link to="/regional" >
                Regional
            </Link>
        </div>
    )
}

export default Regional_Data