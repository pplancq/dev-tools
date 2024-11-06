module.exports = module => {
  try {
    require.resolve(module);
    return true;
  } catch {
    return false;
  }
};
