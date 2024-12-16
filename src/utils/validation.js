import * as Yup from 'yup';

const newUserSchema = Yup.object().shape({
  name: Yup.string().required('Zorunlu alan'),
  surname: Yup.string().required('Zorunlu alan'),
  phoneNumber: Yup.string()
    .max(20, 'Max 20')
    .min(11, 'Min 11')
    .required('Zorunlu alan'),
  email: Yup.string().email('Invalid email adress').required('Zorunlu alan'),
  gender: Yup.string().required('Zorunlu alan'),
  age: Yup.number()
    .max(90, 'Max 90')
    .min(18, 'Min 18')
    .required('Zorunlu alan'),
});
export {newUserSchema};
