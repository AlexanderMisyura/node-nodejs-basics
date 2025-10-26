import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import stream from 'stream/promises';

const sourceArchive = path.join(import.meta.dirname, 'files', 'archive.gz');
const targetFile = path.join(
  import.meta.dirname,
  'files',
  'fileToCompress.txt'
);

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const readStream = fs.createReadStream(sourceArchive);
  const writeStream = fs.createWriteStream(targetFile);

  await stream.pipeline(readStream, unzip, writeStream);
};

await decompress();
