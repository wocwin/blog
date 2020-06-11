<template>
  <div class="ns-search-select">
    <!-- <ns-search-select :data="values" @search="searchHandle"></ns-search-select> -->
    时间选择
  </div>
</template>

<script>
// import searchSelech from '../../../../packages/searchSelect'
export default {
  components: {
    // 'ns-search-select': searchSelech
  },
  data () {
    return {
      values: [111, 222]
    }
  },
  methods: {
    searchHandle (key) {
      console.log(key)
    }
  }
}
</script>
