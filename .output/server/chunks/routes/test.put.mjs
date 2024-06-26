import { e as eventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const test_put = eventHandler(() => {
  return {
    code: 200,
    msg: "put"
  };
});

export { test_put as default };
//# sourceMappingURL=test.put.mjs.map
