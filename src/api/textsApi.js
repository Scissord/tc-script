import axios from 'axios';
import { baseUrl } from '@utils';
import { useNotificationStore, useUserStore } from '@store';

const useTextsApi = () => {
  const userStore = useUserStore();
  const notification = useNotificationStore();

  const createText = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseUrl}/get_script_text/${text_id}`,
        headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
        withCredentials: true,
        data: {
          department_id: userStore.data.department_id,
          content: '',
          queue_order: 1,
          good_id: 1,
          chapter_id: 1
        }
      })

      return response.data;
    } catch (err) {
      handleError(err.message);
    }
  };

  // Обработка ошибки
  const handleError = (error) => {
    notification.show(error || 'Что-то пошло не так!', 'error');
  };

  return {
    createText
  };
};

export default useTextsApi;
