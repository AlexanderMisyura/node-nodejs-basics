import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(filePath, fileContent, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
