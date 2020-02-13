import { fetchGeolocationSuccess, fetchGeolocationError, setLoadingTrue, setLoadingFalse } from './geolocationAction';

export function fetchWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=7db91fe431e03b68585256ef75b7bcd6&units=metric&lang=en`)
      .then(response => {
        response.json()
          .then(json => {
            if (response.ok) {
              dispatch(fetchGeolocationSuccess(json));
            } else {
              let error = json.message;
              dispatch(fetchGeolocationError(error));
            }
          });
      },
      error => dispatch(fetchGeolocationError(error)));
  }
}
