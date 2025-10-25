import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import stream from 'stream/promises';

const sourceFile = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
const targetArchive = path.join(import.meta.dirname, 'files', 'archive.gz');


const compress = async () => {
  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(targetArchive);

  await stream.pipeline(readStream, gzip, writeStream);
};

await compress();
