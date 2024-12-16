import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/UI/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import themeColors from '../../theme/themeColors';

const Users = ({navigation}) => {
  const {users} = useSelector(state => state.users);

  return (
    <View style={defaultScreenStyle.container}>
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
        renderItem={({item}) => <UserCard user={item} />}
        keyExtractor={item => item.id || item.name.first + item.name.last}
      />
      <FloatActionButton
        onPress={() => navigation.navigate(ADDNEWUSER)}
        style={{marginbottom: 5}}
      />
    </View>
  );
};

export default Users;
