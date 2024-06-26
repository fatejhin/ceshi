import { e as eventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const create_post = eventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return {
    code: 200,
    msg: "\u521B\u5EFA\u6210\u529F"
  };
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
