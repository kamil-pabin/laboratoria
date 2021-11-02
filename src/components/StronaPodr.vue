<template>
  <div class="stronaPodr">
    <div class="calosc">
      <section class="open-book">
        <h3 class="mb-0 myheader">
          <a class="tekst">Ludy Afryki 1</a>
          <a class="tekst">Deni G'ger</a>
        </h3>
        <hr class="solid">
        <div class="strona">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris vitae ultricies. Nunc pulvinar sapien et ligula ullamcorper. Pellentesque nec nam aliquam sem et tortor consequat id porta. Porttitor rhoncus dolor purus non enim praesent elementum. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vel facilisis volutpat est velit. Nam aliquam sem et tortor consequat id porta nibh venenatis. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Molestie a iaculis at erat pellentesque.</p>
          <p>Et sollicitudin ac orci phasellus egestas tellus rutrum. Sem et tortor consequat id porta nibh venenatis cras sed. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Euismod nisi porta lorem mollis aliquam ut porttitor. Amet est placerat in egestas erat imperdiet sed. Nunc consequat interdum varius sit amet mattis. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Vitae et leo duis ut. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Faucibus nisl tincidunt eget nullam non nisi. Id interdum velit laoreet id donec ultrices. Posuere ac ut consequat semper viverra. Tincidunt dui ut ornare lectus sit amet. Urna id volutpat lacus laoreet non curabitur gravida. Gravida cum sociis natoque penatibus et magnis dis. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Ullamcorper morbi tincidunt ornare massa eget egestas. Pharetra vel turpis nunc eget. Scelerisque eu ultrices vitae auctor eu. Sed enim ut sem viverra aliquet eget.</p>
          <hr class="solid">
          <div class="zdjecieOpis">
            <p>Quis imperdiet massa tincidunt nunc pulvinar sapien. Purus viverra accumsan in nisl nisi scelerisque. Nibh tellus molestie nunc non blandit massa enim nec dui. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Neque aliquam vestibulum morbi blandit. Vivamus at augue eget arcu dictum varius duis. Auctor urna nunc id cursus. Elit scelerisque mauris pellentesque pulvinar pellentesque. Augue ut lectus arcu bibendum at varius vel pharetra. Urna porttitor rhoncus dolor purus non enim praesent. A pellentesque sit amet porttitor eget. Sociis natoque penatibus et magnis dis parturient montes nascetur. Sed arcu non odio euismod lacinia. Quam vulputate dignissim suspendisse in est ante. Volutpat odio facilisis mauris sit amet massa. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Elementum nisi quis eleifend quam adipiscing vitae proin.</p>
            <img src="../assets/afryka1.jpg">
          </div>
          <hr class="solid">
          <p>Problem wody w Afryce. Jak wiemy, ludy pustyni od zawsze borykały się z problem wody, a raczej jej braku. Przez setki tysięcy lat, gepardy i inne rośliny występujące na pustyniach afryki, próbowały wymyśleć jak wytworzyć wodę, bez wody, lub ewentualnie z piasku (druga opcja była niechętnie podejmowana, ponieważ zakłali że piasek jest skończony, więc kiedyś wody by zabrakło). W końcu jednak ktoś wytworzył piasek, co okreslił poprzez bardzo prosty wzór:
            <math>
            H(s) = ∫<sub>0</sub><sup>∞</sup> e<sup>-st</sup> h(t) dt
            </math>
            Odkrycie to sprawiło, że ludzie zaćmionego słońca ponownie zaczęli wierzyć, że uda im się zdobyć wodę bez wody - a dokładniej - z piasku. Poniżej zdjęcie, przedstawiające jednego z najbardziej znanych naukowców piaskowatego kontynentu - Nowom 'an Noc'ry
         </p>
          <hr class="solid">
          <div class="zdjecieOpis">
            <img src="../assets/afryka2.jpg">
            <p>Quis imperdiet massa tincidunt nunc pulvinar sapien. Purus viverra accumsan in nisl nisi scelerisque. Nibh tellus molestie nunc non blandit massa enim nec dui. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Neque aliquam vestibulum morbi blandit. Vivamus at augue eget arcu dictum varius duis. Auctor urna nunc id cursus. Elit scelerisque mauris pellentesque pulvinar pellentesque. Augue ut lectus arcu bibendum at varius vel pharetra. Urna porttitor rhoncus dolor purus non enim praesent. A pellentesque sit amet porttitor eget. Sociis natoque penatibus et magnis dis parturient montes nascetur. Sed arcu non odio euismod lacinia. Quam vulputate dignissim suspendisse in est ante. Volutpat odio facilisis mauris sit amet massa. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Elementum nisi quis eleifend quam adipiscing vitae proin.</p>
          </div>
        </div>
        <hr class="solid">
        <div class="stopka">
          16
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StronaPodr',
  props: {
  },
  data () {
    return {
    }
  }
}

</script>

<style scoped lang="scss">
.stronaPodr{
  max-width: 75em;
  margin-left: auto;
  margin-right: auto;
}
.calosc{
  padding: 1em;
  width: 100%;
}
.open-book {
    background: #fff;
    box-shadow: rgba(0,0,0,0.5) 0 1em 3em;
    color: #000;
    padding: 2em;
}
.strona{
  padding:1em;
}
.strona p{
  text-align: justify;
  height:15%;
  padding:1vw;
}
.strona img{
  display:flex;
  position:static;
  width:50%;
  padding:1vw;
}
.myheader .tekst{
  font-size: 2rem;
  position:static;
  text-decoration: 0;
  color:rgb(121, 121, 121);
  font-family: Zen Kurenaido;
}
.zdjecieOpis{
  display:inline-flex;
  flex-wrap: wrap;
}
.zdjecieOpis p{
  float:right;
  display: block;
  width:50%;
}
.zdjecieOpis img{
  width:50%;
  float:left;
}
@media only screen and (max-width: 1250px) {
  .zdjecieOpis{
    padding:1vw;
    display:inline-flexbox;
    flex-wrap: wrap;
  }
  .zdjecieOpis p{
    width:100%;
  }
  .zdjecieOpis img{
    width:100%;
    float:left;
  }
}

</style>
