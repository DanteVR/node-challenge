export const calculateAge = (birthday: string): number => {
  const diff = Date.now() - +birthday;
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}