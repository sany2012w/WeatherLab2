export default function getAddedCitiesFromLocalStorage(key = 'added_cities') {
  const localValue = localStorage.getItem(key);
  const localStorageContent = JSON.parse(localValue);
  let added_cities = [];
  if (localStorageContent !== null && Array.isArray(localStorageContent))
    added_cities = localStorageContent;
  return new Map(added_cities.map(cityName => [cityName]));
}
