import axios from 'axios';
import { baseUrl } from '@utils';
import { useNotificationStore, useUserStore } from '@store';

const useOrderApi = () => {
  const userStore = useUserStore();
  const notification = useNotificationStore();

  const getOrder = async (order_id) => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseUrl}/get_order/${order_id}`,
        headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
        withCredentials: true,
      })

      return response.data;
    } catch (err) {
      handleError(err.message);
    }
  };

  const saveOrder = async (order) => {
    console.log(order)
    // try {
    //   const response = await axios({
    //     method: 'PATCH',
    //     url: `${baseUrl}/save_order/${order_id}`,
    //     headers: { 'Authorization': `Bearer ${userStore.accessToken}` },
    //     withCredentials: true,
    //   })

    //   return response.data;
    // } catch (err) {
    //   handleError(err.message);
    // }
  };

  const handleError = (error) => {
    notification.show(error || 'Что-то пошло не так!', 'error');
  };

  return {
    getOrder, saveOrder
  };
};

export default useOrderApi;
