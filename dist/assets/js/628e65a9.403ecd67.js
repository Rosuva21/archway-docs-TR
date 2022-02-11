"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Configuration",p={unversionedId:"node/configure",id:"node/configure",isDocsHomePage:!1,title:"Configuration",description:"By default, the init command creates your ~/.archway directory with subfolders config and data. In the config directory, the most important files for configuration are app.toml and config.toml. You can configure your node via editing these files.",source:"@site/docs/node/configure.md",sourceDirName:"node",slug:"/node/configure",permalink:"/docs/node/configure",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/node/configure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/node/install"},next:{title:"Running a Local Testnet",permalink:"/docs/node/running-a-local-testnet"}},s=[{value:"<code>config.toml</code>",id:"configtoml",children:[]},{value:"<code>app.toml</code>",id:"apptoml",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command creates your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.archway")," directory with subfolders ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),". In the config directory, the most important files for configuration are ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),". You can configure your node via editing these files. "),(0,a.kt)("p",null,"The basic configurations are included in this document. For more details about configs, review the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," files."),(0,a.kt)("h2",{id:"configtoml"},(0,a.kt)("inlineCode",{parentName:"h2"},"config.toml")),(0,a.kt)("p",null,"The various parts of the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'proxy_app = "<PROTOCOL>://<HOST_ADDRESS>:<PORT>"\n')),(0,a.kt)("p",null,"ProxyApp is the TCP or UNIX socket address of the ABCI application, or the name of an ABCI application compiled in with the binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'moniker = "<A_CUSTOM_NAME>"\n')),(0,a.kt)("p",null,"Moniker is a custom human-readable name for this node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'genesis_file = "<PATH_TO_GENESIS_FILE>"\n')),(0,a.kt)("p",null,"Path to the JSON file that contains the initial validator set and other metadata."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'priv_validator_key_file = "<PATH_TO_VALIDATOR_PRIVATE_KEY>"\n')),(0,a.kt)("p",null,"Path to the JSON file that contains the private key to use as a validator in the consensus protocol."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[p2p]\nladdr = "tcp://<IP_ADDRESS>:<PORT>"\n')),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"laddr")," is the address to listen for incoming connections in the peer-to-peer network."),(0,a.kt)("h2",{id:"apptoml"},(0,a.kt)("inlineCode",{parentName:"h2"},"app.toml")),(0,a.kt)("p",null,"The various parts of the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[api]\naddress = "tcp://<HOST_NAME>:<PORT>"\n')),(0,a.kt)("p",null,"where address defines the API server to listen on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\naddress = "tcp://<HOST_NAME>:<PORT>"\n')),(0,a.kt)("p",null,"where address defines the gRPC server address to bind to."))}d.isMDXComponent=!0}}]);