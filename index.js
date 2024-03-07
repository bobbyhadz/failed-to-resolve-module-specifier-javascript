console.log('bobbyhadz.com');

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

async function getUser() {
  try {
    const response = await axios.get(
      'https://randomuser.me/api/',
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());
