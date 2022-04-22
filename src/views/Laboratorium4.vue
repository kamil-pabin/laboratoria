<template>
  <div class="lab4">
    <div class="opisZadania">
      <h1>Laboratorium 4 - Gra</h1>
      <p>W przyszłości planowana gra platformowa oparta na widokach vue.js</p>
    </div>
    <div class="container"></div>
    <div id="controls">
      <button type="button" class="btn primary" data-action="newGame">
        Zacznij od nowa
      </button>
      <button type="button" class="btn primary" data-action="solve">
        Pokaż rozwiązanie
      </button>
      <button type="button" class="btn primary" data-action="validate">
        Sprawdź
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratorium4',
  components: {},
  methods: {}

}
</script>
<style lang="scss" scoped>
.lab4 {
  font-family: Zen Kurenaido;
  text-align: center;
  width: 100%;
  position: flex;
  color: black;
  padding: 0;
  margin: 0;
  max-height: 100%;
}
.opisZadania {
  font-family: open-sans;
  font-size: 1.3rem;
}
.newY {
  display: block;
  margin: auto;
  max-height: 60%;
}
.newY img {
  max-width: 60%;
}
</style>

<script>

</script>
