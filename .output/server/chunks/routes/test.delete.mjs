import { e as eventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const test_delete = eventHandler(() => {
  return {
    code: 200,
    msg: "delete"
  };
});

export { test_delete as default };
//# sourceMappingURL=test.delete.mjs.map
