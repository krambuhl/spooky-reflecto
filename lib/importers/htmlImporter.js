import through from 'through2';
import createImporter from '../createImporter';

export default htmlImporter = createImporter(
  function parse() {
    return through.obj((file, enc, next) => {
      next(null, file);
    });
  }
);
