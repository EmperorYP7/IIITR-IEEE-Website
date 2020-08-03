import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Society.css';
// import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

import pikachu from './images/pikachu.png';
import vaporeon from './images/vaporeon.png';
import eeve from './images/eeve.jpg';


const popover = (
  <Popover id="popover-basic" >
    <Popover.Title as="h3">Student Chapter</Popover.Title>
    <Popover.Content >
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Popover.Content>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="bottom" className="content" overlay={popover}>
  <Button variant="dark" className="button">Read More</Button>

  </OverlayTrigger>
);
class Society extends React.Component {

    render() {


        return (
            <div>
          <CardColumns className="deck">

              <Card>
                <Card.Img variant="top" className="img" src={pikachu} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted"> <Example/></small>
                </Card.Footer>
              </Card>

              <Card>
                  <Card.Img variant="top" className="img" src={vaporeon} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{' '}
                            .{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted"><Example /> </small>
                            </Card.Footer>
              </Card>


              <Card>
                <Card.Img variant="top" className="img" src={eeve} />
                      <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{' '}
                            {' '}
                            </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted"><Example /></small>
                      </Card.Footer>
            </Card>
</CardColumns>

            </div>
        );
    }
}

export default Society;
