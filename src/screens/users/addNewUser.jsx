import React from 'react';
import {ScrollView, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Input} from '../../components/UI/input';
import Button from '../../components/UI/button';
import {Formik} from 'formik';
import {newUserSchema} from '../../utils/validation';
import {useDispatch} from 'react-redux';
import {addNewUser} from '../../store/slice/userSlice';
import {USERS} from '../../utils/routes';

const AddNewUser = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          name: '',
          surname: '',
          phoneNumber: '',
          email: '',
          gender: '',
          age: '',
        }}
        validationSchema={newUserSchema}
        onSubmit={values => {
          dispatch(addNewUser(values));
          navigation.navigate(USERS);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              placeholder="Please set name"
            />
            <Input
              error={errors.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surnamename}
              title="Surname"
              placeholder="Please set Surname"
            />
            <Input
              error={errors.email}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="Email"
              placeholder="Please set email"
              key="e-mail"
            />
            <Input
              error={errors.phoneNumber}
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone number"
              placeholder="Please set phone number"
              key="phone-Number"
            />
            <Input
              error={errors.gender}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              title="Gender"
              placeholder="Please set gender"
            />
            <Input
              error={errors.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              title="Age"
              placeholder="Please set age"
            />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewUser;
