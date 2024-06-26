import { e as eventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index_put = eventHandler(async (_event) => {
  return {
    code: 200,
    msg: "\u7F16\u8F91\u6210\u529F"
  };
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
