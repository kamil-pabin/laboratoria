<template>
  <div class="lab6">
    <div class="opisZadania">
       <h1>Laboratorium 6 - Vue.js/React</h1>
       <p>Jako że zadanie polega na utworzeniu projektu w vue.js, wykorzystaniu props i połączeń z komponentami, a także plus za wykorzystania bootstrap-vue, to zdradzę że cała ta strona jest właśnie tak wykonana.</p>
      <a href="https://github.com/kamil-pabin/laboratoria" target='_blank' >Repo tej strony</a>
      <div class="newY">
          <img src="../assets/vuu.png">
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
