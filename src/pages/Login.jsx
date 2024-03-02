import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { registerUser } from '../utils/api';

const Login = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  console.log('accessToken', accessToken);

  useEffect(() => {
    if (!accessToken) {
      const apiCall = async () => {
        // here i get an access token back from the api.js but it is not required actually
        const getAccessToken = await registerUser();
      };
      apiCall();
    }
  }, [accessToken]);

  return <LoginForm />;
};

export default Login;
