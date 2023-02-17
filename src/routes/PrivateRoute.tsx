import { ROUTES } from '@/constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export const PrivateRoute = ({ children }: Props) => {
  // const user = useSelector(getUser);
  // if (!user.isLogin) alert('회원 전용 페이지 입니다.\n로그인 페이지로 이동합니다.');
  // return user.isLogin ? children : <Navigate to={ROUTES.HOME} replace />;

  // test
  return children;
};

export default PrivateRoute;
