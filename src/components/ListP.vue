<template>
  <div class="listPP">
    <div id="gornaCzesc">
      <div id="daneAdresowe">
        <p> {{ imieNazwisko }} </p>
        <p> {{ ulicaNumer }} </p>
        <p> {{ kodPocztowy }} {{ miasto }} </p>
      </div>
      <div id="miejscowoscData">
        <p> {{ miasto }}, {{ dataDnia }} </p>
      </div>
    </div>
    <div id="tresc">
      <h1> {{ tytul }} </h1>
      <p> {{ par1 }} </p>
      <p> {{ par2 }} </p>
      <p> {{ par3 }} </p>
    </div>
    <div id="dolnaCzesc">
      <div id="podpis">
        <p> {{ pozdrowienie }}, </p>
        <p> {{ imieNazwisko }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListP',
  props: {
    imieNazwisko: String,
    ulicaNumer: String,
    kodPocztowy: String,
    miasto: String,
    dataDnia: String,
    tytul: String,
    par1: String,
    par2: String,
    par3: String,
    pozdrowienie: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#gornaCzesc{
  display:flex;
  -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1.5s; /* Firefox < 16 */
        -ms-animation: fadein 1.5s; /* Internet Explorer */
         -o-animation: fadein 1.5s; /* Opera < 12.1 */
            animation: fadein 1.5s;
}
#daneAdresowe{
  text-align: left;
  width:75%;
}
#daneAdresowe p{
  padding-left:1%;
  margin: 0;
}
#miejscowoscData{
  text-align:right;
  width:25%;
}
#miejscowoscData p{
  padding-right:1%;
  margin: 5%;
}
#tresc{
  text-align:left;
  -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 5s; /* Firefox < 16 */
        -ms-animation: fadein 5s; /* Internet Explorer */
         -o-animation: fadein 5s; /* Opera < 12.1 */
            animation: fadein 5s;
}
#tresc p{
  padding:1%;
  margin:0;
}
#tresc h1{
  text-align:center;
}
#podpis{
  text-align:right;
  -webkit-animation: fadein 9s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 9s; /* Firefox < 16 */
        -ms-animation: fadein 9s; /* Internet Explorer */
         -o-animation: fadein 9s; /* Opera < 12.1 */
            animation: fadein 9s;
}
#podpis p{
  padding-right:1%;
  margin: 0;
}
.listPP{
  padding:2%;
  background: cornsilk;
  width:80%;
  display:inline-block;
  margin-top:0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  font-family: 'Dancing Script', cursive;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
