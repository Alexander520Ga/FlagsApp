export const dataFetch = async () => {
  try {
    const req = await fetch('https://restcountries.com/v3.1/all');
    const res = await req.json();
    return res;
  } catch (error) {
    console.log('error al hacer la peticion: ', error);
  }
};
