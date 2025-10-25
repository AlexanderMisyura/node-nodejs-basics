import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import stream from 'stream/promises';

const filePath = path.join(
  import.meta.dirname,
  'files',
  'fileToCalculateHashFor.txt'
);

const calculateHash = async () => {
  const fileHash = crypto.createHash('sha256');
  const readStream = fs.createReadStream(filePath);

  await stream.pipeline(readStream, fileHash);
  console.log(fileHash.digest('hex'));
};

await calculateHash();
