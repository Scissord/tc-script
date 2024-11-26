import { useOrderApi } from '@api';

const useOrder = () => {
  const {
    getOrder, saveOrder
  } = useOrderApi();

  const handleGetOrder = async (order_id) => {
    const order = await getOrder(order_id);
    return order;
  }

  const handleSaveOrder = async (order) => {
    await saveOrder(order);
  };

  return {
    handleGetOrder, handleSaveOrder
  }
};

export default useOrder;
