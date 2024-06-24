export const defaultResetPassword = (hours: number) => {
  const date = new Date();
  date.setHours(date.getHours() + 7 + hours);

  return date;
};
