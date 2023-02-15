import { useLocation } from 'react-router-dom';

const locationPath = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};

export default locationPath;
