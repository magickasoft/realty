import React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {Formik} from 'formik';
import {InputPhone} from '../inputPhone';
import {Select} from '../select';
import {contact} from '../../api';
import {phoneSchema} from './phone.schema';

const prices = [
  {
    value: 3500,
    label: 'до 3 500 000 рублей',
  },
  {
    value: 4000,
    label: 'до 4 000 000 рублей',
  },
  {
    value: 5000,
    label: 'до 5 000 000 рублей',
  },
  {
    value: 6000,
    label: 'до 6 000 000 рублей',
  },
  {
    value: 7000,
    label: 'до 7 000 000 рублей',
  },
  {
    value: 8000,
    label: 'до 8 000 000 рублей',
  },
  {
    value: 10000,
    label: 'до 10 000 000 рублей',
  },
  {
    value: 15000,
    label: 'более 15 000 000 рублей',
  },
];

export const ContactForm = props => {
  const [loading, setLoading] = React.useState(false);

  const handleSend = React.useCallback(async (phone = '', price) => {
    setLoading(true);
    try {
      await contact({phone, price});
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
        price: 4000,
      }}
      validationSchema={phoneSchema}
      onSubmit={({phone, price}) => {
        handleSend(phone, price);
      }}
      {...props}
    >
      {({handleSubmit, handleChange, handleBlur, isValid, dirty, touched, errors, values: {phone, price}}) => {
        const toSend = () => {
          handleSend(phone, price);
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
              <Box>
                <Select
                  items={prices}
                  label="Стоимость квартиры"
                  name="price"
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price ? errors.price : undefined}
                  value={price}
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
