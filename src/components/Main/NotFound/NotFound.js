import React from 'react';
import error from './err.jpg';
import './NotFound.css';
class NotFound extends React.Component {

render () {

    return (
    <div>
        <div className=" container">
          <div className="err-context">
        <h1 className=" error-msg">Error 404 - This page is not found!</h1>
          <h3 className="url-msg"> Check your URL and try to connect again. </h3>
    </div>
<div className="err-img ">
<img src={error} alt ="error"/>
</div>



    </div>
</div>
);



}
}

export default NotFound;
