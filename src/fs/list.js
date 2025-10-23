import fs from 'fs/promises';
import path from 'path';

const dirPath = path.join(import.meta.dirname, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
