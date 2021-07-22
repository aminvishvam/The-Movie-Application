import { useState, useEffect } from "react";
import API from '../API';
//helpers
import { isPersistedState } from '../helpers';

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                //get directors only 
                const directors = await credits.crew.filter(
                    member => member.job === 'Director'
                );
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })
                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        //check if we have anything in the session storage
        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            console.log("Grabbing from the session storage")
            setState(sessionState);
            setLoading(false)
            return;
        }
        console.log("Grabbing from the API")
        fetchMovie();
    }, [movieId])

    //In-order to right to the session storage we have to make the useEffect which can right to the session storage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])
    return ({ state, loading, error })
}
