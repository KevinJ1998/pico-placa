import checkHour from './checkHour';
import { message } from 'antd';

const daysRestrictions = {
  1: [ 1, 2 ],
  2: [ 3, 4 ],
  3: [ 5, 6 ],
  4: [ 7, 8 ],
  5: [ 9, 0 ]
};

export default function checkLicensePlateLastDigit( licensePlateLastDigit, todayDay, todayHoursAndMinutes, component ) {
  const licensePlatesOfToday = daysRestrictions[ Object.keys( daysRestrictions )[ Object.keys( daysRestrictions )
    .indexOf( todayDay.toString() ) ] ];

  if( licensePlatesOfToday && licensePlatesOfToday.includes( parseInt( licensePlateLastDigit ) ) && checkHour( todayHoursAndMinutes ) ) {
    message.warn( component === 'today'
      ? 'El vehículo con estas placas no puede circular en este momento'
      : 'El vehículo con las placas indicadas no puede circular en la fecha y hora ingresada' );
  } else {
    message.info( component === 'today'
      ? 'El vehículo con estas placas puede circular en este momento'
      : 'El vehículo con las placas indicadas puede circular en la fecha y hora ingresada' );
  }
};
