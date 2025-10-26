const variablePrefix = 'RSS_';

const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter(([key]) => key.startsWith(variablePrefix))
    .map(([key, value]) => `${key}=${value}`);

  if (result.length) {
    console.log(`\x1b[33m${result.join('; ')}\x1b[0m`);
  }
};

parseEnv();
