import { spawn } from 'child_process';
import path from 'path';

const scriptPath = path.join(import.meta.dirname, 'files', 'script.js');

/** @param {string[]} args */
const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [scriptPath, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
