<template>
  <div id="app">
    <b-card no-body class="theCard">
      <template #header>
        <div class="glowaStrony">
          <h3 class="mb-0 myheader">
            <a class="name" href="https://www.linkedin.com/in/kpabin" target='_blank'>
            Kamil Pabin
            </a>
            <a class="name2">
            195IC_A 22637
            </a>
          </h3>
        </div>
      </template>
      <b-card-header header-tag="nav" class="head">
        <div class="heahead">
          <b-nav card-header tabs fill>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium1" :active="$route.name =='Laboratorium1'">
              Laboratorium_1
            </b-nav-item>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium2" :active="$route.name =='Laboratorium2'">
              Laboratorium_2
            </b-nav-item>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium3" :active="$route.name =='Laboratorium3'">
              Laboratorium_3
            </b-nav-item>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium4" :active="$route.name =='Laboratorium4'">
              Laboratorium_4
            </b-nav-item>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium5" :active="$route.name =='Laboratorium5'">
              Laboratorium_5
            </b-nav-item>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium6" :active="$route.name =='Laboratorium6'">
              Laboratorium_6
            </b-nav-item>
            <b-nav-item class="tabButton routerlink" to="/Laboratorium7" :active="$route.name =='Laboratorium7'">
              Laboratorium_7
            </b-nav-item>
          </b-nav>
        </div>
      </b-card-header>
      <template #footer>
        <b-nav card-header tabs fill myheader>
          <b-nav-item class="tabButton rotate routerlink" to="/" :active="$route.name =='Home'">
            <div class="title">Home</div>
          </b-nav-item>
          <b-nav-item class="tabButton rotate routerlink" to="/About" :active="$route.name =='About'">
            <div class="title">O mnie</div>
          </b-nav-item>
        </b-nav>
      </template>
      <b-card-body class="text-center interior">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>

</script>

<style lang="scss">

@import '../src/assets/transitionStyles.css';
@import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Dancing+Script&display=swap');
@import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position:absolute;
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  border: 0px !important;
  overflow: hidden;
}
#nav {
  padding: 30px;
}
.theCard {
  height: 100%;
  width: 100%;
  padding: 0vh;
  border: 0px !important;
}
.myheader{
  display: flex;
  justify-content: space-between;
  font-size: 4rem;
  position:static;
  font-family: Zen Kurenaido;
}
.head{
  background: linear-gradient(140deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 41%, rgb(0, 0, 0) 100%);
}
.card-footer{
  background: linear-gradient(140deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0),rgb(0, 0, 0) 100%);
}
.name{
  transition: .2s ease;
  text-decoration: 0;
  color: black;
}
.name:hover{
  transition: .2s ease;
  color: black;
  text-shadow: 0 0 20px #0077ff,0 0 10px #3c97ff, 0 0 5px #61b8ff;
}
.name2{
  transition: .2s ease;
  text-decoration: 0;
  color: black;
}
.name2:hover{
  transition: .2s ease;
  color: black;
  text-shadow: 0 0 20px #0077ff,0 0 10px #3c97ff, 0 0 5px #61b8ff;
}
.tabButton {
  transition: .5s ease;
  text-decoration: 0;
  text-transform: uppercase;
  font-family: Zen Kurenaido;
  font-size: 0.9em;
  font-weight: 500;
}
.rotate{
  transform: skew(0deg);
  padding-bottom:0;
  border-bottom:0;
  border-bottom-color: transparent;
  margin-block-start: -1em;
}
.tabButton a {
  color: white;
}
.interior{
  padding-bottom: 0;
  margin-bottom:0;
  display:flex;
  max-height:100%;
  background: linear-gradient(-180deg, rgba(246, 255, 177, 0.295) 0%, rgba(255, 224, 211, 0.137) 41%,rgba(254, 249, 255, 0.979) 100%);
}
.tabButton:hover {
  background: rgba(255, 255, 255, 0.107);
  transition: .6s ease;
}
.tabButton:hover a {
  color: white;
  text-shadow: 0 0 20px #ffa600,0 0 10px #ff9900, 0 0 5px #fffb00;
}

@media only screen and (max-width: 1100px) {
  .myheader{
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
    font-family: Zen Kurenaido;
  }
  .tabButton {
    transition: .5s ease;
    text-decoration: 0;
    text-transform: uppercase;
    font-family: Zen Kurenaido;
    font-size: 0.8rem;
    font-weight: 500;
    transform: skew(0deg);
  }
}
.card-body.text-center.interior {
    padding: 0;
    height:100%;
}
</style>
