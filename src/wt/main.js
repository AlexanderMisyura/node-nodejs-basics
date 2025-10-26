import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const workerPath = path.join(import.meta.dirname, 'worker.js');
const startCalcNumber = 10;
const workerThreads = os.cpus().length;

const performCalculations = async () => {
  const results = await Promise.all(
    Array.from({ length: workerThreads }, (_, index) => {
      return new Promise((resolve) => {
        const worker = new Worker(workerPath, {
          workerData: startCalcNumber + index,
        });

        worker.on('message', (calcResult) => {
          resolve({ status: 'resolved', data: calcResult });
        });

        worker.on('error', () => {
          resolve({ status: 'error', data: null });
        });
      });
    })
  );

  console.log(results);
};

await performCalculations();
