import { e as eventHandler, s as setResponseStatus } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const _id__delete = eventHandler((event) => {
  const id = event.context.params.id;
  if (typeof id !== "number") {
    setResponseStatus(event, 403);
    return {
      code: 403,
      msg: "\u5220\u9664\u5931\u8D25"
    };
  }
  return {
    code: 200,
    msg: "\u5220\u9664\u6210\u529F"
  };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
