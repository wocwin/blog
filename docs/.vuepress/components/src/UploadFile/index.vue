
<template>
  <div class="upload-file-container-outer">
    <div class="upload-file-container">
      <el-upload
        :class="{hide:hideUpload}"
        :action="savePath"
        :multiple="multiple"
        list-type="picture-card"
        :on-change="fileListChange"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        :on-preview="onPreview"
        :on-remove="onRemove"
        :accept="fileType"
        :disabled="disabled"
        :limit="limit"
        :http-request="uploadRequest"
        :file-list="showFileList"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <i slot="default" class="el-icon-plus"></i>
        <div class="el-upload-list__item" style="position:relative" slot="file" slot-scope="{file}">
          <img
            :src="file.url"
            class="el-upload-list__item-thumbnail pointer"
            alt
            v-if="(/.png|.jpg|.jpeg|.PNG|.JPG|.JPEG/).test(file.name)"
          />
          <img
            :src="downloadFixedIcon(file.name)"
            class="el-upload-list__item-thumbnail pointer"
            alt
            v-else
          />
          <p
            class="text-center file-name-style"
            v-if="!(/.png|.jpg|.jpeg|.PNG|.JPG|.JPEG/).test(file.name)"
          >{{file.name}}</p>
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="onPreview4show((/.png|.jpg|.jpeg|.PNG|.JPG|.JPEG/).test(file.name)?file.url:downloadFixedIcon(file.name))"
              v-if="(/.png|.jpg|.jpeg|.PNG|.JPG|.JPEG/).test(file.name)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span class="el-upload-list__item-delete" @click="downloadFile(file.id)">
              <i class="el-icon-download"></i>
            </span>
            <span class="el-upload-list__item-delete" @click="onRemove(file)" v-if="!disabled">
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>
    <div class="upload-file-tips">
      <i class="i-icon icon iconfont icon-prompt text-primary"></i>
      仅允许上传类型为{{fileType}},文件名不超过{{fileNameLimit}}位，并且不大于{{limitSize}}MB的文件。
    </div>
  </div>
</template>
<script>
/**
*  图片上传控件
*  uploadFile
*
*/
import { downloadFile } from '../../../public/utils'
export default {
  name: 'uploadFile',
  data () {
    return {
      url: '',
      hideUpload: false,
      showAddImg: true,
      dialogImageUrl: '', // 上传图片后预览预判地址
      dialogVisible: false, // 放大图片弹框
      singleResult: {}, // 单次返回报文结果
      showFileList: [],
      downloadFixedIcons: [
        { type: 0, url: require(`../../../public/img/file.png`) },
        { type: 1, url: require(`../../../public/img/doc.png`) },
        { type: 2, url: require(`../../../public/img/ppt.png`) },
        { type: 3, url: require(`../../../public/img/xls.png`) },
        { type: 4, url: require(`../../../public/img/txt.png`) },
        { type: 5, url: require(`../../../public/img/pdf.png`) },
        { type: 6, url: require(`../../../public/img/zip.png`) },
        { type: 7, url: require(`../../../public/img/rar.png`) }
      ]
    }
  },
  props: {
    // 是否支持多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 限制上传文件大小默认10MB
    limitSize: {
      type: String,
      default: '10'
    },
    // 上传图片个数限制
    limit: {
      type: Number,
      default: 100
    },
    // 限制上传的文件类型
    fileType: {
      type: String,
      default: '.jpg,.jpeg,.bmp,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.txt,.rar,.zip'
    },
    savePath: {
      type: String,
      default: 'string'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 文件名字长度限制
    fileNameLimit: {
      type: Number,
      default: 50
    },
    // 是否编辑带出图片
    editBackFile: {
      type: Boolean,
      default: false
    },
    // 回显图片的list
    fileIdList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 资料类型：001-企业征信报告，002-个人征信报告，003-担保人，004-其他
    attachmentType: {
      type: String,
      default: null
    }
  },
  mounted () {
    // 回显图片
    if (this.editBackFile || this.disabled) {
      this.showDownLoadFile()
    }
    // 控制上传按钮
    if (this.disabled) {
      this.hideUpload = true
    }
  },
  methods: {
    uploadRequest (params) {
      console.log(params)
      const _file = params.file
      let formData = new FormData()
      formData.append('file', _file)
      console.log('图片上传')
      this.showFileList.push({ id: params.file.uid, uid: params.file.uid, name: params.file.name, url: URL.createObjectURL(_file) })
      // const res = await this.$ajaxRequest('upload', 'uploadFile', formData)
      // if (res && res.status === 200) {
      //   console.log('res', res)
      //   this.showFileList.push({ id: res.result, uid: params.file.uid, name: params.file.name, url: URL.createObjectURL(_file) })
      // }
    },
    beforeUpload (file) {
      const overSize = file.size / (1024 * 1024) > this.limitSize
      const overFileNameLength = file.name.length > this.fileNameLimit
      let type = file.name.slice(file.name.lastIndexOf('.') + 1).toLocaleLowerCase()
      let isNotMatchType = this.fileType.indexOf('.' + type) === -1
      if (overSize) {
        this.$message.error('上传文件不得大于' + this.limitSize + 'MB')
      }
      if (overFileNameLength) {
        this.$message.error('上传文件名称不得大于' + this.fileNameLimit + '位字符')
      }
      if (isNotMatchType) {
        this.$message.error('上传文件类型不符合要求')
      }
      return !(overSize || overFileNameLength || isNotMatchType)
    },
    handleSuccess (res, file, fileList) {
      const successData = {
        res: this.findIdList(this.showFileList)
      }
      this.$emit('uploadSuccess', successData, this.attachmentType)
    },
    // 获取图片回显
    showDownLoadFile () {
      this.showFileList = []
      for (let i = 0; i < this.fileIdList.length; i++) {
        // showFileList
        // const res = await this.$ajaxRequest('GETIMAGE', 'downloadFile', null, this.fileIdList[i])
        // let url = window.URL.createObjectURL(new Blob([res]))
        // this.showFileList.push({ id: this.fileIdList[i], url: url, name: res.filename })
      }
      console.log('调用图片回显')
    },
    onPreview (file) {
      // 放大
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    onPreview4show (url) {
      // 放大,回显部分
      this.dialogImageUrl = url
      this.dialogVisible = true
    },
    findIdList (list) {
      return list.map(item => {
        return item.id
      })
    },
    onRemove (file, fileList) {
      console.log(file, fileList)
      let deleteId = file.id

      // await this.$ajaxRequest('delete', 'deleteFile', {}, deleteId)
      let tempList = this.showFileList
      tempList.forEach((item, index) => {
        if (item.id === deleteId) {
          this.showFileList.splice(index, 1)
        }
      })
      // 输出
      const Idlist = this.findIdList(this.showFileList)
      this.$emit('deleteSuccess', { res: Idlist }, this.attachmentType)

      // 删除不会调用onchange所以这里也需要主动调用
      this.hideUpload = this.showFileList.length >= this.limit
    },
    // 返回显示文件图标的地址函数
    downloadFixedIcon (item) {
      if ((/.bmp|.gif/).test(item)) {
        return this.downloadFixedIcons[0].url
      } else if (/.doc|.docx/.test(item)) {
        return this.downloadFixedIcons[1].url
      } else if (/.xls|.xlsx/.test(item)) {
        return this.downloadFixedIcons[3].url
      } else if (/.txt/.test(item)) {
        return this.downloadFixedIcons[4].url
      } else if (/.pdf/.test(item)) {
        return this.downloadFixedIcons[5].url
      } else if (/.zip/.test(item)) {
        return this.downloadFixedIcons[6].url
      } else if (/.rar/.test(item)) {
        return this.downloadFixedIcons[6].url
      }
    },
    // 下载文件
    // async downloadFile (fileId) {
    //   const res = await this.$ajaxRequest('download', 'downloadFile', { showLoading: true }, fileId)
    //   downloadFile(res, res.filename)
    // },
    downloadFile (fileId) {
      console.log('调用下载文件')
    },
    fileListChange (f, fileList) {
      // 添加文件上传成功、失败都会调用on-change
      this.hideUpload = fileList.length >= this.limit
    }
  }
}
</script>
<style lang="scss">
.upload-file-container-outer {
  .upload-file-container {
    border: 1px solid #b4bccc;
    padding: 5px;
    .hide .el-upload--picture-card {
      display: none;
    }
    .file-name-style {
      position: absolute;
      top: 50%;
      width: 100%;
      color: #000;
    }
  }
  .upload-file-tips {
    font-size: 12px;
    color: #606266;
    margin-top: 7px;
    line-height: 16px;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
