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