import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url,dependencies ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url,dependencies);
        
        const meal = response.data.meals
        console.log(meal);
        
        if( meal !== null){
         setData(meal)
        }
        else{
          setData('')
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dependencies]);

  return { data, loading, error };
};

export default useFetch;
