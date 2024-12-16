import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/UI/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import themeColors from '../../theme/themeColors';
import {getUsers} from '../../store/actions/userActions';
import RemoteUserCard from '../../components/users/remoteUserCard';

const RemoteUsers = ({navigation}) => {
  const {users, pending} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({results: 10}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={themeColors.black} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text
              style={{
                textAlign: 'center',
                margin: 30,
                padding: 25,
                fontSize: 22,
                color: themeColors.orange,
                fontWeight: '700',
              }}>
              Henüz bir kullanıcı eklenmedi!
            </Text>
          }
          data={users}
          renderItem={({item, index}) => (
            <RemoteUserCard user={item} index={index} />
          )}
        />
      )}
      <FloatActionButton
        onPress={() => navigation.navigate(ADDNEWUSER)}
        style={{marginbottom: 5}}
      />
    </View>
  );
};

export default RemoteUsers;
