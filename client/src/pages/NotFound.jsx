import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            404 Not Found!
            <hr/>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFound;