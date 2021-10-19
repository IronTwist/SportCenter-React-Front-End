import { useSelector } from 'react-redux';

const useUser = () => {
  const { user } = useSelector((store) => store.login.data);

  return {
    user,
    isAdmin: !!user.roles.find((e) => e === 'ROLE_ADMIN'),
  };
};

export default useUser;
