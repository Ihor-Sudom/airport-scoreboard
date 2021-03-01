import moment from 'moment';

export const fetchFlightsList = (airplaneAction, dateFlights) => 
  fetch(`https://api.iev.aero/api/flights/${dateFlights}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Server is not available')
    })
    .then(res => 
      res.body[`${airplaneAction.slice(0, -1)}`].map(el => {
        const name = el.airline 
          ? el.airline.en.name 
          : el['carrierID.code'];
        const avatar = el.airline 
          ? el.airline.en.logoSmallName 
          : null;
        const status = airplaneAction === 'departures'
          ? el.timeTakeofFact
          : el.timeLandFact;

        return {
          id: el.ID, 
          terminal: el.term,
          localTime: el.timeDepShedule || el.timeToStand,
          status,
          flight: `${el['carrierID.IATA'] || el['carrierID.code']}${el.fltNo}`,
          airlineName: name,
          airlineAvatar: avatar,
          destination: el['airportToID.city_en'] || el['airportFromID.city_en'],
        }
      })
    )
    .then(res => res.filter(el => moment(el.localTime).format("DD-MM-YYYY") === dateFlights))
    .catch(error => alert(error.message))
