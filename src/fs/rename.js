import fs from 'fs/promises';
import path from 'path';

const sourceFile = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
const targetFile = path.join(import.meta.dirname, 'files', 'properFilename.md');

const fsErrorMessage = 'FS operation failed';

const rename = async () => {
  try {
    await fs.access(targetFile);
    throw new Error(fsErrorMessage);
  } catch (error) {
    if (error instanceof Error && error.message === fsErrorMessage) {
      throw error;
    }
  }

  try {
    await fs.rename(sourceFile, targetFile);
  } catch {
    throw new Error(fsErrorMessage);
  }
};

await rename();
