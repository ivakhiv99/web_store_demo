import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import axios, { AxiosResponse } from 'axios';

interface SingleResponse {
    responses: Record<string, unknown>[];
    isLoading: boolean;
    error: string | null;
}

const useFetchMultiple = (urls: string[]): SingleResponse => {
    const [responses, setResponses] = useState<Record<string, unknown>[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    // console.log(useFetch(urls[0]))

    useEffect(() => {
        console.log('useFetchMultiple',{urls})
        const makeRequests = async () => {
            try {
                const arrayOfResponses = await Promise.all(urls.map((url: string) => axios.get(import.meta.env.VITE_API_URL+url).then(({data})=>data)));
                console.log({arrayOfResponses})

                setResponses(arrayOfResponses);
            } catch {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        makeRequests();
    }, []);

    return {responses, isLoading, error};
}

export default useFetchMultiple;
