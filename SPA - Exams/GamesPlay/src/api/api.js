async function request(url, options) {
  const response = await fetch(url, options);

  try {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    try {
      const data = response.json();
      return data;
    } catch (err) {
      return response;
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

const settings = {
  host: "",
};

function createOptions(method = "GET", data) {
  const result = {
    method,
    headers: {},
  };

  if (data) {
    result.headers["Content-type"] = "application/json";
    result.body = JSON.stringify(data);
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (user != null) {
    result.headers["X-Authorization"] = user.accessToken;
  }

  return result;
}

async function get(url) {
  return await request(url, createOptions());
}

async function post(url, data) {
  return await request(url, createOptions("POST", data));
}

async function put(url, data) {
  return await request(url, createOptions("PUT", data));
}

async function del(url) {
  return await request(url, createOptions("DELETE"));
}

async function login(data) {
  const response = await post(settings.host + "/users/login", data);
  localStorage.setItem("user", JSON.stringify(response));
}

async function register(data) {
  const response = await post(settings.host + "/users/register", data);
  localStorage.setItem("user", JSON.stringify(response));
}

async function logout() {
  await get(settings.host + "/users/logout");
  localStorage.removeItem("user");
}

export { get, post, put, del, settings, login, register, logout };
