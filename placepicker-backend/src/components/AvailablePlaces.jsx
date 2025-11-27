
import Places from './Places.jsx';
import ErrorComp from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js'


async function fetchSortedPlaces(){
  const places = await fetchAvailablePlaces();

  return new Promise ((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
       );
       
       resolve(sortedPlaces)
       });
  })
}    

export default function AvailablePlaces({ onSelectPlace }) {

  const { isFetching, error, fetchedData: availablePlaces} = useFetch(fetchSortedPlaces, [])

    if(error){
      return(
        <ErrorComp title='An error ocurred!' message={error.message} />
      )
    }

    if(error){
      return(
        <ErrorComp title='An error ocurred!' message={error.message} />
      )
    }

  return (
    <Places
      title="Available Places"
      loadingText="Fetching place data..."
      isLoading={isFetching}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
