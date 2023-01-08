import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './FormContact.module.css';

const schema = yup.object().shape({
  login: yup
    .string()
    .min(2, 'Your name is too short')
    .required('Please enter your full name'),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const FormContacts = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form} autoComplete="off">
        <label className={s.label} htmlFor="login">
          Login
          <Field className={s.input} type="text" name="login" />
          <ErrorMessage
            className={s.errorMassege}
            name="login"
            component="div"
          />
        </label>
        <br />
        <label className={s.label} htmlFor="password">
          Password
          <Field className={s.input} type="tex9+" name="password" />
          <ErrorMessage
            className={s.errorMassege}
            name="password"
            component="div"
          />
        </label>
        <button className={s.Submit} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormContacts;
