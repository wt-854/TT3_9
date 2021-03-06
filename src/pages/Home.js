import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div className='main-container'>
        <p>This is the home page</p>
        {/* rename modules according */}
        <Container>
          <Row>
            <Card style={{ width: '18rem' }}>
              <Link to={`/viewinfo`}>
                <Card.Img src={'images/bank.png'} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/viewinfo`}>
                  <Card.Title as='div'>
                    <strong>Info</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>View user information</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Link to={`/transaction`}>
                <Card.Img src={'images/lock.png'} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/transaction`}>
                  <Card.Title as='div'>
                    <strong>Buy/Sell Assets</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>
                  Buy and sell at the best bank in the world
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Link to={`/viewAsset`}>
                <Card.Img src={'images/bank_2.png'} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/viewAsset`}>
                  <Card.Title as='div'>
                    <strong>View Assets</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>View Current Price of TTK</Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card style={{ width: '18rem' }}>
              <Link to={`/transactionHistory`}>
                <Card.Img src={'images/atm.png'} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/transactionHistory`}>
                  <Card.Title as='div'>
                    <strong>Transaction History</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>View Transaction History</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Link to={`/cashwallet`}>
                <Card.Img src={'images/img1.png'} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/cashwallet`}>
                  <Card.Title as='div'>
                    <strong>Cash Assets</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>
                  View Cash Balance and Asset Balance
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Link to={`/history`}>
                <Card.Img src={'images/img1.png'} variant='top' />
              </Link>
              <Card.Body>
                <Link to={`/history`}>
                  <Card.Title as='div'>
                    <strong>Asset Price History</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div'>View table of price history</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
