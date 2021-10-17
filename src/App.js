import React from 'react';
import './styles/App.css';
import { VerifyLicensePlateToday } from './components/VerifyLicensePlateToday';
import { VerifyLicensePlateWithADate } from './components/VerifyLicensePlateWithADate';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div className='App'>
      <Row justify={ 'center' }>
        <Col>
          <Title level={ 2 }>Verifica si tu vehículo puede circular hoy y a esta hora</Title>
        </Col>
      </Row>
      <Row justify={ 'center' }>
        <Col>
          <VerifyLicensePlateToday />
        </Col>
      </Row>
      <Row justify={ 'center' } style={ { marginTop: 20 } }>
        <Col>
          <Title level={ 2 }>Verifica que día puede circular tu vehículo</Title>
        </Col>
      </Row>
      <Row justify={ 'center' }>
        <Col>
          <VerifyLicensePlateWithADate />
        </Col>
      </Row>

    </div>
  );
}

export default App;
