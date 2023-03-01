export function getStorage(name) {
  return localStorage.getItem(name);
}

export function setStorage(name,value) {
  return localStorage.setItem(name, value);
}

export function removeStorage(name) {
  return localStorage.removeItem(name);
}
