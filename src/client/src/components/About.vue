<!-- 关于本站 -->

<template>
  <div>
      <p class="list"><b>作者：</b>余文杰</p>
      <p class="list"><b>Github：</b><a target="_blank" href="https://github.com/winjayyu">https://github.com/winjayyu</a></p>
      <p class="list"><b>联系邮箱：</b>winjayyu@qq.com</p>
      <p class="list">大四学生 java/nodejs开发工程师</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'About'
  }
</script>

<style scoped>
    .list {
        display: block;
        font-size: 1.6rem;
    }

    .list a {
        color: #333;
    }

    .list a:active {
        color: #333;
    }

    .list a:hover {
        color: #41b883;
    }
</style>
