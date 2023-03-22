import PropTypes from 'prop-types';
import { Formik, Field} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage, SubmitBtn } from './ContactForm.styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const ContactShema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  number: Yup.string()
    .min(2, 'Number is too short!')
    .max(50, 'Number is too long!')
    .required('Number is required'),
});


export const ContactsForm = ({onSubmit}) => {
    return (
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}
      validationSchema={ContactShema}
      onSubmit = {(values, actions) => {
        onSubmit({...values, id: nanoid()});
        actions.resetForm();
    }}
    >
      <Form>
        <FormField>
            Name
            <Field name="name"/>
            <ErrorMessage name="name" component="span"/>
        </FormField>
        <FormField>
            Number
            <Field name="number" type="tel"/>
            <ErrorMessage name="number" component="span"/>
        </FormField>
            <SubmitBtn type="submit" onSubmit={onSubmit}>
                <BsFillPersonPlusFill size="15" />
                <span>Add contact</span>
            </SubmitBtn>
      </Form>
    </Formik>
    )
}

ContactsForm.propTypes = {
    onAddContact: PropTypes.func
}