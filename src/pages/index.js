import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {Formik} from 'formik';
import SC from 'styled-components';
import {Button, Box} from '@mui/material';
import {Page, InputPhone} from '../components';
import {phoneSchema} from '../helpers/phone.schema';
import {contact} from '../api';

const Label = SC.div`
  font-size: 22px;
  font-weight: 500;
`;

export default function Home() {
  const [loading, setLoading] = React.useState(false);

  const handleSend = React.useCallback(async (phone = '') => {
    setLoading(true);
    try {
      await contact({ phone });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>App</title>
        <meta property="og:title" content="app" />
        <meta property="og:description" content="app" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="app" />
        <meta property="twitter:description" content="app" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page
        label="Сайт закрыт на техническое обслуживание"
        text="В данный момент сайт находится на реконструкции или в разработке. Приносим свои извинения за временные неудобства."
      >
        <Formik
          initialValues={{}}
          validationSchema={phoneSchema}
          onSubmit={({ phone }) => {
            handleSend(phone);
          }}
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
      </Page>
    </>
  )
}
