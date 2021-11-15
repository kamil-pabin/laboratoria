<template>
  <div class="lab3">
    <div class="opisZadania">
       <h1>Laboratorium 3 - Obsługa zdarzeń</h1>
       <p>Do wykonania kolejne zadania w javascript, obsługa zdarzeń przy pomocy addEventListener </p>
       <div class="newY">
          <img src="../assets/formularz.png">
       </div>
       <p>Generalnie całe vue.js na tym bazuje, ale jakby wskazać coś konkretnego poza samym systemem tej strony, to można wskazać własne zdarzenia, takie jak np. 'nasłuchiwanie' na wartość zmiennej, a gdy ona się zmieni to pojawia się element. Ciekawym przykładem może być funkcjonalność formularza połączona z pisaniem listu w laboratorium 1, lub żarówka na stronie głównej, która czeka na kliknięcie w nią a następnie ładuje drugą. </p>
       <p>Kolejnym przykładem może być większość strony escape roomu, która bazuje na oczekiwaniu aż administrator (pokoju) kliknie na przyciski, lub gdy jakaś wartość ulegnie zmianie.</p>
       <b-button-group>
        <b-button href="https://github.com/kamil-pabin/WebDev" target="_blank">Repo</b-button>
        <b-button href="https://kamil-pabin.github.io/WebDev/frontend/escaperoom/" target="_blank">Demo</b-button>
       </b-button-group>
       <div class="newY">
         <img src="../assets/fun1.png">
       </div>
       <div class="newY">
         <img src="../assets/fun2.png">
       </div>
       <div class="newY">
         <img src="../assets/fun3.png">
       </div>
       <div class="newY">
         <img src="../assets/fun4.png">
       </div>
       <div class="newY">
         <img src="../assets/fun5.png">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratorium3',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.lab3{
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
