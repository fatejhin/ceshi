import { e as eventHandler, g as getHeader } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

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

export { accessMenuData, index as default };
//# sourceMappingURL=index2.mjs.map
