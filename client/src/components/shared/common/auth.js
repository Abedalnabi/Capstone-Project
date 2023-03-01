import { getStorage } from '../../../config/storage';
import jwt_decode from 'jwt-decode';

export function getToken() {
  const token = getStorage('token');
  return token;
}

export function isLoggedIn() {
  let loggedInd = false;
  const token = getStorage('token');
  if (token) loggedInd = true;
  return loggedInd;
}

export function decodeToken() {
  const token = getStorage('token');
  let userInfo;
  if (token) {
    userInfo = jwt_decode(token);
  }
  return userInfo;
}
