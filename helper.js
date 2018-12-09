import { readFileSync } from 'fs';

const getTextFile = (fileName) => {
  require.extensions['.txt'] = function(module, filename) {
    module.exports = readFileSync(filename, 'utf8');
  };

  return require(fileName);
};

export default { getTextFile };
