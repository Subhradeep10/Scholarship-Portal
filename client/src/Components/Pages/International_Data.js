import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const International_Data = () => {
    return (
        <div>
            <Navbar />
            <Link to="/international" >
                International
            </Link>
        </div>
    )
}

export default International_Data