import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class UploadProfilePic extends React.Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: '',
            filename: 'Choose File',
        };
    }

    componentDidMount() {

    }

    onSubmit = async e => {
        e.preventDefault();
        this.props.setImagePath(`${this.state.filename}`);  //Path may change with the file structure

        const formData = new FormData();
        formData.append('gallery', this.state.file);

        try {
            await axios.post('/upload/image/gallery', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
        }
        catch (err) {
            if (err.response.status === 500) {
            alert('There was a problem with the server');
            console.log(err);
            } else {
            alert(err.response.data.msg);
            }
        }
    };

    changeHandler = (e) => {
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name
        });
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} encType="multipart/form-data" id='form'>
                <div className='custom-file upload-row  row'>
                    <div className="col-9">
                        <input type="file" name="member" required={true} onChange={this.changeHandler} placeholder="Upload Profile Pic" className='custom-file-input' />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {this.state.filename}
                        </label>
                    </div>
                    <div className="upload-button col-3">
                        <input type='submit' value='Upload' className='btn btn-success' />
                    </div>
                </div>
            </form>
        )
    }
}

export default UploadProfilePic;
