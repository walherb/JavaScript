// Single-page applications (SPA)

import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.mydomain.com');

      setData(response.data);
    };

    fetchData();
  }, []);

  return <></>;
};

export default App;
