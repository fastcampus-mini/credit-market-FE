/* eslint-disable react/react-in-jsx-scope */
import { logout } from '@/apis/auth';
import axios from 'axios';
import Button from './Button';
import { axiosInstance } from '@/apis/instance';
import { API_URLS } from '@/constants/apiUrls';
import useCookies from 'react-cookie/cjs/useCookies';
import { BiLogOut } from 'react-icons/bi';

type Props = {};

const LogoutButton = (props: Props) => {
  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post('api/logout');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Button onClick={logout}>
      {' '}
      <BiLogOut />{' '}
    </Button>
  );
};

export default LogoutButton;
