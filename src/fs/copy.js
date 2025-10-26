import fs from 'fs/promises';
import path from 'path';

const sourceDir = path.join(import.meta.dirname, 'files');
const targetDir = path.join(import.meta.dirname, 'files_copy');

const fsErrorMessage = 'FS operation failed';

const copy = async () => {
  try {
    await fs.access(targetDir);
    throw new Error(fsErrorMessage);
  } catch (error) {
    if (error instanceof Error && error.message === fsErrorMessage) {
      throw error;
    }
  }

  try {
    await fs.cp(sourceDir, targetDir, { recursive: true });
  } catch (error) {
    throw new Error(fsErrorMessage);
  }
};

await copy();
