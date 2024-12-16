import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/function';
import {Calendar1, CallCalling, Man, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/UI/button';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser, updateUser} from '../../store/slice/userSlice';
import {USERS, USERUPDATE} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const UserDetail = ({route}) => {
  const {user} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {users} = useSelector(state => state.users);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    navigation.navigate(USERS);
  };
  const handleUpdate = () => {
    dispatch(updateUser(user.id));
    navigation.navigate(USERS);
  };

  if (!user) {
    return <p>Kullanıcı bulunamadı!</p>;
  }

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 0.5,
            borderColor: getRandomColor(),
          }}>
          <View
            style={{
              width: 85,
              height: 85,
              borderWidth: 1,
              borderRadius: 45,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: getRandomColor(),
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              {getInitialNameSurname(user.name.first, user.name.last)}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              {compareName(user.name.first, user.name.last)}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
            }}>
            <Sms size="28" color="#2ccce4" variant="Bold" />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
            }}>
            <CallCalling size="28" color="#37D67A" variant="Bold" />
            <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 15}}>
              {user.phone}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
            }}>
            {user.gender == 'Erkek' ? (
              <Man size="28" color="#FF8A65" variant="Bold" />
            ) : (
              <Woman size="28" color="#FF8A65" variant="Bold" />
            )}
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.gender}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
            }}>
            <Calendar1 size="28" color="#ba68c8" variant="Bold" />
            <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 15}}>
              {user.dob.age}
            </Text>
          </View>
        </View>
        <View>
          <Button title="Delete" status="info" onPress={handleDelete} />
          <Button
            title="Update User"
            status="warning"
            onPress={() => navigation.navigate(USERUPDATE, user)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;
