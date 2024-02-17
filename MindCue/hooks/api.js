import axios from 'axios';

import {useContext} from 'react';
import {AuthContext} from '../contexts/authContext';
import {BASEURL} from '../IP';

const useApi = () => {
  const {accessToken} = useContext(AuthContext);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  };

  const apiInstance = axios.create({
    baseURL: BASEURL,
    timeout: 30 * 1000, // 15 sec
    ...config,
  });

  const get = (url, configs) => {
    return apiInstance.get(url, configs).catch(err => {
      return err;
    });
  };

  const put = (url, params, config) => {
    return apiInstance.put(url, params, config).catch(err => {
      return err;
    });
  };

  const patch = (url, params, config) => {
    return apiInstance.patch(url, params, config).catch(err => {
      return err;
    });
  };

  const del = url => {
    return apiInstance.delete(url).catch(err => {
      return err;
    });
  };

  const post = async (url, params, config) => {
    try {
      const response = await apiInstance.post(url, params, config);
      return response;
    } catch (error) {
      return error;
    }
  };

  const toQueryParams = params => {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
  };

  const toFormDataArray = params => {
    return Object.entries(params).map(([name, data]) => ({
      name,
      data: `${data}`,
    }));
  };


  return {get, post, put, patch, del, toQueryParams, toFormDataArray};
};

export default useApi;