import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Society.css';
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
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
        <div className="box ">
          <div className="col-lg-12 col-md-12">
            <h3 >{card.name} </h3>
            <p >

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

        <Card key={card.id}>

          <Card.Img variant="top" className="img-society" src={card.image} />
          <div className="overlay">
            <div className="society-card"><Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text className="society-desc">
                {card.shortdescription}{' '}
              </Card.Text>
            </Card.Body></div>
          </div>

          <Card.Footer className="society-card-footer">
            <Card.Title className="society-name">{card.name}</Card.Title>
          </Card.Footer>
        </Card>

      );
    });
    return (

      <div className="container-fluid" >
        <h2 className="col-head">Societies under IEEESB</h2><hr></hr>
        <CardColumns className="deck card-col">

          {show}
        </CardColumns>

        {this.rendersociety(this.state.selectedSociety)}
      </div>
    );
  }
}

export default Society;
