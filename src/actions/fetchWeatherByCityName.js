import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from './addedCitiesAction';

export function fetchWeatherByCityName(cityName) {
 return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7db91fe431e03b68585256ef75b7bcd6&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchAddedCitiesSuccess(json, cityName));
            } else {
              let error = json.message;
              dispatch(fetchAddedCitiesError(error, cityName));
            }
          });
      },
      error => dispatch(fetchAddedCitiesError(error, cityName)))
  }
}
