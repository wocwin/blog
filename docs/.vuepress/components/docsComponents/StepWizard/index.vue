<template>
  <div style="width:100%;">
    <step-wizard
      style="min-height:400px;"
      :stepData="stepData"
      :lastBtnTitle="lastBtnTitle"
      :active="active"
      :successTitle="successTitle"
      @complete="complete"
    >
      <template #first>第一步</template>
      <template #second>第二步骤</template>
      <template #third>第三步骤</template>
    </step-wizard>
  </div>
</template>

<script>
import StepWizard from '../../src/StepWizard'
export default {
  components: {
    StepWizard
  },
  data () {
    return {
      active: 0,
      stepData: [
        {
          id: 1,
          title: '创建账户',
          slotName: 'first',
          btnArr: [
            {
              btnTitle: '下一步',
              params: 1,
              fn: this.next
            }
          ]
        },
        {
          id: 2,
          title: '填写基础信息',
          slotName: 'second',
          btnArr: [
            {
              btnTitle: '上一步',
              params: 2,
              fn: this.back
            },
            {
              btnTitle: '下一步',
              params: 2,
              fn: this.next
            }
          ]
        },
        {
          id: 3,
          title: '填写用户信息',
          slotName: 'third',
          btnArr: [
            {
              btnTitle: '上一步',
              params: 3,
              fn: this.back
            },
            {
              btnTitle: '下一步',
              params: 3,
              fn: this.next
            }
          ]
        },
        {
          id: 4,
          title: '注册成功'
        }
      ],
      lastBtnTitle: '提交资料',
      successTitle: '企业信息填写完成'
    }
  },
  methods: {
    // 下一步
    next (val) {
      switch (val.params) {
        case 1:
          this.active += 1
          break
        case 2:
          this.active += 1
          break
        case 3:
          this.active += 2
          break
      }
    },
    // 上一步
    back (val) {
      switch (val.params) {
        case 2:
          this.active -= 1
          break
        case 3:
          this.active -= 1
          break
      }
    },
    // 完成
    complete () {
      this.active = 0
    }
  }
}
</script>
