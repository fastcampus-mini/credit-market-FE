import axios from 'axios';
import Button from './Button';
import { axiosInstance } from '@/apis/instance';
import { API_URLS } from '@/constants/apiUrls';
import useCookies from 'react-cookie/cjs/useCookies';

type Props = {};

const [cookies, setCookies] = useCookies(['userName', 'accessToken']);

const LogoutButton = (props: Props) => {
  const handleLogout = async () => {
    const response = await axiosInstance.post(API_URLS.LOGOUT, {
      Authorization: cookies.accessToken,
    });
    console.log(response);
  };

  return <Button onClick={handleLogout}> Logout </Button>;
};

export default LogoutButton;
