# Input组件
---

<common-code-format description="">
  <docsComponents-TInput-index></docsComponents-TInput-index>
  <highlight-code slot="codeText">
    <template>
        <div class="t-input" style="min-height:100px;width:100%;padding:10px;">
          <div>默认方式显示金额</div>
          <t-input placeholder="请输入金额" @numblur="blurVal" v-model="money"></t-input>
          <div>显示天数</div>
          <t-input placeholder="请输入天数" inputType="days" appendTitle="天" @numblur="blurVal1" v-model="day"></t-input>
          <div>显示电话号码</div>
          <t-input
            placeholder="请输入电话号码"
            :isShow="false"
            inputType="tel"
            @numblur="blurVal2"
            v-model="tel"
          ></t-input>
      </div>
    </template>
    <script>
        export default {
             data () {
              return {
                  money: null,
                  day: null,
                  tel: ''
              }
            },
            // 方法
            methods: {
               blurVal (val) {
                  console.log('获取输入的值', val)
                },
              blurVal1 (val) {
                  console.log('获取输入的值1', val)
                },
              blurVal2 (val) {
                  console.log('获取输入的值2', val)
                }
            }
        }
    </script>
  </highlight-code>
</common-code-format>
