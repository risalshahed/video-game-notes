// generic hook

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number,
  results: T[]
}

// generic type parameter -> <T>
// "21" 2nd paramter requestConfig, r 3rd param dbo useEffect er dependency add krte (r eita k optional krbo cz amr always dependency dorkar nai o)
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        
        setLoading(true);
        
        // "21" ei j 2nd parameter a { signal: controller.signal }, eita hoilo axios request config object, ei obsject a amra data, request body, query string parameter bla bla pathaite pari
        // "21" spread requestConfig object to add any additional properties here
        // "21" eta add krar pore 1ta genre te click kore browser er "network" tab a giye dekhbo, dekhbo notun kore kisu load hosse na! cz amra ei useEffect er kono depArray dei nai! tai 1bar e render hosse, ekhn amra dependency diye dbo (scroll down please)
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then(res => {
            setData(res.data.results);
            
            setLoading(false);
        })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            
            setLoading(false);
        });

        return () => controller.abort();
    // "21" 'deps' to optional, so eta thakle dependecy thakbe, otherwise no dependency (ignore the yellow marked error)
    }, deps ? [...deps] : []);

    
    return { data, error, loading };
};

export default useData;