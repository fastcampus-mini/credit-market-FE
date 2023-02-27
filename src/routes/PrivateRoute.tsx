import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { setModal } from '@/store/modalSlice';
import { getCookie } from '@/utils/cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export const PrivateRoute = ({ children }: Props) => {
  const userName = getCookie('userName');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!userName) {
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: () => {
          dispatch(setModal({ route: navigate(ROUTES.LOGIN) }));
        },
        text: MESSAGES.INVALID_AUTH,
      }),
    );
  }
  return userName && children;
};

export default PrivateRoute;
