export const LoginAsync = async (email: string, password: string) => {
  try {
    console.log('username=' + email + '&password=' + password);
    const response = await fetch(
      'https://acgmoqataamobileapi-staging.azurewebsites.net/token',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body:
          'username=' +
          email +
          '&password=' +
          password +
          '&grant_type=password',
      },
    );
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
