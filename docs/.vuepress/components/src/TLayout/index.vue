<template>
  <div class="t_layout">
    <div ref="section" class="section" id="section">
      <header class="sectionTitle" v-if="sectionTitle">
        <div>{{sectionTitle}}</div>
        <div @click="$emit('click')">
          <el-button plain size="small" v-if="returnBtn">返回</el-button>
          <slot name="head-right"></slot>
        </div>
      </header>
      <div class="layout-content" ref="layoutContent" id="layoutContent">
        <slot></slot>
        <div class="flex-box flex-ver fix-btn">
          <slot name="fixBtn"></slot>
        </div>
        <div class="footer">底部信息</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TLayout',
  props: {
    sectionTitle: {
      type: String,
      default: ''
    },
    returnBtn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.adaptiveHeight()
  },
  activated () {
    this.adaptiveHeight()
  },
  methods: {
    isShow (name) {
      return Object.keys(this.$slots).includes(name)
    },
    // 自适应高度
    adaptiveHeight () {
      const fixBtnHeight = this.isShow('fixBtn') ? 40 : 0
      // 设置窗口的高度
      this.$refs.section.style.height = window.innerHeight - 83 + 'px'
      this.$refs.layoutContent.children[0].style.minHeight = window.innerHeight - 186 - fixBtnHeight + 'px'
      let that = this
      window.onresize = () => { // 重置窗口的高度
        that.$refs.section.style.height = window.innerHeight - 83 + 'px'
        that.$refs.layoutContent.children[0].style.minHeight = window.innerHeight - 186 - fixBtnHeight + 'px'
      }
      that.$on('hook:beforeDestroy', () => {
        window.onresize = null
      })
      that.$on('hook:deactivated', () => {
        window.onresize = null
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.t_layout {
  display: flex;
  .section {
    width: 100%;
    border: 1px solid #ccc;
    overflow-y: auto;
    background: #fff;
    .sectionTitle {
      height: 50px;
      border-bottom: 1px solid #ccc;
      color: #666;
      line-height: 50px;
      padding: 0 20px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }
    .layout-content {
      font-size: 14px;
      text-align: left;
      position: relative;
      .fix-btn {
        width: 100%;
        padding: 10px 0;
        text-align: center;
        background: #fff;
      }
      .footer {
        // margin-bottom: 10px;
        font-size: 12px;
        color: #999;
        width: 100%;
        height: 50px;
        display: flex;
        background: #fff;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        user-select: none;
        position: relative;
        bottom: 0;
      }
    }
  }
}
</style>
