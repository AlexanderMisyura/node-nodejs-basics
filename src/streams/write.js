import fs from 'fs';
import path from 'path';
import stream from 'stream/promises';

const targetFile = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = fs.createWriteStream(targetFile);
  await stream.pipeline(process.stdin, writeStream);
};

await write();
