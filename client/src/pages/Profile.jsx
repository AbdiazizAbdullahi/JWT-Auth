import { useEffect, useState } from 'react';
import useAuthStore from '../store/JwtToken';

function Profile() {
  const [userData, setUserData] = useState(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      fetch('http://127.0.0.1:3000/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data.user));
    }
  }, [token]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {userData.username}!</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default Profile;
