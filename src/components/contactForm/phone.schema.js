import * as Yup from 'yup';
import { checkIsPhoneCodeCorrect } from '../../helpers/validations/phone';

export const phoneSchema = Yup.object().shape({
  phone: Yup.string().nullable().required('Укажите телефон')
    .length(12, 'Некорректный формат телефона')
    .test('isValid', 'Укажите корректный код оператора', phoneNumber =>
      phoneNumber ? checkIsPhoneCodeCorrect(phoneNumber) : false,
    ),
});
