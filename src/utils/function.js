const compareName = (name, surname) => {
  return `${name} ${surname}`;
};

const getInitialNameSurname = (name, surname) => {
  return (
    (name?.charAt(0)?.toUpperCase() ?? '') +
    (surname?.charAt(0)?.toUpperCase() ?? '')
  );
};

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16527295)
    .toString(16)
    .padStart(6, '0')}`;
  return randomColor;
};
export {compareName, getInitialNameSurname, getRandomColor};
