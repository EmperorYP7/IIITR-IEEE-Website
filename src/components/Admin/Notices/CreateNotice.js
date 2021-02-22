import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import UploadPDF from './Uploadpdf';

class CreateNotice extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleNoticeAdd = this.handleNoticeAdd.bind(this);

        this.state = {
            name: '',
            shortDescription: '',
            pdfPath: '',
            pdfUploaded: false
        }
    }
    componentDidMount() {

    }

    handleNoticeAdd = (e) => {
        e.preventDefault();
        if(!this.state.pdfUploaded)
        {
            alert("Please upload PDF");
            return;
        }
        const notice = {
            name: this.state.name,
            shortDescription: this.state.shortDescription,
            pdfPath: this.state.pdfPath
        }
        axios.post(`/api/noticedata/`, notice)
            .then(res => {
                this.setState({
                    name: '',
                    pdfPath: '',
                    shortDescription: '',
                    pdfUploaded: false
                });
                this.props.UpdateState();
                alert("Notice Created");
            })
            .catch(err => {
                console.log(err);
            })
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="display-4 align-content-center">Add New Notice</div>
                <form className="col-12 align-content-center" onSubmit={this.handleNoticeAdd}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" required={true} className="form-control" name="name" onChange={this.changeHandler} placeholder="Name of new notice" value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortDescription">Short Description</label>
                        <input type="text" required={true} className="form-control" name="shortDescription" onChange={this.changeHandler} value={this.state.shortDescription} placeholder="Describe briefly" />
                    </div>
                    <button type="submit" className="btn btn-success">Add notice</button>
                </form>
                <div>
                    <label htmlFor="notice" className="upload-event-poster">Upload PDF</label>
                    {this.state.pdfUploaded ? <p>PDF uploaded</p> : <UploadPDF setPdfPath={ path => this.setState({pdfPath: path, pdfUploaded: true}) }/> }
                </div>
            </div>
        );
    }
}

export default CreateNotice;
