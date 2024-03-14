const validateInfo = (name, email, phone) => {
  let errors = {};
  if (name.length <= 0) {
    errors.name = false;
  } else {
    errors.name = true;
  }

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (emailReg.test(email)) {
    errors.email = true;
  } else {
    errors.email = false;
  }

  const phoneReg = /^\(?([+]31|0031|0)-?6(\s?|-)([0-9]\s{0,3}){8}$/; // checks only dutch phone numbers

  if (phoneReg.test(phone)) {
    errors.phone = true;
  } else {
    errors.phone = false;
  }

  return errors;

  if (Object.values(errors).every((value) => value)) {
    return true;
  } else {
    return errors;
  }
};

export default validateInfo;
