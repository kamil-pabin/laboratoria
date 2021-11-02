<template>
  <div class="lab5">
    <div class="opisZadania">
       <h1>Laboratorium 5 - AJAX</h1>
       <p>Myślę że pierwszy krok zadania - wyjaśnienie go, wykonałem w filmie poniżej. Strona EscapeRoom bazowała w większości na ajaxie, ponieważ nie mogła być odświeżana w trakcie rozgrywki gdy gracze byli w pokoju - wchodzac do pokoju, mieli poczuć się jakby naprawdę przeżywali jakąś historię, a taka sytuacja mogła by ich wytrącić z tego uczucia. Tak więc asynchroniczne zapytania są świetne gdy potrzebujemy strony która się 'nie odświeża' a jednocześnie aktualizuje dane na tej stronie.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YprhoLAlkOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FNzol_2vse0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7JsZY65qoRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jR0-m1uyrNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>Jednym z najlepszych przykładów - będzie zegar na ww stronie, aktualizowany na bieżąco z bazy danych, jednak strona nie odświeżyła się ani razu. Tak samo jak każdy inny element strony, więcej w filmikach, w części 4 krótkie omówienie kodu.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratorium5',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.lab5{
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
