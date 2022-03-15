import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Private_Data = () => {
    return (
        <div>
            <Navbar />
            <Link to="/private" >
                Private
            </Link>
        </div>
    )
}

export default Private_Data