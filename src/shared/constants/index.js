export const ACCESS_TOKEN = 'at';

export const parseJWT = token => {
  if (token === null || token === undefined) {
    return 0;
  } else {
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
});

export const validateEmail = email => {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
};

export const validatePassword = password => {
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length > 4
  )
    return true;
  return false;
};
