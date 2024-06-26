import { e as eventHandler } from '../../runtime.mjs';
import dayjs from 'dayjs';
import { cloneDeep } from 'lodash-es';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

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

export { basicList_post as default };
//# sourceMappingURL=basic-list.post.mjs.map
