import getAddedCitiesFromLocalStorage from '../actions/getAddedCitiesFromLocalStorage';

export default function addedCitiesReducer(state = {added_cities: getAddedCitiesFromLocalStorage()}, action) {
  state = {
    ...state,
    error: false,
    added_cities: new Map(state.added_cities)
  };

  switch (action.type) {
    case 'ADD_CITY':
      if (!state.added_cities.has(action.payload))
        state.added_cities.set(action.payload);
      break;
    case 'DELETE_CITY':
      state.added_cities.delete(action.payload);
      break;
    case 'FETCH_ADDED_CITY_SUCCESS':
      state.added_cities.delete(action.payload.cityName);
      state.added_cities.set(action.payload.response.name, action.payload.response);
      break;
    case 'FETCH_ADDED_CITY_ERROR':
      state.error = action.payload.error;
      state.added_cities.delete(action.payload.cityName);
      break;
    default:
      break;
  }
  return state;
}
