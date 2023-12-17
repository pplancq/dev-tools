module.exports = module => {
  try {
    require.resolve(module);
    return true;
  } catch (e) {
    return false;
  }
};
