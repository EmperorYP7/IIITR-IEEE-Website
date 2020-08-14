import React from 'react';

import './NotFound.css';
class NotFound extends React.Component {

render () {

    return (
    <div>
        <div className="container">
                <h1 className="mx-auto my-auto">Error 404 - This page is not found!</h1>
                <h3> Check your URL and try to connect again. </h3>
        </div>
    </div>
);



}
}

export default NotFound;
