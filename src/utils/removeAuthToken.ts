// import { getCookie, setCookie } from './cookie';

// export const removeAuthToken = () => {
//   const tokenExpiration = getCookie('tokenExpiration');
//   if (!tokenExpiration) return;
//   const expirationTime = Number(tokenExpiration) + 60 * 60 * 1000; // 1 hour
//   const currentTime = new Date().getTime();
//   if (expirationTime < currentTime) {
//     setCookie('accessToken', '', { path: '/', maxAge: 0 });
//     setCookie('tokenExpiration', '', { path: '/', maxAge: 0 });
//   }
// };
