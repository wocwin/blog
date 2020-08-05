(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{938:function(n,t,e){"use strict";e.r(t);var a=e(114),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"复选框功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复选框功能"}},[n._v("#")]),n._v(" 复选框功能")]),n._v(" "),e("hr"),n._v(" "),e("common-code-format",{attrs:{description:"在JS中需配置：firstColumn: { type: 'selection' }"}},[e("docsComponents-TTable-checkbox"),n._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("<template>\n    <div class=\"t-table\" style=\"width:100%;\">\n        <t-table :table=\"table\" @selection-change=\"selectionChange\" isShowPagination/>\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                table: {\n                    total: 0,\n                    currentPage: 1,\n                    pageSize: 10,\n                    firstColumn: { type: 'selection' },\n                    data: [\n                        {\n                            id: '1',\n                            date: '2019-09-25',\n                            name: '张三',\n                            status: '2',\n                            address: '广东省广州市天河区'\n                        },\n                        {\n                            id: '2',\n                            date: '2019-09-26',\n                            name: '张三1',\n                            status: '1',\n                            address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2'\n                        }\n                    ],\n                    column: [\n                    { prop: 'name', label: '姓名', minWidth: '100', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220' }\n                    ]\n                }\n            }\n        },\n        methods: {\n            // 复选框选中\n            selectionChange (val) {\n            console.log('复选框选中值', val)\n            }\n        }\n    }\n<\/script>\n")])])])])],1),n._v(" "),e("h1",{attrs:{id:"翻页选中功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#翻页选中功能"}},[n._v("#")]),n._v(" 翻页选中功能")]),n._v(" "),e("hr"),n._v(" "),e("common-code-format",{attrs:{description:"注意：（参考配置参数）firstColumn: { type: 'selection', isPaging: true };注释：type: 'selection' 表复选框;isPaging: true 表可以跨页勾选"}},[e("docsComponents-TTable-pageCheck"),n._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("<template>\n    <div class=\"t-table\" style=\"width:100%;\">\n       <t-table\n        :table=\"table\"\n        @selection-change=\"selectionChange\"\n        :row-key=\"getRowKey\"\n        isShowPagination\n        />\n    </div>\n</template>\n<script>\n    export default {\n        data () {\n            return {\n                table: {\n                    total: 0,\n                    currentPage: 1,\n                    pageSize: 10,\n                    firstColumn: { type: 'selection', isPaging: true },\n                    data: [\n                        {\n                            id: '1',\n                            date: '2019-09-25',\n                            name: '张三',\n                            status: '2',\n                            address: '广东省广州市天河区'\n                        },\n                        {\n                            id: '2',\n                            date: '2019-09-26',\n                            name: '张三1',\n                            status: '1',\n                            address: '广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2'\n                        }\n                    ],\n                    column: [\n                    { prop: 'name', label: '姓名', minWidth: '100', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220', sort: true },\n                    { prop: 'date', label: '日期', minWidth: '180', sort: true },\n                    { prop: 'address', label: '地址', minWidth: '220' }\n                    ]\n                }\n            }\n        },\n        methods: {\n           // 翻页选中的唯一值\n            getRowKey (row) {\n                return row.id\n            },\n            // 复选框选中\n            selectionChange (val) {\n                const chosenIds = val.map(item => item.id)\n                console.log('翻页选中的所有值', chosenIds)\n            }\n        }\n    }\n<\/script>\n")])])])])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);