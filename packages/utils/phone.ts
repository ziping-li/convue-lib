import PhoneNumber from 'awesome-phonenumber';

export const getSupportedCallingCodes = () => {
  let supportedCallingCodes = Array.from(new Set(PhoneNumber.getSupportedCallingCodes())).sort(
    (a, b) => {
      return Number(a) - Number(b);
    }
  );
  return supportedCallingCodes.map((n) => `+${n}`);
};

export const isPhone = (phone: any, separator: string = '') => {
  if (separator && phone.includes(separator)) {
    const phoneArray = phone.split(separator);
    phone = phoneArray[0] + phoneArray[1];
  }
  const pn = new PhoneNumber(phone);
  return pn.isValid();
};

export const getPhoneNumber = (phone: any, separator: string = '', code = '+86') => {
  try {
    if (separator && phone.includes(separator)) {
      const phoneArray = phone.split(separator);
      return {
        code: phoneArray[0],
        phone: phoneArray[1],
      };
    }

    const pn = new PhoneNumber(phone);
    if (!isPhone(phone, separator)) {
      return {
        code,
        phone,
      };
    } else {
      return {
        code: '+' + pn.getCountryCode(),
        phone: pn.getNumber('significant'),
      };
    }
  } catch (err) {
    return {
      code,
      phone: '',
    };
  }
};

export const checkPhone = (separator: string = '') => (_rule: any, value: string) => {
  if (!value) {
    return Promise.reject('请输入手机号');
  } else if (!isPhone(value, separator)) {
    return Promise.reject('请输入正确的手机号');
  } else {
    return Promise.resolve();
  }
};
