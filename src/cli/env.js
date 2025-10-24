const variablePrefix = 'RSS_';

const parseEnv = () =>
  Object.entries(process.env)
    .filter(([key]) => key.startsWith(variablePrefix))
    .forEach(([key, value]) => console.log(`${key}=${value}`));

parseEnv();
