const codeMessage = {
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录',
  500: '服务器发生错误，请检查服务器',
  503: '服务不可用，服务器暂时过载或维护',
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

function request(url, options) {
  const newOptions = {
    credentials: 'include',
    ...options 
  };
  if (newOptions.method === 'POST') {
    newOptions.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json());
}

export { 
  request
}