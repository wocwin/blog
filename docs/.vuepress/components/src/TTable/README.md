# TTable简单使用(v1.1.0)

## 1. 简介
  table组件的渲染数据

## 2. 结构
  #####2.1 顶部
    展示头部选项栏
  ```
    <div class="toolbar"
         v-if="isShow('toolbar')">
      <slot name="toolbar"></slot>
    </div>
  ```
  #####2.2 中间
    展示表格数据
  ```
    <el-table ref="el-table"
      :data="table.data"
      :height="height ? undefined:  $store.getters.tableHeight - otherHeight"
      v-bind="$attrs"
      v-on="$listeners"
      border>
      ......
    </el-table>
  ```
  #####2.3 底部
    展示分页
  ```
    <el-pagination v-show="table.data.length"
      :current-page="table.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="table.pageSize"
      :layout="size?'total, prev, pager, next':'total, sizes, prev, pager, next'"
      :total="table.total"
      background>
    </el-pagination>
  ```

## 3. 配置参数

| 参数          | 说明                      | 类型      |  是否必须|
| -----------  | --------------------------| -------   | ----- |
| table        | 表格数据对象               | Object    | 是    |
|   ---data    | 展示数据                   | Array     | 是    |
|   ---column  | 表头信息                   | Array     | 是    |
|   ---operator| 表格操作栏数据             | Array      | 否    |
|   ---operatorConfig   | 操作栏样式        | Object    | 否    |
|   ---changeColor   | 整行文字样式控制      | Object    | 否    |
|   ---firstColumn| 表格首列(序号 index,复选框 selection）排列| object | 否|
|   ---total   | 数据总条数                 | Number     | 是    |
|   ---pageSize| 页数量                     | Number    | 是     |
|   ---currentPage| 是否需要显示切换页条数    | Number    | 是     |
| height       | 是否固定高度                | Boolean   | 否     |
| fixHeight    | 走固定高度时候表格高度       |String || Number| 否     |
| size         | 分页类型选项                | Boolean   | 否     |

## 4. 使用帮助

  #####4.1 关于顶部工具栏
  使用插槽toolbar传入即可
  ```
  <div slot="toolbar">
    <el-select v-model="optValue"
                placeholder="请选择"
                size="small"
                @change="optionChange">
      <el-option v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
      </el-option>
    </el-select>
  </div>
  ```
  #####4.2 关于表格操作栏
  配置operator即可
  ```
  operator: [
    {
      text: '预览',
      type: 'primary',
      fun: this.preview
    },
    {
      text: '编辑',
      type: 'danger',
      fun: this.edit,
      show: { key: 'status', val: [3,4] } // 表status值为3或者4时，显示此操作健 根据后台字段返回是数字还是字符串来显示
    },
    {
      text: '撤销',
      fun: this.revoke,
      show: { key: 'status', val: ['1'] }
    }
  ]
  ```
  #####4.3 关于表格操作栏样式，如固定右侧，宽度
  ```
  operatorConfig: {
    fixed: 'right',
    width: 200,
    label: '操作'
  }
  ```
  #####4.4 关于表格某行文字颜色
  ```
  changeColor: {
    key: 'status', // 状态
    val: '0',  // 状态值
    txtStyle: 'red' // 设置文字颜色
  }
  ```
   #####4.5 关于表格状态filters方法使用（在表头column对象里添加如下字段）
  ```
  { prop: 'loanInterest', label: '利息', width: '120' , filters: { method: '%' }},
  filters: { method: '%' }：表显示百分比
  filters: { method: '￥' }：表显示金额
  filters: { param: 'REPAYMENT_STATES' } ：表状态对应的canstants对应的字段
  ```
  #####4.5 关于element-ui el-table提供的一些方法，样式如何添加
  按照el-table写法直接使用即可，无需其他配置

## 5. Dome
参考：demo小组件运用页面