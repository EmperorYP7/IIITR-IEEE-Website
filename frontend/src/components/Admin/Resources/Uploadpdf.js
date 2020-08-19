import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class UploadPDF extends React.Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            file: '',
            filename: 'Choose File'
        };
    }

    componentDidMount() {

    }

    onSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('resource', this.state.file);

        try {
            await axios.post('/upload/pdf/resource', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            this.props.setPdfPath(`${this.state.filename}`);
        }
        catch (err) {
            if (err.response.status === 500) {
            alert('There was a problem with the server');
            console.log(err);
            } else {
            alert(err.response.data.msg);
            }
        }  //Path may change with the file structure
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
                <div className='custom-file upload-row row'>
                    <div className="col-9">
                        <input type="file" name="resource" required={true} onChange={this.changeHandler} placeholder="Upload PDF" className='custom-file-input' />
                        <label className='custom-file-label' htmlFor='customFile'>
                            {this.state.filename}
                        </label>
                    </div>
                    <div className="col-3 upload-button">
                        <input type='submit' value='Upload' className='btn btn-success' />
                    </div>
                </div>
            </form>
        )
    }
}

export default UploadPDF;
