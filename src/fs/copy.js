import fs from 'fs/promises';
import path from 'path';

const sourceDir = path.join(import.meta.dirname, 'files');
const targetDir = path.join(import.meta.dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.cp(sourceDir, targetDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
