import { e as eventHandler, r as readBody, s as setResponseStatus } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const login_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const { type } = body;
  const success = {
    code: 200,
    data: {
      token: "1234567890"
    },
    msg: "\u767B\u5F55\u6210\u529F"
  };
  if (type !== "mobile") {
    success.data.token = Buffer.from(body.username).toString("base64");
    if (body.username === "admin" && body.password === "admin")
      return success;
    if (body.username === "user" && body.password === "user")
      return success;
  } else {
    return success;
  }
  setResponseStatus(event, 403);
  return {
    code: 401,
    msg: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF"
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
