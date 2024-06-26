import { e as eventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const test_post = eventHandler(() => {
  return {
    code: 200,
    msg: "post"
  };
});

export { test_post as default };
//# sourceMappingURL=test.post.mjs.map
