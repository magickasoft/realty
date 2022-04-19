import React from 'react';
import SC from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Formik} from 'formik';
import {InputPhone} from '../inputPhone';
import {contact} from '../../api';
import {phoneSchema} from './phone.schema';

const Label = SC.div`
  font-size: 22px;
  font-weight: 500;
`;

export const ContactForm = props => {
  const [loading, setLoading] = React.useState(false);

  const handleSend = React.useCallback(async (phone = '') => {
    setLoading(true);
    try {
      await contact({ phone });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Formik
      initialValues={{}}
      validationSchema={phoneSchema}
      onSubmit={({ phone }) => {
        handleSend(phone);
      }}
      {...props}
    >
      {({ handleSubmit, handleChange, handleBlur, isValid, dirty, touched, errors, values: { phone } }) => {
        const toSend = () => {
          handleSend(phone);
        };
        return (
          <form onSubmit={handleSubmit}>
            <Box mb={3} mt={3}>
              <Label>
                Экскурсии по новостройкам
              </Label>
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
            <Button
              disabled={!dirty || !isValid || loading}
              type="button"
              onClick={toSend}
              variant="contained"
              size="large"
              color="primary"
            >
              Отправить заявку
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};