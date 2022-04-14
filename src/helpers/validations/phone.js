export const checkIsPhoneCodeCorrect = phoneNumber => {
  if (phoneNumber.length) {
    const phoneCode = Number(phoneNumber.substr(2, 3));
    return phoneCode <= 999 && phoneCode >= 900;
  }
  return false;
};
