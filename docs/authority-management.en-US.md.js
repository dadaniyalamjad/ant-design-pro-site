webpackJsonp([91],{832:function(n,s){n.exports={content:["article",{},["h2","Authorization component Authorized"],["p","This is the basis for scaffolding rights management. The basic idea is to determine whether to display normal rendering content or abnormal content by comparing the current permissions and access permissions. For details, see ",["a",{title:null,href:"/components/Authorized"},"Authorized Documentation"],"."],["h2","Applications"],["p","Through the application of data organization and permission components, the scaffold implements basic rights management. The following briefly introduces the application of several common scenarios."],["blockquote",["p","The basic encapsulation of the RenderAuthorized function of component export in the scaffold (",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js"},"https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js"],") The permissions (mock data), so when using in the scaffold, do not need to pay attention to the current permissions."]],["h3","Menu and router permission"],["p","For permission control of certain menus, just go to the router configuration file ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/config/router.config.js"},"router.config.js"],". The menu item sets the authority attribute, which represents the access permission of the route. In the route generation file, page components will be wrapped by ",["code","Authorized"]," by default for judgment processing."],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  path<span class="token punctuation">:</span> <span class="token string">\'/form\'</span><span class="token punctuation">,</span>\n  icon<span class="token punctuation">:</span> <span class="token string">\'form\'</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'form\'</span><span class="token punctuation">,</span>\n  routes<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/form/basic-form\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'basicform\'</span><span class="token punctuation">,</span>\n    component<span class="token punctuation">:</span> <span class="token string">\'./Forms/BasicForm\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/form/step-form\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'stepform\'</span><span class="token punctuation">,</span>\n    component<span class="token punctuation">:</span> <span class="token string">\'./Forms/StepForm\'</span><span class="token punctuation">,</span>\n    authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'guest\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// only guest can access</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/form/advanced-form\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'advancedform\'</span><span class="token punctuation">,</span>\n    component<span class="token punctuation">:</span> <span class="token string">\'./Forms/AdvancedForm\'</span><span class="token punctuation">,</span>\n    authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// only admin can access</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  path: '/form',\n  icon: 'form',\n  name: 'form',\n  routes:[{\n    path: '/form/basic-form',\n    name: 'basicform',\n    component: './Forms/BasicForm',\n  }, {\n    path: '/form/step-form',\n    name: 'stepform',\n    component: './Forms/StepForm',\n    authority: ['guest'], // only guest can access\n  }, {\n    path: '/form/advanced-form',\n    name: 'advancedform',\n    component: './Forms/AdvancedForm',\n    authority: ['admin'], // only admin can access\n  }],\n}"]],["h3","Control page element display"],["p","Using ",["a",{title:null,href:"http://pro.ant.design/components/Authorized#Authorized"},"Authorized"]," or ",["a",{title:null,href:"http://pro.ant.design/components/Authorized#Authorized.Secured"},"Authorized.Secured"]," can be easily Control element/component rendering. For details, see the component documentation."],["h3","Modify current permissions"],["p","Scaffolding uses localstorage to simulate the role of permissions, which may need to be read from the background in real projects."],["p","A simple method of refreshing permissions was implemented in the scaffold, and the current permissions were updated at the key nodes such as login/logout."],["p","You can check the call to ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/c93b0169a500427ee5fdd3c2977886c86aa3d59a/src/pages/User/models/login.js#L24"},"reloadAuthorized"]," in login.js."],["h3","How do I control the access authority(User roles)\uff1f"],["p","Just gain routerData in ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/models/menu.js#L111"},"models/menu"],",There are several ways to get it here,Reference from config like pro,request from the server,or import local file. routerData is a json array. Just returns a json of similar format."],["pre",{lang:"json",highlighted:'routerData<span class="token operator">:</span> <span class="token punctuation">{</span>\n    routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n      // dashboard\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> \'/dashboard\'<span class="token punctuation">,</span>\n        authority<span class="token operator">:</span> <span class="token punctuation">[</span>\'admin\'<span class="token punctuation">]</span><span class="token punctuation">,</span>\n        routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> \'/dashboard/analysis\'<span class="token punctuation">,</span>\n            authority<span class="token operator">:</span> <span class="token punctuation">[</span>\'admin\'<span class="token punctuation">,</span>\'user\'<span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n   <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code","routerData: {\n    routes: [\n      // dashboard\n      {\n        path: '/dashboard',\n        authority: ['admin'],\n        routes: [\n          {\n            path: '/dashboard/analysis',\n            authority: ['admin','user'],\n          },\n        ],\n      },\n   ]\n}"]],["blockquote",["p","Note that routerData and menuData can use the same data or different data, just pay attention to their necessary attributes."]],["h3","How do I control the access authority from the server \uff1f"],["p","Runtime configuration files,",["a",{title:null,href:"https://umijs.org/zh/guide/app-structure.html#src-app-js"},"src/app"],", where runtime capabilities can be extended, such as modifying routing, modifying render methods, and so on."],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span>oldRender<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>runtimeMenu<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'/api/auth_routes\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>ret <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        authRoutes <span class="token operator">=</span> ret<span class="token punctuation">;</span>\n        <span class="token function">oldRender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">oldRender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","export function render(oldRender) {\n  if (defaultSettings.runtimeMenu) {\n    fetch('/api/auth_routes')\n      .then(res => res.json())\n      .then(ret => {\n        authRoutes = ret;\n        oldRender();\n      });\n  } else {\n    oldRender();\n  }\n}"]],["p","Then in the ",["code","patchRoutes"]," method, the routing configuration can be added according to ",["code","authRoutes"],"."],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">patchRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>defaultSettings<span class="token punctuation">.</span>runtimeMenu<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> routesRender <span class="token operator">=</span> <span class="token function">renderRoutes</span><span class="token punctuation">(</span>authRoutes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// renderRoutes -- add route authority</span>\n    routes<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// eslint-disable-line</span>\n    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>routes<span class="token punctuation">,</span> routesRender<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","export function patchRoutes(routes) {\n  if (defaultSettings.runtimeMenu) {\n    const routesRender = renderRoutes(authRoutes); // renderRoutes -- add route authority\n    routes.length = 0; // eslint-disable-line\n    Object.assign(routes, routesRender);\n  }\n}"]],["blockquote",["p","Note: Page files cannot be dynamically loaded here. paths must be defined in routre. config. js. (Conventional routing is not required, just the page is real and effective)."]]],meta:{order:24,title:"Authority Management",type:"Advanced",filename:"docs/authority-management.en-US.md"},description:["section",["p","Authority Management control is one of the common requirements in the background system. You can use the permission control components provided by us to implement some basic permission control functions. The scaffold also contains several simple examples to provide reference."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Authorization-component-Authorized",title:"Authorization component Authorized"},"Authorization component Authorized"]],["li",["a",{className:"bisheng-toc-h2",href:"#Applications",title:"Applications"},"Applications"]]]}}});