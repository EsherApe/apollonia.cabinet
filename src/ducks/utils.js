import { Map, OrderedMap } from "immutable";

export function dataToEntities(data, RecordModel = Map) {
  return (new OrderedMap(data)).mapEntries(([id, value]) => (
    [id, (new RecordModel(value)).set('id', id)]
  ))
}

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

export function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => error)
}