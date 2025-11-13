import { useEffect, useState } from 'react'
import Places from './Places.jsx';
import ErrorComp from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState()

  useEffect(() => {  

    async function fetchPlaces() {
      setIsFetching(true)
      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json()

        if(!response.ok){
          throw new Error("Failed to fetch places")
        }

        setAvailablePlaces(resData.places)
      } catch(error) {
        setError({message: error.message || "Could not fetch places please try again later."})
      }
      
      setIsFetching(false)
    }

    fetchPlaces();
    // fetch('http://localhost:3000/places')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places)
    //   });
    }, []);

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
