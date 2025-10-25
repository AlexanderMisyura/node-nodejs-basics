import fs from 'fs';
import path from 'path';
import stream from 'stream/promises';

const sourceFile = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readStream = fs.createReadStream(sourceFile);
  await stream.pipeline(readStream, process.stdout);
};

await read();
