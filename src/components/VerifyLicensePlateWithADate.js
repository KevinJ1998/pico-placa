import React, { useState } from 'react';
import { Form, TimePicker, Input, Button, message } from 'antd';
import checkLicensePlate from '../utils/checkLicensePlate';
import checkLicensePlateLastDigit from '../utils/checkLicensePlateLastDigit';
import moment from 'moment';

export const VerifyLicensePlateWithADate = () => {

  const [ errorDate, setErrorDate ] = useState( false );
  const [ loading, setLoading ] = useState( false );

  const validateDate = ( formDate ) => {
    return moment( formDate, 'MM/DD/YYY' ).isValid();
  };

  const onFinish = ( formFieldsValues ) => {
    if( checkLicensePlate( formFieldsValues.licensePlate ) ) {
      const licensePlateLastDigit = formFieldsValues.licensePlate.charAt( formFieldsValues.licensePlate.length - 1 );
      const todayDay = new Date( formFieldsValues.date ).getDay();
      const todayHoursAndMinutes = formFieldsValues[ 'time' ].format( 'HH:mm' ).replace( ':', '' );
      if( validateDate( formFieldsValues.date ) ) {
        setErrorDate( false );
        setLoading( true );
        setTimeout( () => {
          checkLicensePlateLastDigit( licensePlateLastDigit, todayDay, todayHoursAndMinutes );
          setLoading( false );
        }, 500 );
      } else {
        setErrorDate( true );
      }
    } else {
      message.error( 'Ingresa una placa válida e intenta de nuevo' );
    }
  };

  return (
    <Form
      labelCol={ { span: 6 } }
      wrapperCol={ { span: 14 } }
      layout='horizontal'
      name={ 'verifierForm' }
      onFinish={ onFinish }
    >
      <Form.Item
        label='Placa'
        name='licensePlate'
        rules={ [
          {
            required: true,
            message: 'La placa es requerida, ingresa porfavor'
          }
        ] }>
        <Input placeholder={ 'Ingresa la placa' } />
      </Form.Item>
      <Form.Item
        label='Fecha'
        name='date'
        validateStatus={ errorDate
          ? 'error'
          : '' }
        help={ errorDate
          ? 'Ingresa una fecha correcta'
          : '' }
        rules={ [
          {
            required: true,
            message: 'La fecha es requerida, ingresa porfavor'
          }
        ] }>
        <Input placeholder={ 'mm/dd/aaaa' } />
      </Form.Item>
      <Form.Item
        name='time'
        label='Hora'
        rules={ [
          {
            required: true,
            message: 'La hora es requerida, ingresa porfavor'
          }
        ] }>
        <TimePicker />
      </Form.Item>
      <Form.Item name={'verify-button'}>
        <Button type='primary' htmlType='submit' loading={ loading }>
          Buscar
        </Button>
      </Form.Item>
    </Form>
  );
};
