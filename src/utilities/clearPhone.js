export function clearPhone(phone) {
  const newPhone = phone.replace(/[()-\s]/g, '').slice(-11);
  return Number(newPhone);
}
