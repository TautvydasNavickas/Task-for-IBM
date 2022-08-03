import React from 'react';
import { Card, Accordion } from 'react-bootstrap'

const color="#3d4147"
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const StockCard = (props) => {
  return (
    <div style={{position:'relative', height:"100%", width:"100%"}}>
      <Accordion>
        <Card text="white" border="success" style={{ width: '100%', backgroundColor:color }}>
          <Card.Header as="h3">
              {props.symbol}
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              ${props.data[0][4]}
              <br/>
              {numberWithCommas(props.volume[0][1])}
            </Card.Subtitle>
          </Card.Body>
        </Card>      
      </Accordion>
    </div>
  );
};

export default StockCard;