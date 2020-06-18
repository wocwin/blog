# Excel导入组件
---

<common-code-format description="在组件中需配置：属性visible是否显示弹窗；title：弹窗标题（默认：温馨提示）；@update:visible 右上删除或取消事件；新增v-dialogDrag指令可按头部拖拽弹窗；ElementUI中el-dialog的属性皆可用(如：close-on-click-modal属性——点击空白区域是否关闭弹窗)">
  <docsComponents-UploadExcel-index></docsComponents-UploadExcel-index>
  <highlight-code slot="codeText">
    <template>
       <div class="excel-upload" style="width: 100%;">
          <t-layout sectionTitle="Excel上传组件">
            <step-wizard
              style="min-height:400px;"
              :stepData="stepData"
              :lastBtnTitle="lastBtnTitle"
              :active="active"
              :successTitle="successTitle"
              @complete="complete"
            >
              <!-- 1.上传文件 -->
              <template #first>
                <div class="content-main">
                  <upload-excel
                    :on-success="handleSuccess"
                    :before-upload="beforeUpload"
                    :selectedFileText="fileName"
                  />
                  <div class="hint t-margin-top-10">
                    <i class="i-icon icon iconfont icon-prompt t-padding5 text-primary" />&nbsp;
                    <b>提示：</b>
                    <span class="text-muted">
                      1、如果您还没有导入模板，请点击
                      <a @click="downloadTemplate">发票导入模板下载.xlsx</a>
                    </span>
                    <br />
                    <span
                      class="text-muted"
                      style="margin-left: 76px;"
                    >2、相同的发票不能重复上传，若已上传的数据不正确，请先删除，再重新上传。(发票号码和发票代码相同的为同一张发票)</span>
                  </div>
                </div>
              </template>
              <!-- 2.核对信息 -->
              <template #second>
                <div class="content-main">
                  <div class="alert-content">
                    <div class="alert alert-info text-center">
                      <i class="i-icon icon iconfont icon-prompt t-padding5 text-primary" />&nbsp;
                      <span>
                        您本次共导入
                        <span class="text-danger">importRecNum</span>条记录
                      </span>
                    </div>
                  </div>
                  <el-table
                    :data="tableData"
                    border
                    highlight-current-row
                    style="width: 100%;margin-top:20px;"
                  >
                    <el-table-column
                      v-for="item of tableHeader"
                      :key="item"
                      :prop="item"
                      :label="item"
                      show-overflow-tooltip
                      min-width="220"
                      align="center"
                    />
                  </el-table>
                </div>
              </template>
            </step-wizard>
          </t-layout>
        </div>
    </template>
    <script>
        export default {
            data () {
              return {
                active: 0,
                stepData: [
                  {
                    id: 1,
                    title: '上传文件',
                    slotName: 'first',
                    btnArr: [
                      {
                        btnTitle: '下一步',
                        fn: this.next
                      }
                    ]
                  },
                  {
                    id: 2,
                    title: '核对信息',
                    slotName: 'second',
                    btnArr: [
                      {
                        btnTitle: '上一步',
                        fn: this.stepBack
                      },
                      {
                        btnTitle: '下一步',
                        fn: this.submitBtn
                      }
                    ]
                  },
                  {
                    id: 3,
                    title: '完成'
                  }
                ],
                lastBtnTitle: '完成',
                successTitle: '发票导入完成...',
                fileName: '',
                importRecNum: 0, // 导入多少条数据
                tableData: [],
                tableHeader: []
              }
            },
            methods: {
              beforeUpload (file) {
                this.fileName = file.name
                const isLt1M = file.size / 1024 / 1024 < 1
                if (isLt1M) {
                  return true
                }
                this.$message({
                  message: '请不要上传大于1m的文件.',
                  type: 'warning'
                })
                return false
              },
              handleSuccess ({ results, header }) {
                this.importRecNum = results.length
                this.tableData = results
                this.tableHeader = header
              },
              // 第二步确认提交
              submitBtn (val) {
                this.active += 2
                this.fileName = ''
              },
              // 第一步--下一步
              next () {
                if (this.fileName) {
                  this.active += 1
                } else {
                  this.$message({
                    message: '请先上传文件.',
                    type: 'warning'
                  })
                  return false
                }
              },
              // 第二步---上一步
              stepBack () {
                this.active -= 1
              },
              // 第三步完成
              complete () {
                this.active = 0
              },
              // 下载模板
              downloadTemplate () {
                console.log('下载模板')
              }
            }
        }
    </script>
  </highlight-code>
</common-code-format>
