export default function checkLicensePlate( licensePlate ) {
  if( licensePlate.includes( '-' ) ) {
    const licensePlateArray = licensePlate.split( '-' );
    return licensePlateArray[ 0 ].length === 3 && (licensePlateArray[ 1 ].length === 4 || licensePlateArray[ 1 ].length === 3) && !isNaN( licensePlateArray[ 1 ] );
  } else {
    return false;
  }
}
