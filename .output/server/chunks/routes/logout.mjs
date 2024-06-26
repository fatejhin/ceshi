import { e as eventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const logout = eventHandler(() => {
  return {
    code: 200,
    msg: "success"
  };
});

export { logout as default };
//# sourceMappingURL=logout.mjs.map
