import React from 'react';
import { HashLoader } from 'react-spinners';
import './Gallery.css';



const AwesomeComponent = (props) => {
    return (
    <div className='CircleLoader'>



        <HashLoader

          size={70}
          color={'#085B72'}
        />
      <p className="loading-text">{ props.message} </p>
      </div>
    );

}

export default AwesomeComponent;
