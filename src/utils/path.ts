import { useLocation } from 'react-router-dom';

const isCurPath = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};

export default isCurPath;
