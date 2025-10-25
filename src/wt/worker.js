import { parentPort, workerData } from 'worker_threads';

/**
 * @param {number} n
 * @returns {number}
 */
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (typeof workerData !== 'number' || workerData < 0) {
    throw new Error('Incorrect data');
  }

  parentPort?.postMessage(nthFibonacci(workerData));
};

sendResult();
