import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { EOL } from 'os';

const transform = async () => {
  const transformStream = new Transform({
    /** @param {Buffer} chunk */
    transform(chunk, _enc, callback) {
      const resultChunk = chunk.toString().trim().split('').reverse().join('');

      this.push(`${resultChunk}${EOL}`);

      callback();
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
