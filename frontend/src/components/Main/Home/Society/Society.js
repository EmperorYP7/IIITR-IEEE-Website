import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Society.css';
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import { CARDS } from './societycards';


class Society extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      selectedSociety: null,
      cards: CARDS
    }
  }


  societySelect(id) {
    this.setState({ selectedSociety: id });
  }

  rendersociety(card) {
    if (card != null) {
      return (
        <div className="box mb-5">
          <div className="col-lg-12 col-md-12">
            <h3>{card.name} </h3>
            <p>

              {card.fulldescription}

            </p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div> </div>
      );
    }
  }

  render() {


    const show = this.state.cards.map((card) => {
      return (

        <Card>

          <Card.Img variant="top" className="img" src={card.image} />
          <div class="overlay">
    <div class="text"><Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
              {card.shortdescription}{' '}
            </Card.Text>
          </Card.Body></div>
  </div>

          <Card.Footer className="society-card-footer">
          <Card.Title>{card.name}</Card.Title>
          </Card.Footer>
        </Card>

      );
    });
    return (

      <div className="container-fluid bg-nmg mx-0 my-0" >
        <h2 className="text-center">Societies under IEEESB</h2><hr></hr>
        <CardColumns className="deck">

          {show}
        </CardColumns>

        {this.rendersociety(this.state.selectedSociety)}
      </div>
    );
  }
}

export default Society;
