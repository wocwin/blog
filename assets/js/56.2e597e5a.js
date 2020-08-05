(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{921:function(t,e,n){"use strict";n.r(e);var r=n(114),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"treetable组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#treetable组件"}},[t._v("#")]),t._v(" TreeTable组件")]),t._v(" "),n("hr"),t._v(" "),n("common-code-format",[n("docsComponents-TTable-tree"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<template>\n    <div class=\"tree-table\" style=\"width:100%;\">\n      <tree-table\n        :columns=\"columns\"\n        :data-source=\"roleResList\"\n        :operator=\"operator\"\n        treeStructure\n        ref=\"tree\"\n      />\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n          return {\n            columns: [\n              {\n                text: '资源名称',\n                dataIndex: 'resName'\n              },\n              {\n                text: '资源代码',\n                dataIndex: 'resCode'\n              },\n              {\n                text: '资源类型',\n                dataIndex: 'type',\n                filters: { param: 'MENU_TYPE' }\n              },\n              {\n                text: '所属角色',\n                dataIndex: 'roleNames'\n              }\n            ],\n            operator: [\n              {\n                text: '编辑',\n                resCode: 'resource-edit',\n                fun: this.goEdit\n              }\n            ],\n            roleResList: []\n          }\n        },\n        mounted () {\n          const tree = ['后台返回的数据结构']\n          this.roleResList = this.formatTreeData(tree)\n        },\n        methods: {\n          // 获取想要的数据结构\n          formatTreeData (data) {\n            data.forEach(item => {\n              if (item.children && item.children.length > 0) {\n                this.formatTreeData(item.children)\n                item.children.forEach(e => {\n                  if (e.belong) {\n                    item.children.map(i => {\n                      if (i.resCode === e.belong) {\n                        i.children.push(e)\n                      }\n                    })\n                  }\n                })\n                item.children = item.children.filter(n => {\n                  return !n.belong\n                })\n              }\n            })\n            return data\n          },\n          goEdit (val) {\n            console.log('点击了按钮', val)\n          }\n        }\n    }\n<\/script>\n")])])])])],1),t._v(" "),n("h2",{attrs:{id:"配置参数（treetable-attributes）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置参数（treetable-attributes）"}},[t._v("#")]),t._v(" 配置参数（TreeTable Attributes）")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("是否必须")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("dataSource")]),t._v(" "),n("td",[t._v("数据源")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("是")])]),t._v(" "),n("tr",[n("td",[t._v("columns")]),t._v(" "),n("td",[t._v("表头信息")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("是")])]),t._v(" "),n("tr",[n("td",[t._v("-------filters")]),t._v(" "),n("td",[t._v("filters转义（后台返回数字转中文，时间戳转时间）")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("operator")]),t._v(" "),n("td",[t._v("表格内操作栏数据")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("-------show")]),t._v(" "),n("td",[t._v("表格内操作栏根据状态显示")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("showCheckBox")]),t._v(" "),n("td",[t._v("是否显示复选框")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("defaultExpandAll")]),t._v(" "),n("td",[t._v("是否默认展开所有树")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("treeStructure")]),t._v(" "),n("td",[t._v("父组件传过来的数据是否标准格式；默认否，对其进行树形格式化,并添加标识类的属性")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("否")])])])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);