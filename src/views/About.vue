<template>
  <div class="about">
    <div class="typewriter">
      <h1 id="hello">"Strona o mnie"</h1>
    </div>
    <div class="newY">
        <img src="../assets/newYork.png" alt="Responsive image">
    </div>
    <div class="h2 mb-0 ikonki">
      <b-icon-github @click="openNewTab('https://github.com/kamil-pabin')" />
      <b-icon-linkedin @click="openNewTab('https://www.linkedin.com/in/kpabin/')" />
      <b-icon-code-slash @click="openNewTab('https://www.codewars.com/users/kamil-pabin')" />
      <b-icon-facebook @click="openNewTab('https://www.facebook.com/kamil.pab')" />
      <b-icon-instagram @click="openNewTab('https://www.instagram.com/kamil_pabin/')" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      context: null
    }
  },
  methods: {
    openNewTab: function (url) {
      window.open(url, '_blank').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  font-family: Zen Kurenaido;
  text-align: center;
  width:100%;
  position:flex;
  color: black;
  padding:0;
  margin:0;
  max-height:100%;
}
.newY{
  display:block;
  margin:auto;
  max-height:100%;
}
.newY img{
  max-width: 100%;
}
.ikonki{
  display: flex;
  max-width: 20vw;
  margin:auto;
  margin-top:2vh;
  justify-content: space-between;
}
.ikonki svg:hover{
  cursor: pointer;
}
h1{
    overflow: hidden;
    line-height: 20vh;
    font-size:6.5vw;
    margin: 0;
    padding:0;
    letter-spacing: .15em;
  }
@media only screen and (min-width: 1350px) {
  .typewriter h1{
    overflow: hidden;
    font-size:5rem;
    line-height:20vh;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
  }
  #hello{
    animation-delay: 0.2s;
    animation:
      typing 3s steps(30, end);
  }
  @keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
}
</style>
