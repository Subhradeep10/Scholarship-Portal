import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    component: {
        color: '#000',
        textDecoration: 'none',

    }
})

const Private_Data = () => {
    const [Private, setPrivate] = useState([{
        sname: '',
        details: '',
        apply: ''
    }]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3001/private');
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const Private = await response.json();
            setPrivate(Private);
        }
        fetchData();

    })
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Link to="/private" className={classes.component}></Link>
            <div className="international_table" >
                <table>
                    <tr>
                        <th>Scholarship Name</th>
                        <th>Details</th>
                        <th>Apply Link</th>
                    </tr>
                    {Private.map((data) =>
                        <tr>
                            <td
                                style={{ justifyContent: "center", alignItems: "center", padding: "5px" }}
                            >
                                {data.sname}
                            </td>
                            <td style={{ justifyContent: "center", alignItems: "center" }}>
                                {data.details}
                            </td>
                            <td>
                                <a
                                    href={data.apply}
                                ><button
                                    style=
                                    {{
                                        backgroundColor: "#234ad4",
                                        color: "white",
                                        height: "30px",
                                        width: "70px"
                                    }}

                                >
                                        Apply
                                    </button></a
                                >
                            </td>
                        </tr>

                    )}
                </table>
            </div>
        </div>
    )
}

export default Private_Data