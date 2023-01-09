import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './FormContact.module.css';
import { PropTypes } from 'prop-types';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Your name is too short')
    .required('Please enter your full name'),
  number: yup
    .string()
    .required('Domain is required.')
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContacts = props => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, number } = values;
    props.addContact({ name: name, number: number });
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
          Name
          <Field
            className={s.input}
            placeholder="Full name"
            type="text"
            name="name"
          />
          <ErrorMessage
            className={s.errorMassege}
            name="name"
            component="div"
          />
        </label>
        <br />
        <label className={s.label} htmlFor="password">
          Number
          <Field
            className={s.input}
            placeholder="Phone number: +380..."
            type="tel"
            name="number"
          />
          <ErrorMessage
            className={s.errorMassege}
            name="number"
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

FormContacts.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default FormContacts;
