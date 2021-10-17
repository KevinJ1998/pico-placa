export default function checkHour( todayHourAndMinutes ) {
  return ((parseInt( todayHourAndMinutes ) > 700 || parseInt( todayHourAndMinutes ) < 930) || (parseInt( todayHourAndMinutes ) > 1600 || parseInt( todayHourAndMinutes ) < 1930));
}
