let serverUrl = "http://127.0.0.1:8000";
export function loginAuth(username, token, client_id) {
  return fetch(`${serverUrl}/user/loginAuth`, {
    method: "POST",
    headers: {
      username,
      token,
      client_id,
    },
  });
}
export function checkAvailable(username) {
  return fetch(`${serverUrl}/user/available`, {
    method: "POST",
    headers: {
      username,
    },
  });
}

export function authUser(username, password) {
  if ((username, password)) {
    return fetch(`${serverUrl}/user/auth`, {
      method: "POST",
      headers: {
        username,
        password,
      },
    });
  }
}
export function loginUser(username, password) {
  if ((username, password)) {
    return fetch(`${serverUrl}/user/login`, {
      method: "POST",
      headers: {
        username,
        password,
      },
    });
  }
}
export function signUp(username, password, name) {
  return fetch(`${serverUrl}/user/add`, {
    method:"POST",
    headers: {
      username,
      name,
      password,
    },
  });
}
