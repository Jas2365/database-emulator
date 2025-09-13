import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Promisified question helper
 * @param {string} query
 * @returns {Promise<string>}
 */
export function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

export function closePrompt() {
  rl.close();
  // When readline closes, exit the process
  // Keep behavior similar to original test.js
  process.exit(0);
}

export default rl;
