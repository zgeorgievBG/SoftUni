function solve(obj) {
  const methodArray = ["GET", "POST", "DELETE", "CONNECT"];
  const uriPattern = /^.*[A-z0-9]*\.*[A-z0-9]*(\.*[A-z0-9]+$)?|^\*{1}$/g;
  const versionArray = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messagePattern = /[<>\\&'"]+/g

  if (!methodArray.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  if (!uriPattern.test(obj.uri)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (!versionArray.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }

  if (!versionArray.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }

  if(messagePattern.test(obj.message)) {
      throw new Error(`Invalid request header: Invalid Message`)
  }

  return obj;

}

console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }));
