import { e as eventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

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

export { crudTable_post as default };
//# sourceMappingURL=crud-table.post.mjs.map
