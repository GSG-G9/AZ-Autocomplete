// eslint-disable-next-line no-unused-vars
const apiFunction = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        // eslint-disable-next-line no-console
        console.log(xhr.status);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
};
