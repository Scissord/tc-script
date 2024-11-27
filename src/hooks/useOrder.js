import { useOrderApi } from '@api';

const useOrder = () => {
  const {
    getOrder, saveOrder
  } = useOrderApi();

  const handleGetOrder = async (order_id) => {
    const order = await getOrder(order_id);
    return order;
  }

  const handleSaveOrder = async (order_id, order) => {
    await saveOrder(order_id, order);
  };

  return {
    handleGetOrder, handleSaveOrder
  }
};

export default useOrder;
