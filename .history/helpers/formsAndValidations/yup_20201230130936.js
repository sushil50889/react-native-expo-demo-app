import * as Yup from 'yup';

export const loginFormValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, 'Too Short!').max(20, 'Too Long!').required('Required')
});