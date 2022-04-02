async function request(url, option) {

  try {
    const response = await fetch(url, option);

    if (response.ok == false) {
      const error = response.json();
      alert(error.message);
      throw new Error(error.message);
    }

    try {
      const data = await response.json();
      return data;
    } catch (err) {
      return response;
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const settings = {
    host: ''
};

function createOptions(method = 'get', data) {

    const options = {
        method,
        headers: {}
    };

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = sessionStorage.getItem('userToken');
    if(token !== null) {
      options.headers['X-Authorization'] = token;
    }

    return options;
}


export async function get(url) {
    return await request(url, createOptions('get'));
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url) {
    return await request(url, createOptions('delete'));
}

export async function login(username, password) {
    const result = await post(settings.host + '/users/login', {username, password});
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('userToken', result.accessToken);
    sessionStorage.setItem('userName', result.username);
    return await result;
}

export async function register(username, password) {
  const result = await post(settings.host + '/users/register', {username, password});
  sessionStorage.setItem('userId', result._id);
  sessionStorage.setItem('userToken', result.accessToken);
  sessionStorage.setItem('userName', result.username);
  return await result;
}

export async function logout() {
  const result = await get(settings.host + '/users/logout');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('userToken');
  sessionStorage.removeItem('userName');
  return await result;
}