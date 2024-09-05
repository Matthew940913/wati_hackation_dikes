import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BroadcastPage() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Make the API call here
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
      setData(response.data); // Store the data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return <div>Broadcast</div>;
};

export default BroadcastPage;
