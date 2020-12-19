import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = React.createContext({});
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = {username: 'BOB'};
          setUser(fakeUser);
          AsyncStorage.setItem('user', JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
