import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { isEmpty } from 'lodash';

async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const requestVariables = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: '',
      'Content-Type': 'application/json',
    },
  };
  let body;

  if (!isEmpty(uploadables)) {
    if (!window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.');
    }

    const formData = new FormData();
    formData.append('query', operation.text);
    formData.append('variables', JSON.stringify(variables));
    Object.keys(uploadables).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });
    body = formData;
  } else {
    requestVariables.headers['Content-Type'] = 'application/json';
    body = JSON.stringify({
      query: operation.text,
      variables,
    });
  }
  const token = await localStorage.getItem('access_token');

  if (token) {
    requestVariables.headers.Authorization = 'Bearer ' + token;
  }

  return window.fetch(process.env.REACT_APP_GRAPHQL_API_URL + '/',
    {
      ...requestVariables,
      body,
    },
  )
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(res => res.json())
    .catch(err => {
      console.log(err.message);
    });
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});