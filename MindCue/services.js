import axios from 'axios';

export const setAuthToken = token => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } catch (e) {
    console.log(e.message);
  }
};
//it will connect token to axios headers auto so we dont have add them manually each time.