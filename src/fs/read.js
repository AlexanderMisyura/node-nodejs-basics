import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(`\x1b[33m${data}\x1b[0m`);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
