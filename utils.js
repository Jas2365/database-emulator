const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';

const generate10Id = (charSet, length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return result;
}

export const UniqueId = () => {
  const part1 = generate10Id(letters, 4);
  const part2 = generate10Id(digits, 4);
  const part3 = generate10Id(letters, 4);
  return part1 + part2 + part3;
}