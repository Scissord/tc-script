import axios from 'axios';
import { baseUrl } from '@utils';
import { useNotificationStore } from '@store';

const useAuthApi = () => {
  const notification = useNotificationStore();

  // SignIn / Войти
  const signin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, data, { withCredentials: true });
      notification.show("Успешно!", "success");
      return response.data;
    } catch (err) {
      handleError(err.response?.data?.error);
    }
  };

  // LogOut / Выйти
  const logout = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/logout`, data, { withCredentials: true });
      notification.show("Успешно!", "success");
      return response.data;
    } catch (err) {
      handleError(err.response?.data?.error);
    }
  };

  // Обработка ошибки
  const handleError = (error) => {
    notification.show(error || 'Что-то пошло не так!', 'error');
  };

  return { signin, logout };
};

export default useAuthApi;
