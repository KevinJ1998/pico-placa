import React, { useState } from 'react';
import { Input, message } from 'antd';
import checkLicensePlate from '../utils/checkLicensePlate';
import checkLicensePlateLastDigit from '../utils/checkLicensePlateLastDigit';

const { Search } = Input;

export const VerifyLicensePlateToday = () => {

  const [ loading, setLoading ] = useState( false );


  const onVerify = ( value ) => {
    if( checkLicensePlate( value ) ) {
      const licensePlateLastDigit = value.charAt( value.length - 1 );
      const todayDay = new Date().getDay();
      const todayHourAndMinutes = `${ new Date().getHours() }${ new Date().getMinutes() }`;
      setLoading( true );
      setTimeout( () => {
        checkLicensePlateLastDigit( licensePlateLastDigit, todayDay, todayHourAndMinutes, 'today' );
        setLoading( false );
      }, 500 );
    } else {
      message.error( 'Ingrese una placa válida e intente de nuevo' );
    }
  };
  return <Search
    placeholder='Placa'
    enterButton='Verificar'
    style={ { width: 300 } }
    allowClear
    loading={ loading }
    onSearch={ onVerify }
  />;
};
