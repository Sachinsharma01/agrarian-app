export const getData = async () => {
  const res = await fetch('https://fakestoreapi.com/products/1');
  const data = await res.json();
  console.log('data $$$$$$$$$', data);
};

export const getSMS = async () => {
  const res = await fetch(
    'https://verify.twilio.com/v2/Services/VA8789ec2fbe3d97be10fa0a21492d7fd5/Verifications',
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic QUMwNzc4ZmM3YTBlMzEwNjljYzU4ZTc0ZDk3NTZjMTA2Zjo0NjBiNjIxOTUwZjc4YzM3N2Q2NzI0NDM4YjU4MjdhMA==',
      }),
      body: JSON.stringify({
        To: '+917500298871',
        Channel: 'sms',
      }),
    },
  );
  const data = await res.json();
  console.log('data $$$$$$$$$', data);
};
export const makeUser = async () => {
  const res = await fetch('https://quiz-backend-rewamp.onrender.com/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'sachinisready22466',
      email: 'sachinisready1234566@test1.com',
      password: 'sachinisready',
    }),
  });
  const data = await res.json();
  console.log('data $$$$$$$$$', data);
};
