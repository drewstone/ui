(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{282:function(t,e,a){"use strict";a.r(e);var n=a(38),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("h1",{attrs:{id:"external-module-identicon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-module-identicon","aria-hidden":"true"}},[t._v("#")]),t._v(' External module: "Identicon"')])]),t._v(" "),a("h2",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[t._v("#")]),t._v(" Index")]),t._v(" "),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/vue-identicon/modules/_identicon_.html#const-identicon"}},[t._v("Identicon")])],1)]),t._v(" "),a("h2",{attrs:{id:"variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("h3",{attrs:{id:"const-identicon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-identicon","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("Const")]),t._v(" Identicon")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("Identicon")]),t._v(": "),a("em",[a("code",[t._v("VueConstructor<Data & object & object & Vue>")])]),t._v(" =  Vue.extend({\n// FIXME These nested divs are not correct, would like a different way\n// here so we don't create a div wrapped for the div wrapper of the icon\ntemplate: "),a("code",[t._v('<div v-if="type === \'empty\' || address === \'\'"> <Empty :size="iconSize" /> </div> <div v-else-if="type === \'beachball\'"> <Beachball :address="address" :size="iconSize" /> </div> <div v-else-if="type === \'polkadot\'"> <Polkadot :address="address" :size="iconSize" /> </div> <div v-else> <Jdenticon :publicKey="publicKey" :size="iconSize" /> </div>')]),t._v(",\nprops: ['prefix', 'size', 'theme', 'value'],\ncomponents: {\nBeachball,\nEmpty,\nJdenticon,\nPolkadot\n},\ndata: function (): Data {\nreturn {\naddress: '',\niconSize: DEFAULT_SIZE,\npublicKey: '0x',\ntype: 'empty'\n};\n},\ncreated: function (): void {\nthis.createData();\n},\nmethods: {\ncreateData: function (): void {\nthis.iconSize = this.size || DEFAULT_SIZE;")]),t._v(" "),a("pre",[a("code",[t._v("  try {\n    this.address = isU8a(this.value) || isHex(this.value)\n      ? encodeAddress(this.value as string, this.prefix)\n      : this.value;\n    this.publicKey = u8aToHex(decodeAddress(this.address, false, this.prefix));\n    this.type = this.theme;\n  } catch (error) {\n    this.address = '';\n  }\n}\n")])]),t._v(" "),a("p",[t._v("}\n})")]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/ui/blob/7f68029/packages/vue-identicon/src/Identicon.ts#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("Identicon.ts:28"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("name")])]),t._v(" Identicon")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("description")])]),t._v(" The main Identicon component, taking a number of properties")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Identicon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":size")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("128"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":theme")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("polkadot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])},[],!1,null,null,null);e.default=s.exports}}]);