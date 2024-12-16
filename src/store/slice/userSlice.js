import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {getUsers} from '../actions/userActions';

const initialState = {
  users: [],
  pending: false,
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
      Alert.alert('Kullanıcı eklendi!');
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      Alert.alert('Kullanıcı silindi!');
    },
    updateUser: (state, action) => {
      state.users = state.users.map(user =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.pending = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const {addNewUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
