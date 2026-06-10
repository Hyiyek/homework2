function buildServerUrl(host, portValue, useHttps) {
  if (!host) {
    return "host가 필요합니다.";
  }

  const port = Number(portValue);

  if (!Number.isFinite(port)) {
    return "port는 숫자여야 합니다.";
  }

  if (!Number.isInteger(port)) {
    return "port는 정수여야 합니다.";
  }

  if (port < 1 || port > 65535) {
    return "port 범위가 올바르지 않습니다.";
  }

  const protocol = useHttps ? "https" : "http";
  return `${protocol}://${host}:${port}`;
}

console.log(buildServerUrl("localhost", "3000", false));
console.log(buildServerUrl("", "3000", false));
console.log(buildServerUrl("api.local", "abc", true));
console.log(buildServerUrl("api.local", "3000.5", true));