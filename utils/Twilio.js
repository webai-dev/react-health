export const getTwilioChatToken = (identity) => {
  const accessToken = localStorage.getItem('access_token');

  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_REST_API_URL + '/twilio/token/chat', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identity,
      }),
    })
      .then(async res => {
        if (res.ok) {
          return res.json();
        } else {
          const error = await res.json();
  
          console.log(error);
  
          throw Error(error.error.message);
        }
      })
      .then(async(res) => {
        resolve(res);
      })
      .catch(e => {
        reject(e);
      });
  });
};