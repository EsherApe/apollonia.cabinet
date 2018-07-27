export function postData(url, payload) {
  const data = {};
  const payloadKeys = Object.keys(payload);
  payloadKeys.map((item) => {
    data[item] = payload[item];
  });

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => error)
}