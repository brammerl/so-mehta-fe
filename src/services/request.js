const NONBODY_METHODS = ['GET', 'DELETE'];

export const request = (path, method, body) => {
  return fetch(`http://localhost:7890/api/v1/${path}`, {
    method, 
    headers: NONBODY_METHODS.includes(method) ? {} : { 'Content-Type': 'application/json'},
    body: NONBODY_METHODS.includes(method) ? null: JSON.stringify(body)
  })
  .then(res => res.json());
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const patch = (path, body) => request(path, 'PATH', body);
export const del = path => request(path, 'DELETE');
