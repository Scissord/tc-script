import { useUserStore } from '@store';
import { useAuthApi } from '@api';

const useAuth = () => {
  const userStore = useUserStore();
  const { signin, logout } = useAuthApi();

  const handleSignIn = async (login, password) => {
    const data = await signin({ login, password });
    // set To Locale Storage and Pinia
    userStore.setUser(data.user);
    userStore.setAccessToken(data.accessToken);
  };

  const handleLogout = async () => {
    const data = await logout();
    if(data.status === "ok") {
      userStore.clearUser();
    }
  };

  return {
    handleSignIn,
    handleLogout
  }
};

export default useAuth;
