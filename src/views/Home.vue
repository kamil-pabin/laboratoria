<template>
  <div class="home" v-bind:style="[zarowkaWlacz == 0 ? {'background': 'black'} : {'background': 'white'}]">
    <div class="typewriter" v-bind:style="[zarowkaWlacz == 0 ? {'color': 'white'} : {'color': 'black'}]">
      <h1 id="hello">Witaj na mojej stronie.</h1>
    </div>
    <div class="zarowki">
      <div class="zarowaOn" v-show="zarowkaWlacz == 1">
        <img src="../assets/bulb.png" alt="Responsive image" v-on:click="zarowkaWlacz -= 1; changeBulb()">
      </div>
      <div class="zarowaOff" v-show="zarowkaWlacz == 0">
        <img src="../assets/bulbOff.png" alt="Responsive image" v-on:click="zarowkaWlacz += 1; changeBulb()">
      </div>
      <div id="listaTech" class="check-list" v-show="zarowkaWlacz == 1">
        <div id="nagl">Wykorzystane technologie:</div>
        <ul>
          <li>-Vue.js with router and vuex</li>
          <li>-Bootstrap-vue</li>
          <li>-HTML&CSS&JavaScript</li>
          <li>-VueFormulate</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<script>
  export default {
    data() {
      return {
        zarowkaWlacz: 0,
        slide: 0,
        sliding: null
      }
    },
    methods: {
      changeBulb() {
        this.$emit('zarowkaWlacz')
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.home{
  font-family: Zen Kurenaido;
  text-align: center;
  height:85vh;
  width:100%;
  display:inline-block;
  background: black;
  color: white;
  padding:0;
  margin:0;
}
h1{
    overflow: hidden;
    line-height: 20vh;
    font-size:5vw;
    margin: 0;
    padding:0;
    letter-spacing: .15em;
  }
.zarowaOn img{
  width:10%;
  height:20%;
  cursor:grabbing;
}
.zarowaOff img{
  width:10%;
  height:20%;
  cursor:grabbing;
  animation: pulse 1.5s linear infinite;
}
.zarowki{
  display:inline-block;
  -webkit-animation: fadeinA 3s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadeinA 3s; /* Firefox < 16 */
        -ms-animation: fadeinA 3s; /* Internet Explorer */
         -o-animation: fadeinA 3s; /* Opera < 12.1 */
            animation: fadeinA 3s;
}
#click{
  overflow: hidden;
  font-size:4vw;
}
#listaTech{
  color:black;
  font-size:3vw;
  text-decoration: 0;
  list-style: 0;
  text-align: center;
  display:inline-block;
  height:20vh;
}
#listaTech #nagl{
  font-size: 5.5vw;
  padding:0;
  margin-top:3%;
  margin-bottom: 1%;
}
#listaTech ul{
  display:block;
  padding:0;
  max-width: 100%;
  max-height: 100%;
}
#listaTech li{
  list-style-type: none;
}
@keyframes pulse {
0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}
50% {
   -webkit-transform: scale(1);
   transform: scale(1);
}
100% {
    -webkit-transform: scale(0.9);
   transform: scale(0.9);
}
}
@keyframes fadeinA {
    0% { opacity: 0; }
    45% { opacity: 0; }
    100%   { opacity: 1; }
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@media only screen and (min-width: 1250px) {
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
  #listaTech{
    color:black;
    font-size: 2.3rem;
    text-decoration: 0;
    list-style: 0;
    text-align: center;
    display:inline-block;
    height:20vh;
  }
  #listaTech #nagl{
    font-size: 4rem;
    padding:0;
    margin-top:3%;
    margin-bottom: 1%;
  }
}
</style>
