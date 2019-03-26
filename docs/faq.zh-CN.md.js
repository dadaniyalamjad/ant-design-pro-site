webpackJsonp([80],{843:function(n,s){n.exports={content:["article",{},["h3","Ant Design React \u548c Ant Design Pro \u6709\u4ec0\u4e48\u533a\u522b\uff1f"],["p","\u53ef\u4ee5\u7406\u89e3\u4e3a Ant Design React \u662f\u4e00\u5957 React \u7ec4\u4ef6\u5e93\uff0c\u800c Pro \u662f\u4f7f\u7528\u4e86\u8fd9\u5957\u7ec4\u4ef6\u5e93\u7684\u5b8c\u6574\u524d\u7aef\u811a\u624b\u67b6\u3002"],["h3","\u5982\u4f55\u4f7f\u7528 Ant Design Pro\uff1f"],["p","\u8bf7\u9605\u8bfb\u6587\u6863 ",["a",{title:null,href:"/docs/getting-started"},"\u5f00\u59cb\u4f7f\u7528"],"\uff0c\u8682\u8681\u91d1\u670d\u5185\u7f51\u7528\u6237\u8bf7\u9605\u8bfb ",["a",{title:null,href:"/docs/getting-start-inner"},"\u5f00\u59cb\u4f7f\u7528\uff08\u8682\u8681\u91d1\u670d\u7528\u6237\uff09"],"\u3002"],["h3","\u662f\u5426\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Ant Design Pro\uff1f"],["p","\u5f53\u7136\u53ef\u4ee5\uff01Ant Design Pro \u57fa\u4e8e\u6700\u65b0\u7684 antd \u7248\u672c\u5f00\u53d1\uff0c\u76ee\u524d\u5df2\u6709\u591a\u4e2a\u4e2d\u540e\u53f0\u9879\u76ee\u6b63\u5728\u4f7f\u7528\u3002"],["h3","\u5982\u4f55\u66f4\u65b0 Ant Design Pro\uff1f"],["ul",["li",["p","\u5355\u72ec\u5347\u7ea7 ",["code","antd"]," \u7248\u672c\uff0c\u7528\u4e8e\u66f4\u65b0\u57fa\u7840\u7ec4\u4ef6\u3002"]],["li",["p","\u6bd4\u8f83\u4e0d\u540c\u7684 Ant Design Pro \u7248\u672c\u95f4\u7684\u5dee\u5f02\uff0c\u624b\u52a8\u4fee\u6539\u672c\u5730\u914d\u7f6e\u3002"]],["li",["p","\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u5408\u5e76\u8fdc\u7a0b\u5206\u652f\uff1a",["code","git pull https://github.com/ant-design/ant-design-pro"],"\uff08\u6ce8\u610f\uff0c\u9700\u8981\u81ea\u884c\u89e3\u51b3\u51b2\u7a81\uff09\u3002"]],["li",["p","\u76f4\u63a5\u5728 GitHub \u4e0a\u62f7\u8d1d\u6700\u65b0\u7684\u5178\u578b\u6a21\u677f\u3002"]]],["h3","\u5982\u4f55\u4ece\u670d\u52a1\u5668\u8bf7\u6c42\u83dc\u5355\uff1f"],["p","\u53ea\u9700\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/models/menu.js#L111"},"models/menu"]," \u4e2d\u53d1\u8d77 http \u8bf7\u6c42\uff0c menuData \u662f\u4e00\u4e2a json \u6570\u7ec4\u3002\u53ea\u9700\u670d\u52a1\u5668\u8fd4\u56de\u7c7b\u4f3c\u683c\u5f0f\u7684 json \u5373\u53ef\u3002"],["pre",{lang:"json",highlighted:'<span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> \'/dashboard\'<span class="token punctuation">,</span>\n    name<span class="token operator">:</span> \'dashboard\'<span class="token punctuation">,</span>\n    icon<span class="token operator">:</span> \'dashboard\'<span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> \'/dashboard/analysis\'<span class="token punctuation">,</span>\n        name<span class="token operator">:</span> \'analysis\'<span class="token punctuation">,</span>\n        exact<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> \'/dashboard/monitor\'<span class="token punctuation">,</span>\n        name<span class="token operator">:</span> \'monitor\'<span class="token punctuation">,</span>\n        exact<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> \'/dashboard/workplace\'<span class="token punctuation">,</span>\n        name<span class="token operator">:</span> \'workplace\'<span class="token punctuation">,</span>\n        exact<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  ....\n<span class="token punctuation">]</span>'},["code","[\n  {\n    path: '/dashboard',\n    name: 'dashboard',\n    icon: 'dashboard',\n    children: [\n      {\n        path: '/dashboard/analysis',\n        name: 'analysis',\n        exact: true,\n      },\n      {\n        path: '/dashboard/monitor',\n        name: 'monitor',\n        exact: true,\n      },\n      {\n        path: '/dashboard/workplace',\n        name: 'workplace',\n        exact: true,\n      },\n    ],\n  }\n  ....\n]"]],["blockquote",["p","\u6ce8\u610f path \u5fc5\u987b\u8981\u5728 routre.config.js \u4e2d\u5b9a\u4e49\u3002\uff08\u7ea6\u5b9a\u5f0f\u8def\u7531\u4e0d\u9700\u8981\uff0c\u53ea\u9700\u9875\u9762\u771f\u5b9e\u6709\u6548\u5373\u53ef\uff09\u3002"]],["h3","\u5982\u4f55\u4f7f\u7528 Umi \u7ea6\u5b9a\u5f0f\u8def\u7531"],["p","\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u4e0d\u60f3\u8981\u4f7f\u7528 config/router.config.js \u7684\u914d\u7f6e\u3002\n\u90a3\u4f60\u53ef\u4ee5\u8003\u8651 umi \u7684",["a",{title:null,href:"https://umijs.org/zh/guide/router.html#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"],"\u3002"],["p","\u5177\u4f53\u7684\u5982\u4f55\u5728 pro \u4e2d\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u53ef\u4ee5\u67e5\u770b\u8fd9\u6b21",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/commit/a22d400328a7a391ed5e5a5f2bba1a5fecf9fad7"},"\u63d0\u4ea4"],"\u3002"],["blockquote",["p","\u6ce8\u610f\uff1a\u7ea6\u5b9a\u5f0f\u8def\u7531\u6bd4\u8f83\u5bb9\u6613\u5b9e\u73b0\u83dc\u5355\u548c\u6743\u9650\u7684\u63a7\u5236\uff0c\u4f46\u662f\u8981\u6c42\u6240\u6709\u7684\u83dc\u5355\u90fd\u5fc5\u987b\u58f0\u660e\u6743\u9650\uff0c\u4e0d\u7136\u5747\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u8bbf\u95eeurl\u7684\u65b9\u5f0f\u8bbf\u95ee\u3002"],["p","\u7ea6\u5b9a\u5f0f\u6743\u9650\u7684\u58f0\u660e\u5f88\u6709\u8da3\uff0c\u4f60\u53ef\u4ee5\u58f0\u660e\u5982\uff1a\u9664\u67d0\u67d0\u9875\u9762\u4e4b\u5916\u7684\u5176\u4ed6\u9875\u9762\u5747\u9700\u8981admin\u8bbf\u95ee\u6743\u9650\uff0c\u5373\u53ef\u8fc7\u6ee4\u6240\u6709\u7684url\u3002"]],["h3","build \u4e4b\u540e\u5982\u4f55\u4f7f\u7528 mock \u6570\u636e\uff1f"],["p","\u53ef\u4ee5\u4f7f\u7528 ",["a",{title:null,href:"https://www.npmjs.com/package/umi-serve"},"umi-serve"]," \uff0c\u5728\u9879\u76ee\u4e2d\u6216\u8005\u5168\u5c40\u5b89\u88c5 umi-serve\u3002"],["pre",{lang:"sh",highlighted:'$ yarn <span class="token keyword">global</span> add umi<span class="token operator">-</span>serve'},["code","$ yarn global add umi-serve"]],["p","\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e2d\u8fd0\u884c umi-serve"],["pre",{lang:"sh",highlighted:'mac001<span class="token punctuation">:</span>ant<span class="token operator">-</span>design<span class="token operator">-</span>pro xiaohuoni$ umi<span class="token operator">-</span>serve\n\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502                                                    \u2502\n   \u2502   Serving your umi project!                        \u2502\n   \u2502                                                    \u2502\n   \u2502   <span class="token operator">-</span> <span class="token keyword">Local</span><span class="token punctuation">:</span>            http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">8001</span>        \u2502\n   \u2502   <span class="token operator">-</span> On Your Network<span class="token punctuation">:</span>  http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">134.160</span><span class="token punctuation">.</span><span class="token number">170.40</span><span class="token punctuation">:</span><span class="token number">8001</span>   \u2502\n   \u2502                                                    \u2502\n   \u2502   Copied <span class="token keyword">local</span> address <span class="token keyword">to</span> clipboard!               \u2502\n   \u2502                                                    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518'},["code","mac001:ant-design-pro xiaohuoni$ umi-serve\n\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502                                                    \u2502\n   \u2502   Serving your umi project!                        \u2502\n   \u2502                                                    \u2502\n   \u2502   - Local:            http://localhost:8001        \u2502\n   \u2502   - On Your Network:  http://134.160.170.40:8001   \u2502\n   \u2502                                                    \u2502\n   \u2502   Copied local address to clipboard!               \u2502\n   \u2502                                                    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"]],["p","\u4fee\u6539\u9879\u76ee\u4e2d\u7684\u8bf7\u6c42\u5730\u5740\uff0c\u5982 ",["code","http://localhost:8001/api/users"],"\u3002"],["pre",{lang:"json",highlighted:'<span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    key<span class="token operator">:</span> \'<span class="token number">1</span>\'<span class="token punctuation">,</span>\n    name<span class="token operator">:</span> \'John Brown\'<span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    address<span class="token operator">:</span> \'New York No. <span class="token number">1</span> Lake Park\'<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    key<span class="token operator">:</span> \'<span class="token number">2</span>\'<span class="token punctuation">,</span>\n    name<span class="token operator">:</span> \'Jim Green\'<span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n    address<span class="token operator">:</span> \'London No. <span class="token number">1</span> Lake Park\'<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    key<span class="token operator">:</span> \'<span class="token number">3</span>\'<span class="token punctuation">,</span>\n    name<span class="token operator">:</span> \'Joe Black\'<span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    address<span class="token operator">:</span> \'Sidney No. <span class="token number">1</span> Lake Park\'<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>'},["code","[\n  {\n    key: '1',\n    name: 'John Brown',\n    age: 32,\n    address: 'New York No. 1 Lake Park',\n  },\n  {\n    key: '2',\n    name: 'Jim Green',\n    age: 42,\n    address: 'London No. 1 Lake Park',\n  },\n  {\n    key: '3',\n    name: 'Joe Black',\n    age: 32,\n    address: 'Sidney No. 1 Lake Park',\n  },\n]"]],["blockquote",["p","\u6ce8\u610f\uff1a\u5982\u679c\u6ca1\u6709\u5168\u5c40\u5b89\u88c5\uff0c\u800c\u53ea\u662f\u5728\u9879\u76ee\u4e2d\u5b89\u88c5\uff0c\u8981\u628a umi-serve \u547d\u4ee4\u6dfb\u52a0\u5230 package.json \u7684 script \u91cc\u9762\u3002\n\u6ce8\u610f\uff1abuild \u4e4b\u540e proxy \u65e0\u6548\uff0c\u4e0d\u8981\u5728 proxy \u4e2d\u914d\u7f6e\u8bf7\u6c42",["code","http://localhost:8001/api/users"]," \uff0c\u800c\u662f\u8981\u5728 http \u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u8bbf\u95ee\u8be5\u5730\u5740\u3002\u5982\u5728 ",["code","src/utils/request.js"]," \u4e2d\u7edf\u4e00\u6dfb\u52a0\u8bf7\u6c42\u524d\u7f00\u3002"]],["h3","\u5982\u4f55\u5173\u95ed\u9875\u9762\u6743\u9650\u63a7\u5236"],["p","\u914d\u7f6e\u5f0f\u8def\u7531\uff0c\u5220\u9664 ",["code","config/router.config.js"]," \u4e2d\u7684 ",["code","Routes: ['src/pages/Authorized']"]," \u914d\u7f6e\u3002"],["pre",{lang:"diff",highlighted:"{\n    path: '/',\n    component: '../layouts/BasicLayout',\n<span class=\"token deleted\">-   Routes: ['src/pages/Authorized'],</span>\n    routes: []\n    ...\n}"},["code","{\n    path: '/',\n    component: '../layouts/BasicLayout',\n-   Routes: ['src/pages/Authorized'],\n    routes: []\n    ...\n}"]],["p","\u8be6\u60c5\u53ef\u89c1",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/pull/3842"},"PR3842"],"\u3002"],["p","\u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u5173\u6389\u8def\u7531\u6743\u9650\u63d2\u4ef6\u3002"],["h3","\u5982\u4f55\u4fee\u6539\u9ed8\u8ba4 webpack \u914d\u7f6e\uff1f"],["p","\u8be6\u89c1 ",["a",{title:null,href:"https://umijs.org/zh/config/"},"umi\u914d\u7f6e"],"\u3002"],["h3","\u5982\u4f55\u6dfb\u52a0 babel \u63d2\u4ef6\uff1f"],["p","\u8be6\u89c1 ",["a",{title:null,href:"https://umijs.org/zh/api/#umi-babel"},"umi-babel"],"\u3002"],["h3","\u5982\u4f55\u4f7f\u7528\u56fe\u7247\u7b49\u9759\u6001\u8d44\u6e90\uff1f"],["p","\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\uff08\u9700\u8981\u56fe\u5e8a\u652f\u6301\uff09\uff0c\u82e5\u9700\u76f4\u63a5\u4f7f\u7528\u672c\u5730\u6587\u4ef6\uff0c\u53ef\u6309\u4ee5\u4e0b\u65b9\u5f0f\u5f15\u5165\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../assets/picture.png\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<img src={require('../assets/picture.png')} />"]],["h3","\u6211\u7684 url \u91cc\u600e\u4e48\u6709 ",["code","#"]," \u53f7\uff1f\u8981\u5982\u4f55\u53bb\u6389\uff1f"],["p","\u8bf7\u53c2\u8003\u6587\u6863 ",["a",{title:null,href:"/docs/deploy#\u524d\u7aef\u8def\u7531\u4e0e\u670d\u52a1\u7aef\u7684\u7ed3\u5408"},"\u524d\u7aef\u8def\u7531\u4e0e\u670d\u52a1\u7aef\u7684\u7ed3\u5408"],"\u3002"],["h3","\u5982\u4f55\u4ee3\u7406\u5230\u540e\u7aef\u670d\u52a1\u5668\uff1f"],["p","Ant Design Pro \u5185\u7f6e\u4e86 umi\uff0cumi \u4f7f\u7528\u4e86 webpack ",["a",{title:null,href:"https://webpack.docschina.org/configuration/dev-server/"},"devServer"],"\u6765\u652f\u6301\u4ee3\u7406\u3002\n\u4f60\u53ea\u9700\u8981\u5728 config.js \u4e2d\u914d\u7f6e proxy \u5c5e\u6027\u3002\u53ea\u8981 proxy \u548c mock  url \u4e0d\u540c\uff0c\u662f\u53ef\u4ee5\u5171\u5b58\u7684\u3002"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  proxy<span class="token punctuation">:</span><span class="token punctuation">{</span>\n    <span class="token string">\'/server/api/\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      target<span class="token punctuation">:</span> <span class="token string">\'https://preview.pro.ant.design/\'</span><span class="token punctuation">,</span>\n      changeOrigin<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      pathRewrite<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">\'^/server\'</span><span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// /server/api/currentUser -> /api/currentUser</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code","{\n  ...\n  proxy:{\n    '/server/api/': {\n      target: 'https://preview.pro.ant.design/',\n      changeOrigin: true,\n      pathRewrite: { '^/server': '' }, // /server/api/currentUser -> /api/currentUser\n    },\n  },\n  ...\n}"]],["p","\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",["a",{title:null,href:"http://localhost:8000/server/api/currentUser"},"http://localhost:8000/server/api/currentUser"]," \u9884\u89c8\u3002"],["h3","\u5982\u4f55\u6dfb\u52a0 scss \u652f\u6301\uff1f"],["p","\u5148\u5b89\u88c5\u989d\u5916\u7684\u4f9d\u8d56\uff0c"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> i node-sass sass-loader --save'},["code","$ npm i node-sass sass-loader --save"]],["p","\u7136\u540e\u4fee\u6539 ",["code",".umirc.js"],"\u6216\u8005",["code","config/config.js"],":"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n <span class="token property">"sass"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n "sass": {}\n}']],["p","\u8be6\u89c1 ",["a",{title:null,href:"https://umijs.org/zh/guide/faq.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-sass-%EF%BC%9F"},"sass"],"\u3002"],["h3","Git commit \u65f6\u62a5\u9519\uff1f"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png",width:"600"}]],["p","\u811a\u624b\u67b6\u9ed8\u8ba4\u5f00\u542f\u4e86 ",["a",{title:null,href:"http://eslint.org/"},"eslint"]," \u4ee3\u7801\u98ce\u683c\u68c0\u67e5\uff0c\u8bf7\u6309\u7167\u63d0\u793a\u5185\u5bb9\u8fdb\u884c\u4fee\u6539\u540e\u91cd\u65b0\u63d0\u4ea4\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8 ",["code","npm run lint"]," \u8fdb\u884c\u68c0\u67e5\u3002"],["h3","\u7ad9\u70b9\u662f\u5426\u652f\u6301\u56fd\u9645\u5316\uff1f"],["p","pro \u901a\u8fc7 umi \u63d2\u4ef6 ",["a",{title:null,href:"https://github.com/umijs/umi-plugin-locale"},"umi-plugin-locale"]," \u6765\u5b9e\u73b0\u5168\u7403\u5316\u7684\u529f\u80fd\uff0c\u8be6\u60c5\u8bf7\u89c1 ",["a",{title:null,href:"/docs/i18n"},"\u56fd\u9645\u5316"],"\u3002"],["h3","npm \u5b89\u88c5 puppeteer \u5931\u8d25"],["p","\u5c1d\u8bd5\u4f7f\u7528 cnpm \u6216\u8005\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u67e5\u770b\u8fd9\u4e2a ",["a",{title:null,href:"https://github.com/cnpm/cnpmjs.org/issues/1246"},"issue"],"\u3002"],["h3","English Documentation\uff1f"],["p","English Documentation will be translated in next couple of monthes\uff0c trace ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479"},"ant-design/ant-design-pro#54"]," \n\u548c ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues/120"},"ant-design-pro/issues/120"]," \u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"],["hr"],["p","\u66f4\u591a\u5e38\u89c1\u95ee\u9898\u53ef\u4ee5\u67e5\u770b ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting"},"Trouble Shooting"]," \u548c ",["a",{title:null,href:"https://github.com/umijs/umi"},"umi"],"\u3002\u5982\u679c\u8fd9\u91cc\u672a\u80fd\u89e3\u51b3\u4f60\u7684\u95ee\u9898\uff0c\u6b22\u8fce ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/issues"},"\u62a5\u544a\u7ed9\u6211\u4eec"],"\u3002"]],meta:{order:22,title:"\u5e38\u89c1\u95ee\u9898",type:"\u5176\u4ed6",filename:"docs/faq.zh-CN.md"},description:["section",["p","\u63d0\u95ee\u4e4b\u524d\uff0c\u8bf7\u5148\u67e5\u9605\u4e0b\u9762\u7684\u5e38\u89c1\u95ee\u9898\u3002"]],toc:["ul"]}}});