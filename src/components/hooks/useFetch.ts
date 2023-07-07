import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url:string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const callAPI = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL+url);
                setData(res.data);
            } catch {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        callAPI();
    }, [url]);

    return {data, isLoading, error};
};

export default useFetch;
