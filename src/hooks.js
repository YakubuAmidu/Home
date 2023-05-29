import { useEffect, useState  } from 'react';

export const useFetch = (url, initialState) => {
    const [result, setResult] = useState(initialState);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log('Jokes json', json);

            setResult(json)
        });
    }, [url]);

    return result;
}

export const useDynamicTransition = ({ delay, increment, length }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex(
            storedIndex => {
                return (storedIndex + increment) % length;
            }); 
        }, delay);

        return () => clearInterval(interval);

    }, [delay, increment, length]);

    return index;
}