<template>
  <div class="t-protocolSrc">
    <el-dialog
      :title="protocolTitle"
      :visible="protocolVisible"
      :width="protocolWidth"
      :before-close="handleClose"
      top="5vh"
      v-bind="$attrs"
      v-on="$listeners"
      center
    >
      <div class="pdf" :style="{height:protocolDialogHeight}">
        <iframe :src="protocolSrc" style="width:100%;height:100%;padding: 10px;" frameborder="0"></iframe>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="close">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TProtocol',
  props: {
    protocolVisible: { // 协议弹框
      type: Boolean,
      default: false
    },
    protocolTitle: {
      type: String,
      default: '协议'
    },
    protocolDialogHeight: {
      type: String,
      default: '700px'
    },
    protocolWidth: {
      type: String,
      default: '70%'
    },
    protocolSrc: {
      type: String
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
