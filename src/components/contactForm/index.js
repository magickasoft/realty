import React from 'react';
import Box from '@mui/material/Box';
import {Formik} from 'formik';
import {InputPhone} from '../inputPhone';
import {contact} from '../../api';
import {Button} from '../button';
import {phoneSchema} from './phone.schema';
import {event} from '../../helpers/gtag';
import {reachGoal} from '../../helpers/ym';

export const ContactForm = props => {
  const [loading, setLoading] = React.useState(false);

  const handleSend = React.useCallback(async (phone = '') => {
    setLoading(true);
    try {
      await contact({phone});
      event({action: 'submit_form', category: 'contact_phone', label: phone});
      reachGoal('contact_phone');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Formik
      initialValues={{
        phone: '',
      }}
      validationSchema={phoneSchema}
      onSubmit={({phone}) => {
        handleSend(phone);
      }}
      {...props}
    >
      {({handleSubmit, handleChange, handleBlur, isValid, dirty, touched, errors, values: {phone}}) => {
        const toSend = () => {
          handleSend(phone);
        };
        return (
          <form onSubmit={handleSubmit}>
            <Box mb={3} mt={3}>
              <Box>
                <InputPhone
                  label="Телефон"
                  name="phone"
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone ? errors.phone : undefined}
                  value={phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly={false}
                />
              </Box>
            </Box>
            <Box mb={3} mt={3}>
              <Box>
                <Button disabled={!dirty || !isValid || loading} onClick={toSend}>
                  Отправить заявку
                </Button>
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};
