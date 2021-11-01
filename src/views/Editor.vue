<template>
  <div class="home">
    <input type="text"/> <button>문자열</button>
    <input type="text"/> <button>숫자</button>
    <input type="text"/> <button>부울</button>
    <input type="text"/> <button>JSON</button>
    <Editor msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'

export default {
  name: 'Home',
  components: {
    Editor
  }
}
</script>
<style  lang="scss" scoped>

</style>