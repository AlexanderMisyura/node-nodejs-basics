const parseArgs = () => {
  let result = '';

  process.argv.slice(2).forEach((arg, index) => {
    if (index % 2 === 0) {
      const name = arg.indexOf('--') === 0 ? arg.slice(2) : arg;
      result += `${name} is `;
    } else {
      result += arg;
      console.log(result);
      result = '';
    }
  });
};

parseArgs();
