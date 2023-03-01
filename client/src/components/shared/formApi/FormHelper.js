import { addUser } from './../../../api/graphql/register';
import { login } from './../../../api/graphql/login';
import { setStorage } from '../../../config/storage';

export function updateValue(stateName, newValue, formStates) {
  const fields = formStates.fields;

  const updatedFields = fields.map((fieldEle) => {
    if (stateName === fieldEle.name) fieldEle.value = newValue;
    return fieldEle;
  });
  return { ...formStates, fields: updatedFields };
}

export async function register(formStates) {
  let message = '';
  let error = false;
  const newUserInfo = await addUser(formStates.fields);
  if (newUserInfo.errors) {
    message = newUserInfo.errors[0].message;
    error = true;
  } else message = 'Register successfully , Check your email to verify your account';
  return { message, error };
}

export async function loginUser(formStates) {
  let message = '';
  let error = false;
  let token = '';
  const loginInfo = await login(formStates.fields);
  if (loginInfo.errors) {
    message = loginInfo.errors[0].message;
    error = true;
  } else {
    token = loginInfo.data.loginUser;
    message = 'login successfully';
    setStorage('token', token);
  }

  return { message, error, token };
}

export function getInputValue(stateName, formStates) {
  const fields = formStates.fields;
  let value = '';
  fields.forEach((ele) => {
    if (ele.name === stateName) value = ele.value;
  });
  return value;
}

export function getAllFormValues(formStates) {
  const fields = formStates.fields;

  const fieldsResult = {};
  for (let fieldElement of fields) {
    fieldsResult[fieldElement.name] = fieldElement.value;
  }

  return fieldsResult;
}
