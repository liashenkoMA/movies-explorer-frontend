const auth = {
  baseUrl: 'https://api.moviesmak.nomoredomainsrocks.ru',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'no-cors',
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
  }
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export function signUp(name, email, password) {
  return fetch(`${auth.baseUrl}/signup`, {
    method: "POST",
    headers: auth.headers,
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
    })
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem('jwt', data.token)
      return data;
    })
};

export function signIn(email, password) {
  return fetch(`${auth.baseUrl}/signin`, {
    method: "POST",
    headers: auth.headers,
    credentials: 'include',
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    })
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem('jwt', data.token)
      return data;
    })
};

export function getUser(token) {
  return fetch(`${auth.baseUrl}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  })
    .then(checkResponse)
    .then((user) => {
      return user.data;
    })
};

export function patchUser(name, email) {
  return fetch(`${auth.baseUrl}/users/me`, {
    method: "PATCH",
    headers: auth.headers,
    credentials: 'include',
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`,
    })
  })
    .then(checkResponse)
};

export function signOutUser() {
  return fetch(`${auth.baseUrl}/signout`, {
    method: "POST",
    headers: auth.headers,
    credentials: 'include',
  })
};

export function postMovies(country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) {
  return fetch(`${auth.baseUrl}/movies`, {
    method: "POST",
    headers: auth.headers,
    credentials: 'include',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    })
  })
    .then(checkResponse)
};

export function deleteMovies(id) {
  return fetch(`${auth.baseUrl}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: auth.headers,
  })
    .then(checkResponse)
};

export function getSaveMovies() {
  return fetch(`${auth.baseUrl}/movies`, {
    headers: auth.headers,
    credentials: 'include',
  })
    .then(checkResponse)
    .then((result) => {
      return result;
    })
};
