import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../../contextApi/contexts/UserContext';
import { decodeToken } from '../common/auth';
import * as FormHelper from './FormHelper';
import userType from '../../../enums/enums';

const useForm = (formStates, setFormStates) => {
  const { setToken, setUserInfo } = useUserContext();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const eventInputValue = (stateName, newValue) => {
    const updatedForm = FormHelper.updateValue(stateName, newValue, formStates);
    setFormStates(updatedForm);
  };

  const register = async () => {
    const registerUser = await FormHelper.register(formStates);
    setMessage(registerUser.message);
    if (!registerUser.error) {
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  const login = async () => {
    const loginUserInfo = await FormHelper.loginUser(formStates);
    setMessage(loginUserInfo.message);
    if (!loginUserInfo.error) {
      setTimeout(() => {
        setToken(loginUserInfo.token);
        const userInfo = decodeToken();

        setUserInfo(userInfo);
        if (userInfo.roleId === userType.gym) navigate('/dashboard/gym');
        else navigate('/');
      }, 1000);
    }
  };

  const getCurrentFormValues = async (e) => {
    e.preventDefault();

    const newUserInfo = await FormHelper.getAllFormValues(formStates);
    return newUserInfo;
  };

  return {
    eventInputValue,
    register,
    message,
    login,
    getCurrentFormValues,
    setMessage,
  };
};

export default useForm;
