import { e as eventHandler, s as setResponseStatus } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const _500 = eventHandler((event) => {
  setResponseStatus(event, 500);
  return {
    code: 500,
    msg: "\u670D\u52A1\u5668\u9519\u8BEF"
  };
});

export { _500 as default };
//# sourceMappingURL=500.mjs.map
