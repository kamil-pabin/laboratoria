<template>
  <div class="lab2">
    <div class="opisZadania">
       <h1>Laboratorium 2 - Bootstrap i Javascript</h1>
       <p>Przykładem wykorzystania Bootstrapa i Javascript, może być zarówno ta strona, jak i strona Escape Roomu, której screenshot załączam poniżej. </p>
       <div class="newY">
          <img src="../assets/wyspa1.png">
       </div>
       <p>Na obu stronach znajduje się dużo funkcjonalnego Javascriptu, jak i elementy z Bootstrapa. Samych zmian dostępnych przez javascript jest spokojnie ponad 20, m.in. zmiana tła, chowanie żarówek, chowanie elementów tekstu, uruchamianie skryptów php, zmiana prędkości sekundy, pokazywanie podpowiedzi, zmiana widocznego elementu, postępujący pasek itd.  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratorium2',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.lab2{
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
