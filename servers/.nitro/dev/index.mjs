import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/std-env@3.7.0/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, createError, getRouterParam, getQuery as getQuery$1, readBody, getHeader } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/ufo@1.5.3/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import dayjs from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js';
import { cloneDeep } from 'file://D:/Front-end/fzy-login/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/Front-end/fzy-login/servers/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Front-end\\fzy-login","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Front-end\\fzy-login\\servers","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Front-end\\fzy-login\\servers\\.nitro","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Front-end\\fzy-login\\servers\\.nitro\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\Front-end\\fzy-login\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const showDetails = statusCode !== 404;
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: showDetails ? stack.map((i) => i.text) : void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const _lazy_3CJ4zG = () => Promise.resolve().then(function () { return _401$1; });
const _lazy_BRCXpQ = () => Promise.resolve().then(function () { return _403$1; });
const _lazy_pDd67q = () => Promise.resolve().then(function () { return _500$1; });
const _lazy_mAemf8 = () => Promise.resolve().then(function () { return index$3; });
const _lazy_AJBPhu = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_XvKJQy = () => Promise.resolve().then(function () { return basicList_post$1; });
const _lazy_rfInXM = () => Promise.resolve().then(function () { return consultList_post$1; });
const _lazy_FvjoHd = () => Promise.resolve().then(function () { return create_post$1; });
const _lazy_4pn4sz = () => Promise.resolve().then(function () { return crudTable_post$1; });
const _lazy_DRglc4 = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_5q3RAy = () => Promise.resolve().then(function () { return index_put$1; });
const _lazy_fX6Jn9 = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_UVyICT = () => Promise.resolve().then(function () { return logout$1; });
const _lazy_ld6dYT = () => Promise.resolve().then(function () { return index$1; });
const _lazy_tOod2z = () => Promise.resolve().then(function () { return test_delete$1; });
const _lazy_MnL90Y = () => Promise.resolve().then(function () { return test_post$1; });
const _lazy_PnSGv1 = () => Promise.resolve().then(function () { return test_put$1; });
const _lazy_wmsrUk = () => Promise.resolve().then(function () { return info$1; });

const handlers = [
  { route: '/401', handler: _lazy_3CJ4zG, lazy: true, middleware: false, method: undefined },
  { route: '/403', handler: _lazy_BRCXpQ, lazy: true, middleware: false, method: undefined },
  { route: '/500', handler: _lazy_pDd67q, lazy: true, middleware: false, method: undefined },
  { route: '/', handler: _lazy_mAemf8, lazy: true, middleware: false, method: undefined },
  { route: '/list/:id', handler: _lazy_AJBPhu, lazy: true, middleware: false, method: "delete" },
  { route: '/list/basic-list', handler: _lazy_XvKJQy, lazy: true, middleware: false, method: "post" },
  { route: '/list/consult-list', handler: _lazy_rfInXM, lazy: true, middleware: false, method: "post" },
  { route: '/list/create', handler: _lazy_FvjoHd, lazy: true, middleware: false, method: "post" },
  { route: '/list/crud-table', handler: _lazy_4pn4sz, lazy: true, middleware: false, method: "post" },
  { route: '/list', handler: _lazy_DRglc4, lazy: true, middleware: false, method: "post" },
  { route: '/list', handler: _lazy_5q3RAy, lazy: true, middleware: false, method: "put" },
  { route: '/login', handler: _lazy_fX6Jn9, lazy: true, middleware: false, method: "post" },
  { route: '/logout', handler: _lazy_UVyICT, lazy: true, middleware: false, method: undefined },
  { route: '/menu', handler: _lazy_ld6dYT, lazy: true, middleware: false, method: undefined },
  { route: '/test', handler: _lazy_tOod2z, lazy: true, middleware: false, method: "delete" },
  { route: '/test', handler: _lazy_MnL90Y, lazy: true, middleware: false, method: "post" },
  { route: '/test', handler: _lazy_PnSGv1, lazy: true, middleware: false, method: "put" },
  { route: '/user/info', handler: _lazy_wmsrUk, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _401 = eventHandler((event) => {
  setResponseStatus(event, 401);
  return {
    code: 401,
    msg: "\u8BF7\u5148\u767B\u5F55"
  };
});

const _401$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _401
});

const _403 = eventHandler((event) => {
  setResponseStatus(event, 403);
  return {
    code: 403,
    msg: "\u8BF7\u5148\u767B\u5F55"
  };
});

const _403$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _403
});

const _500 = eventHandler((event) => {
  setResponseStatus(event, 500);
  return {
    code: 500,
    msg: "\u670D\u52A1\u5668\u9519\u8BEF"
  };
});

const _500$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _500
});

const index$2 = eventHandler(() => {
  return { nitro: "Hello Antdv Pro" };
});

const index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index$2
});

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

const _id__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete
});

const basicList_post = eventHandler(async (_event) => {
  const dataList = [
    {
      title: "Aipay",
      link: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      percent: 57,
      content: "\u4E00\u751F\u90A3\u4E48\u77ED\uFF0C\u9057\u5FD8\u53C8\u90A3\u4E48\u6F2B\u957F"
    },
    {
      title: "Ant Design Vue",
      link: "https://www.antdv.com/assets/logo.1ef800a8.svg",
      percent: 60,
      status: "active",
      content: "\u53EA\u6709\u5728\u68A6\u60F3\u4E2D\uFF0C\u4EBA\u624D\u80FD\u771F\u6B63\u81EA\u7531"
    },
    {
      title: "Vue",
      link: "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",
      percent: 70,
      status: "exception",
      content: "\u751F\u547D\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\uFF0C\u7ED3\u679C\u5F80\u5F80\u51FA\u4EBA\u610F\u6599"
    },
    {
      title: "Vite",
      link: "https://cn.vitejs.dev/logo.svg",
      percent: 100,
      status: "active",
      content: "\u6709\u65F6\uFF0C\u4F60\u5FC5\u987B\u8FDB\u5165\u522B\u4EBA\u7684\u4E16\u754C\u53BB\u53D1\u73B0\u81EA\u5DF1\u7684\u4E16\u754C\u7F3A\u5C11\u4EC0\u4E48"
    },
    {
      title: "React",
      link: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
      percent: 50,
      status: "exception",
      content: "\u5E0C\u671B\u662F\u4EF6\u7F8E\u4E3D\u7684\u4E1C\u897F\uFF0C\u4E5F\u8BB8\u662F\u6700\u597D\u7684\u4E1C\u897F"
    },
    {
      title: "Antdv Pro",
      link: "/logo.svg",
      percent: 80,
      status: "active",
      content: "\u4EBA\u5E76\u975E\u751F\u6765\u5C31\u4F1F\u5927\uFF0C\u800C\u662F\u8D8A\u6D3B\u8D8A\u4F1F\u5927"
    },
    {
      title: "Webpack",
      link: "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",
      percent: 58,
      content: "\u4E0D\u7BA1\u4F55\u65F6\u4F55\u5730\uFF0C\u505A\u4F60\u60F3\u505A\u7684\u4E8B\u6C38\u8FDC\u90FD\u4E0D\u5ACC\u665A"
    },
    {
      title: "Angular",
      link: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
      percent: 70,
      status: "active",
      content: "\u4F60\u8981\u4E00\u76F4\u4E0D\u505C\u5730\u5F80\u524D\u8D70\uFF0C\u4E0D\u7136\u4F60\u4E0D\u4F1A\u77E5\u9053\u751F\u6D3B\u8FD8\u4F1A\u7ED9\u4F60\u4EC0\u4E48"
    }
  ];
  const data = [];
  for (let i = 0; i < 1e3; i++) {
    const arr = cloneDeep(dataList);
    data.push(...arr);
  }
  for (let i = 0; i < data.length; i++)
    data[i].start = dayjs().subtract(i, "hour").format("YYYY-MM-DD HH:mm");
  return {
    code: 200,
    msg: "\u83B7\u53D6\u6210\u529F",
    data
  };
});

const basicList_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: basicList_post
});

const consultList_post = eventHandler(async (_event) => {
  const body = await readBody(_event);
  const dataList = [
    {
      id: 1,
      name: "\u7B2C\u4E00\u4E2A\u4EFB\u52A1",
      callNo: 2e3,
      desc: "\u4E00\u751F\u90A3\u4E48\u77ED\uFF0C\u9057\u5FD8\u53C8\u90A3\u4E48\u6F2B\u957F",
      status: "2" /* ONLINE */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    },
    {
      id: 2,
      name: "Ant Design Vue",
      callNo: 200,
      desc: "\u6709\u65F6\uFF0C\u4F60\u5FC5\u987B\u8FDB\u5165\u522B\u4EBA\u7684\u4E16\u754C\u53BB\u53D1\u73B0\u81EA\u5DF1\u7684\u4E16\u754C\u7F3A\u5C11\u4EC0\u4E48",
      status: "0" /* OFF */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    },
    {
      id: 3,
      name: "Vue",
      callNo: 2010,
      desc: "\u4E00\u751F\u90A3\u4E48\u77ED\uFF0C\u9057\u5FD8\u53C8\u90A3\u4E48\u6F2B\u957F",
      status: "3" /* ERROR */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    },
    {
      id: 4,
      name: "Vite",
      callNo: 20300,
      desc: "\u5E0C\u671B\u662F\u4EF6\u7F8E\u4E3D\u7684\u4E1C\u897F\uFF0C\u4E5F\u8BB8\u662F\u6700\u597D\u7684\u4E1C\u897F",
      status: "3" /* ERROR */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    },
    {
      id: 5,
      name: "React",
      callNo: 2e3,
      desc: "\u4EBA\u5E76\u975E\u751F\u6765\u5C31\u4F1F\u5927\uFF0C\u800C\u662F\u8D8A\u6D3B\u8D8A\u4F1F\u5927",
      status: "2" /* ONLINE */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    },
    {
      id: 6,
      name: "Antdv Pro",
      callNo: 2e3,
      desc: "\u4E0D\u7BA1\u4F55\u65F6\u4F55\u5730\uFF0C\u505A\u4F60\u60F3\u505A\u7684\u4E8B\u6C38\u8FDC\u90FD\u4E0D\u5ACC\u665A",
      status: "0" /* OFF */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    },
    {
      id: 7,
      name: "Webpack",
      callNo: 2e3,
      desc: "\u4F60\u8981\u4E00\u76F4\u4E0D\u505C\u5730\u5F80\u524D\u8D70\uFF0C\u4E0D\u7136\u4F60\u4E0D\u4F1A\u77E5\u9053\u751F\u6D3B\u8FD8\u4F1A\u7ED9\u4F60\u4EC0\u4E48",
      status: "2" /* ONLINE */,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm")
    }
  ];
  const data = dataList.filter((i) => {
    if (body.name)
      return body.name === i.name;
    else
      return true;
  });
  return {
    code: 200,
    msg: "\u83B7\u53D6\u6210\u529F",
    data
  };
});

const consultList_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: consultList_post
});

const create_post = eventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return {
    code: 200,
    msg: "\u521B\u5EFA\u6210\u529F"
  };
});

const create_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post
});

const crudTable_post = eventHandler(async (_event) => {
  const body = await readBody(_event);
  const dataList = [
    {
      id: 1,
      name: "\u7B2C\u4E00\u4E2A\u4EFB\u52A1",
      value: "2000",
      remark: "\u4E00\u751F\u90A3\u4E48\u77ED\uFF0C\u9057\u5FD8\u53C8\u90A3\u4E48\u6F2B\u957F"
    },
    {
      id: 2,
      name: "Ant Design Vue",
      value: "200",
      remark: "\u6709\u65F6\uFF0C\u4F60\u5FC5\u987B\u8FDB\u5165\u522B\u4EBA\u7684\u4E16\u754C\u53BB\u53D1\u73B0\u81EA\u5DF1\u7684\u4E16\u754C\u7F3A\u5C11\u4EC0\u4E48"
    },
    {
      id: 3,
      name: "Vue",
      value: "2010",
      remark: "\u4E00\u751F\u90A3\u4E48\u77ED\uFF0C\u9057\u5FD8\u53C8\u90A3\u4E48\u6F2B\u957F"
    },
    {
      id: 4,
      name: "Vite",
      value: "20300",
      remark: "\u5E0C\u671B\u662F\u4EF6\u7F8E\u4E3D\u7684\u4E1C\u897F\uFF0C\u4E5F\u8BB8\u662F\u6700\u597D\u7684\u4E1C\u897F"
    },
    {
      id: 5,
      name: "React",
      value: "2000",
      remark: "\u4EBA\u5E76\u975E\u751F\u6765\u5C31\u4F1F\u5927\uFF0C\u800C\u662F\u8D8A\u6D3B\u8D8A\u4F1F\u5927"
    },
    {
      id: 6,
      name: "Antdv Pro",
      value: "2000",
      remark: "\u4E0D\u7BA1\u4F55\u65F6\u4F55\u5730\uFF0C\u505A\u4F60\u60F3\u505A\u7684\u4E8B\u6C38\u8FDC\u90FD\u4E0D\u5ACC\u665A"
    },
    {
      id: 7,
      name: "Webpack",
      value: "2000",
      remark: "\u4F60\u8981\u4E00\u76F4\u4E0D\u505C\u5730\u5F80\u524D\u8D70\uFF0C\u4E0D\u7136\u4F60\u4E0D\u4F1A\u77E5\u9053\u751F\u6D3B\u8FD8\u4F1A\u7ED9\u4F60\u4EC0\u4E48"
    }
  ];
  const data = dataList.filter((i) => {
    if (body.name)
      return body.name === i.name;
    else
      return true;
  });
  return {
    code: 200,
    msg: "\u83B7\u53D6\u6210\u529F",
    data: {
      records: data,
      total: data.length
    }
  };
});

const crudTable_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: crudTable_post
});

const index_post = eventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event);
  const dataList = [];
  for (let i = 0; i < 10; i++) {
    const item = {
      id: i + 1,
      title: `${(_a = body.title) != null ? _a : "\u6D4B\u8BD5"}_${i}`,
      username: `${(_b = body.username) != null ? _b : "test"}_${i}`,
      password: `${(_c = body.username) != null ? _c : "test"}_pass_${i}`
    };
    dataList.push(item);
  }
  return {
    code: 200,
    msg: "\u83B7\u53D6\u6210\u529F",
    data: dataList
  };
});

const index_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post
});

const index_put = eventHandler(async (_event) => {
  return {
    code: 200,
    msg: "\u7F16\u8F91\u6210\u529F"
  };
});

const index_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_put
});

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

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const logout = eventHandler(() => {
  return {
    code: 200,
    msg: "success"
  };
});

const logout$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: logout
});

const menuData = [
  {
    id: 2,
    parentId: null,
    title: "\u5206\u6790\u9875",
    icon: "DashboardOutlined",
    component: "/dashboard/analysis",
    path: "/dashboard/analysis",
    name: "DashboardAnalysis",
    keepAlive: true,
    locale: "menu.dashboard.analysis"
  },
  {
    id: 1,
    parentId: null,
    title: "\u4EEA\u8868\u76D8",
    icon: "DashboardOutlined",
    component: "RouteView",
    redirect: "/dashboard/analysis",
    path: "/dashboard",
    name: "Dashboard",
    locale: "menu.dashboard"
  },
  {
    id: 3,
    parentId: null,
    title: "\u8868\u5355\u9875",
    icon: "FormOutlined",
    component: "RouteView",
    redirect: "/form/basic",
    path: "/form",
    name: "Form",
    locale: "menu.form"
  },
  {
    id: 5,
    parentId: null,
    title: "\u94FE\u63A5",
    icon: "LinkOutlined",
    component: "RouteView",
    redirect: "/link/iframe",
    path: "/link",
    name: "Link",
    locale: "menu.link"
  },
  {
    id: 6,
    parentId: 5,
    title: "AntDesign",
    url: "https://ant.design/",
    component: "Iframe",
    path: "/link/iframe",
    name: "LinkIframe",
    keepAlive: true,
    locale: "menu.link.iframe"
  },
  {
    id: 7,
    parentId: 5,
    title: "AntDesignVue",
    url: "https://antdv.com/",
    component: "Iframe",
    path: "/link/antdv",
    name: "LinkAntdv",
    keepAlive: true,
    locale: "menu.link.antdv"
  },
  {
    id: 8,
    parentId: 5,
    path: "https://www.baidu.com",
    name: "LinkExternal",
    title: "\u8DF3\u8F6C\u767E\u5EA6",
    locale: "menu.link.external"
  },
  {
    id: 9,
    parentId: null,
    title: "\u83DC\u5355",
    icon: "BarsOutlined",
    component: "RouteView",
    path: "/menu",
    redirect: "/menu/menu1",
    name: "Menu",
    locale: "menu.menu"
  },
  {
    id: 10,
    parentId: 9,
    title: "\u83DC\u53551",
    component: "/menu/menu1",
    path: "/menu/menu1",
    name: "MenuMenu11",
    keepAlive: true,
    locale: "menu.menu.menu1"
  },
  {
    id: 11,
    parentId: 9,
    title: "\u83DC\u53552",
    component: "/menu/menu2",
    path: "/menu/menu2",
    keepAlive: true,
    locale: "menu.menu.menu2"
  },
  {
    id: 12,
    parentId: 9,
    path: "/menu/menu3",
    redirect: "/menu/menu3/menu1",
    title: "\u83DC\u53551-1",
    component: "RouteView",
    locale: "menu.menu.menu3"
  },
  {
    id: 13,
    parentId: 12,
    path: "/menu/menu3/menu1",
    component: "/menu/menu-1-1/menu1",
    title: "\u83DC\u53551-1-1",
    keepAlive: true,
    locale: "menu.menu3.menu1"
  },
  {
    id: 14,
    parentId: 12,
    path: "/menu/menu3/menu2",
    component: "/menu/menu-1-1/menu2",
    title: "\u83DC\u53551-1-2",
    keepAlive: true,
    locale: "menu.menu3.menu2"
  },
  {
    id: 15,
    path: "/access",
    component: "RouteView",
    redirect: "/access/common",
    title: "\u6743\u9650\u6A21\u5757",
    name: "Access",
    parentId: null,
    icon: "ClusterOutlined",
    locale: "menu.access"
  },
  {
    id: 16,
    parentId: 15,
    path: "/access/common",
    title: "\u901A\u7528\u6743\u9650",
    name: "AccessCommon",
    component: "/access/common",
    locale: "menu.access.common"
  },
  {
    id: 17,
    parentId: 15,
    path: "/access/user",
    title: "\u666E\u901A\u7528\u6237",
    name: "AccessUser",
    component: "/access/user",
    locale: "menu.access.user"
  },
  {
    id: 19,
    parentId: null,
    title: "\u5F02\u5E38\u9875",
    icon: "WarningOutlined",
    component: "RouteView",
    redirect: "/exception/403",
    path: "/exception",
    name: "Exception",
    locale: "menu.exception"
  },
  {
    id: 20,
    parentId: 19,
    path: "/exception/403",
    title: "403",
    name: "403",
    component: "/exception/403",
    locale: "menu.exception.not-permission"
  },
  {
    id: 21,
    parentId: 19,
    path: "/exception/404",
    title: "404",
    name: "404",
    component: "/exception/404",
    locale: "menu.exception.not-find"
  },
  {
    id: 22,
    parentId: 19,
    path: "/exception/500",
    title: "500",
    name: "500",
    component: "/exception/500",
    locale: "menu.exception.server-error"
  },
  {
    id: 23,
    parentId: null,
    title: "\u7ED3\u679C\u9875",
    icon: "CheckCircleOutlined",
    component: "RouteView",
    redirect: "/result/success",
    path: "/result",
    name: "Result",
    locale: "menu.result"
  },
  {
    id: 24,
    parentId: 23,
    path: "/result/success",
    title: "\u6210\u529F\u9875",
    name: "ResultSuccess",
    component: "/result/success",
    locale: "menu.result.success"
  },
  {
    id: 25,
    parentId: 23,
    path: "/result/fail",
    title: "\u5931\u8D25\u9875",
    name: "ResultFail",
    component: "/result/fail",
    locale: "menu.result.fail"
  },
  {
    id: 26,
    parentId: null,
    title: "\u5217\u8868\u9875",
    icon: "TableOutlined",
    component: "RouteView",
    redirect: "/list/card-list",
    path: "/list",
    name: "List",
    locale: "menu.list"
  },
  {
    id: 27,
    parentId: 26,
    path: "/list/card-list",
    title: "\u5361\u7247\u5217\u8868",
    name: "ListCard",
    component: "/list/card-list",
    locale: "menu.list.card-list"
  },
  {
    id: 28,
    parentId: null,
    title: "\u8BE6\u60C5\u9875",
    icon: "ProfileOutlined",
    component: "RouteView",
    redirect: "/profile/basic",
    path: "/profile",
    name: "Profile",
    locale: "menu.profile"
  },
  {
    id: 29,
    parentId: 28,
    path: "/profile/basic",
    title: "\u57FA\u7840\u8BE6\u60C5\u9875",
    name: "ProfileBasic",
    component: "/profile/basic/index",
    locale: "menu.profile.basic"
  },
  {
    id: 30,
    parentId: 26,
    path: "/list/search-list",
    title: "\u641C\u7D22\u5217\u8868",
    name: "SearchList",
    component: "/list/search-list",
    locale: "menu.list.search-list"
  },
  {
    id: 31,
    parentId: 30,
    path: "/list/search-list/articles",
    title: "\u641C\u7D22\u5217\u8868\uFF08\u6587\u7AE0\uFF09",
    name: "SearchListArticles",
    component: "/list/search-list/articles",
    locale: "menu.list.search-list.articles"
  },
  {
    id: 32,
    parentId: 30,
    path: "/list/search-list/projects",
    title: "\u641C\u7D22\u5217\u8868\uFF08\u9879\u76EE\uFF09",
    name: "SearchListProjects",
    component: "/list/search-list/projects",
    locale: "menu.list.search-list.projects"
  },
  {
    id: 33,
    parentId: 30,
    path: "/list/search-list/applications",
    title: "\u641C\u7D22\u5217\u8868\uFF08\u5E94\u7528\uFF09",
    name: "SearchListApplications",
    component: "/list/search-list/applications",
    locale: "menu.list.search-list.applications"
  },
  {
    id: 34,
    parentId: 26,
    path: "/list/basic-list",
    title: "\u6807\u51C6\u5217\u8868",
    name: "BasicCard",
    component: "/list/basic-list",
    locale: "menu.list.basic-list"
  },
  {
    id: 35,
    parentId: 28,
    path: "/profile/advanced",
    title: "\u9AD8\u7EA7\u8BE6\u7EC6\u9875",
    name: "ProfileAdvanced",
    component: "/profile/advanced/index",
    locale: "menu.profile.advanced"
  },
  {
    id: 4,
    parentId: 3,
    title: "\u57FA\u7840\u8868\u5355",
    component: "/form/basic-form/index",
    path: "/form/basic-form",
    name: "FormBasic",
    keepAlive: false,
    locale: "menu.form.basic-form"
  },
  {
    id: 36,
    parentId: null,
    title: "\u4E2A\u4EBA\u9875",
    icon: "UserOutlined",
    component: "RouteView",
    redirect: "/account/center",
    path: "/account",
    name: "Account",
    locale: "menu.account"
  },
  {
    id: 37,
    parentId: 36,
    path: "/account/center",
    title: "\u4E2A\u4EBA\u4E2D\u5FC3",
    name: "AccountCenter",
    component: "/account/center",
    locale: "menu.account.center"
  },
  {
    id: 38,
    parentId: 36,
    path: "/account/settings",
    title: "\u4E2A\u4EBA\u8BBE\u7F6E",
    name: "AccountSettings",
    component: "/account/settings",
    locale: "menu.account.settings"
  },
  {
    id: 39,
    parentId: 3,
    title: "\u5206\u6B65\u8868\u5355",
    component: "/form/step-form/index",
    path: "/form/step-form",
    name: "FormStep",
    keepAlive: false,
    locale: "menu.form.step-form"
  },
  {
    id: 40,
    parentId: 3,
    title: "\u9AD8\u7EA7\u8868\u5355",
    component: "/form/advanced-form/index",
    path: "/form/advanced-form",
    name: "FormAdvanced",
    keepAlive: false,
    locale: "menu.form.advanced-form"
  },
  {
    id: 41,
    parentId: 26,
    path: "/list/table-list",
    title: "\u67E5\u8BE2\u8868\u683C",
    name: "ConsultTable",
    component: "/list/table-list",
    locale: "menu.list.consult-table"
  },
  {
    id: 42,
    parentId: 1,
    title: "\u76D1\u63A7\u9875",
    component: "/dashboard/monitor",
    path: "/dashboard/monitor",
    name: "DashboardMonitor",
    keepAlive: true,
    locale: "menu.dashboard.monitor"
  },
  {
    id: 43,
    parentId: 1,
    title: "\u5DE5\u4F5C\u53F0",
    component: "/dashboard/workplace",
    path: "/dashboard/workplace",
    name: "DashboardWorkplace",
    keepAlive: true,
    locale: "menu.dashboard.workplace"
  },
  {
    id: 44,
    parentId: 26,
    path: "/list/crud-table",
    title: "\u589E\u5220\u6539\u67E5\u8868\u683C",
    name: "CrudTable",
    component: "/list/crud-table",
    locale: "menu.list.crud-table"
  },
  {
    id: 45,
    parentId: 9,
    path: "/menu/menu4",
    redirect: "/menu/menu4/menu1",
    title: "\u83DC\u53552-1",
    component: "RouteView",
    locale: "menu.menu.menu4"
  },
  {
    id: 46,
    parentId: 45,
    path: "/menu/menu4/menu1",
    component: "/menu/menu-2-1/menu1",
    title: "\u83DC\u53552-1-1",
    keepAlive: true,
    locale: "menu.menu4.menu1"
  },
  {
    id: 47,
    parentId: 45,
    path: "/menu/menu4/menu2",
    component: "/menu/menu-2-1/menu2",
    title: "\u83DC\u53552-1-2",
    keepAlive: true,
    locale: "menu.menu4.menu2"
  }
];
const accessMenuData = [
  {
    id: 18,
    parentId: 15,
    path: "/access/admin",
    title: "\u7BA1\u7406\u5458",
    name: "AccessAdmin",
    component: "/access/admin",
    locale: "menu.access.admin"
  }
];
const index = eventHandler((event) => {
  const token = getHeader(event, "Authorization");
  const username = Buffer.from(token, "base64").toString("utf-8");
  return {
    code: 200,
    msg: "\u83B7\u53D6\u6210\u529F",
    data: [...menuData, ...username === "admin" ? accessMenuData : []]
  };
});

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  accessMenuData: accessMenuData,
  default: index
});

const test_delete = eventHandler(() => {
  return {
    code: 200,
    msg: "delete"
  };
});

const test_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: test_delete
});

const test_post = eventHandler(() => {
  return {
    code: 200,
    msg: "post"
  };
});

const test_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: test_post
});

const test_put = eventHandler(() => {
  return {
    code: 200,
    msg: "put"
  };
});

const test_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: test_put
});

const info = eventHandler((event) => {
  const token = getHeader(event, "Authorization");
  const username = Buffer.from(token, "base64").toString("utf-8");
  if (!token) {
    return {
      code: 401,
      msg: "\u767B\u5F55\u5931\u6548"
    };
  }
  return {
    code: 200,
    msg: "\u83B7\u53D6\u6210\u529F",
    data: {
      id: 1,
      username,
      nickname: username === "admin" ? "\u8D85\u7EA7\u7BA1\u7406\u5458" : "\u666E\u901A\u7528\u6237",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
      roles: username === "admin" ? ["ADMIN"] : ["USER"]
    }
  };
});

const info$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: info
});
//# sourceMappingURL=index.mjs.map
