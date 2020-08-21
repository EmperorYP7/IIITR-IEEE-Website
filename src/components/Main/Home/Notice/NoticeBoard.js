import React from 'react';
import './Notice.css';
import axios from 'axios';
// import logo from './ieee.jpg';

class NoticeBoard extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            notices: []
        };
    }

    componentDidMount()
    {
        axios.get('https://ieeemock2.azurewebsites.net/api/noticedata/')
            .then(res => {
                this.setState({ notices: res.data });
            })
            .catch(err => console.log("Error" + err));
    }

    render() {
        return (
            <div className="box noticeboard morespacing">
                <h3 className="about">Notice</h3><hr></hr>
                <div className="col-12 pad">
                    <ul className="text-white scroll-up">
                        {this.state.notices.map( notice =>
                        <li key={notice._id}><a rel="noopener noreferrer" href={`https://ieeemock2.azurewebsites.net/upload/pdf/notice/${notice.pdfPath}`} target="_blank">{notice.name}<span className="text-danger">[New]</span></a></li>
                        )}
                    </ul>
                </div>
        </div>
        )
    }
}

export default NoticeBoard;
