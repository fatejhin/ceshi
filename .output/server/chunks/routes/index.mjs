import { e as eventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const index = eventHandler(() => {
  return { nitro: "Hello Antdv Pro" };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
