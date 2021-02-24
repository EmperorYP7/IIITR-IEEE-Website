import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function UploadProfilePic(props) {

    const [state, setState] = useState({
        file: '',
        fileName: 'Choose file',
    });

    const changeHandler = async (e) => {
        setState({
            file: e.target.files[0],
            fileName: e.target.files[0].name,
        });
        console.log(state);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        console.log(state.file);
        formData.append('event', state.file);

        try {
            await axios.post('/upload/image/event', formData, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                },
            }).then(response => {
                setState({ fileName: `${response.data.imgPath}`});
                alert('File Uploaded!');
                props.setImagePath(`${response.data.imgPath}`);  //Path may change with the file structure
                props.setImageName(`${response.data.imgName}`);  //This won't change with the file structure
                console.log(response);
                if (response.status === 400) {
                    console.log(response.error);
                }
            }).then(() => {
                console.log(state);
            }).catch(err => {
                alert( `Error! : ${err}` );
            })
        }
        catch (err) {
            if (err.response.status === 500) {
                alert('There was a problem with the server');
                console.log(err);
            } else {
                alert(err.response.data.msg);
            }
        }
    }

    return (
        <form onSubmit={onSubmit} encType="multipart/form-data" id='form'>
                <div className='custom-file upload-row row'>
                    <div className="col-9">
                        <input type="file" name="event" required={true} onChange={changeHandler} placeholder="Upload Profile Pic" className='custom-file-input' />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {state.fileName}
                        </label>
                    </div>
                    <div className="col-3 upload-button">
                        <input type='submit' value='Upload' className='btn btn-success' />
                    </div>
                </div>
        </form>
    );
}