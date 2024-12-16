import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNEWUSER,
  REMOTEUSERS,
  USERDETAIL,
  USERS,
  USERUPDATE,
} from '../utils/routes';
import Users from '../screens/users';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';
import UserUpdate from '../screens/users/userUpdate';
import RemoteUsers from '../screens/users/remoteUsers';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={REMOTEUSERS} component={RemoteUsers} />
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
      <Stack.Screen name={USERUPDATE} component={UserUpdate} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
