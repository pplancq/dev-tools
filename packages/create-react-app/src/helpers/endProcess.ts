export const endProcess = (error = false) => {
  process.exit(error ? 1 : 0);
};
