<template>
  <div class="lab6">
    <div class="opisZadania">
       <h1>Laboratorium 7 - Wykorzystanie Routera i Frameworka Frontendowego</h1>
       <p>Strona ta została wykoana z wykorzystaniem Routera i frameworka frontendowego - w moim przypadku Bootstrap-vue</p>
      <a href="https://github.com/kamil-pabin/laboratoria" target='_blank' >Repo tej strony</a>
      <div class="newY">
          <img src="../assets/router.png">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratorium6',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.lab6{
  font-family: Zen Kurenaido;
  text-align: center;
  width:100%;
  position:flex;
  color: black;
  padding:0;
  margin:0;
  max-height:100%;
}
.opisZadania{
  font-family: open-sans;
  font-size:1.3rem;
}
.newY{
  display:block;
  margin:auto;
  max-height:60%;
}
.newY img{
  max-width: 60%;
}
</style>
