import { useEffect, useState } from 'react';
import { api } from '../config/axios';

export default function Home() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    api
      .get('/health')
      .then((res) => setData(res.data))
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {err && <p style={{ color: 'red' }}>Error: {err}</p>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
