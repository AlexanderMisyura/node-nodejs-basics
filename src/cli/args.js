const parseArgs = () => {
  /** @type {string[]} */
  let result = [];
  let pair = '';

  process.argv.slice(2).forEach((arg, index) => {
    if (index % 2 === 0) {
      const name = arg.startsWith('--') ? arg.slice(2) : arg;
      pair += `${name} is `;
    } else {
      pair += arg;
      result.push(pair);
      pair = '';
    }
  });

  console.log(`\x1b[33m${result.join(', ')}\x1b[0m`);
};

parseArgs();
