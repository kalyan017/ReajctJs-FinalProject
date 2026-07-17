import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();
                setTimeout(() => {
                    setData(result);
                    setLoading(false);
                }, 500);
            } catch (err) {
                setError(err.message);

            } 
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}