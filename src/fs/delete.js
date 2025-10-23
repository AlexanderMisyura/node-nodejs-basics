import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.unlink(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
