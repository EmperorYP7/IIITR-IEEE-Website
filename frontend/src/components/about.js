import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './about.css';
class About extends Component {

    constructor()
    {
        super();
        this.state = {
            cards : []
        }
    }

    componentDidMount()
    {
        fetch('/api/cards')
            .then(res => res.json())
            .then(cards => this.setState({cards}));
    }
    
    render() {
        return (
            <div>
                <section>
                    <div className="mb-5 container-fluid"><h2>About IEEE</h2></div>
                    <div className="row container-fluid">
                        {this.state.cards.map(card =>
                            <div className="col-lg-4 col-md-4 col-sm-12 mb-4" key={card.id}>
                            <div><h3>{card.topic}</h3></div>
                            <div>{card.description}</div>
                            <a href={card.link}><button className="btn btn-primary mt-3">{card.buttontxt}</button></a>
                        </div>
                        )}
                    </div>
                </section>
            </div>
        );
    }
}

export default About;