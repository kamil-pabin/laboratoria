<template>
  <div class="lab2">
    <div class="opisZadania">
       <h1>Laboratorium 2 - Bootstrap i Javascript</h1>
       <div id="newY">
         <div id="tlo">
            <img id='picc' src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flaga_z_godlem_Rzeczypospolitej_Polskiej.PNG" width="50%">
         </div>
       </div>
       <div class="obiekt">
         <div>
           <b-button-group>
            <b-button class="bbutton" @click="backRed">Czerwone Tło</b-button>
            <b-button class="bbutton" @click="backPink">Różowe Tło</b-button>
            <b-button class="bbutton" variant="success" @click="backRandom">Losuj tło</b-button>
            <b-button class="bbutton" variant="danger" @click="backRes">Reset Tło</b-button>
          </b-button-group>
         </div>
         <div>
          <b-button-group>
            <b-button class="bbutton" @click="showToday">Pokaz date</b-button>
            <b-button class="bbutton" variant="danger" @click="hideToday">Usun date</b-button>
          </b-button-group>
         </div>
         <div>
           <b-button-group>
            <b-button class="bbutton" @click="showFlag">Pokaz flage</b-button>
            <b-button class="bbutton" variant="danger" @click="hideFlag">Usun Flage</b-button>
          </b-button-group>
         </div>
        <div>
          <b-button-group>
            <b-button class="bbutton" @click="enableFlag">Wlacz flage</b-button>
            <b-button class="bbutton" variant="danger" @click="disableFlag">Wylacz Flage</b-button>
          </b-button-group>
        </div>
          <div>
            <b-button-group>
              <b-button class="bbutton" @click="rotFlag">Obroc flage</b-button>
              <b-button class="bbutton" variant="danger" @click="resRotFlag">Resetuj obrot Flagi</b-button>
            </b-button-group>
          </div>
       </div>
       <p>Na obu stronach znajduje się dużo funkcjonalnego Javascriptu, jak i elementy z Bootstrapa. Samych zmian dostępnych przez javascript jest spokojnie ponad 20, m.in. zmiana tła, chowanie żarówek, chowanie elementów tekstu, uruchamianie skryptów php, zmiana prędkości sekundy, pokazywanie podpowiedzi, zmiana widocznego elementu, postępujący pasek itd.  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Laboratorium2',
  components: {
  },
  methods: {
    // zabawa kolorem tla diva
    backRed: function () {
      document.getElementById('newY').style.background = 'red'
    },
    backPink: function () {
      document.getElementById('newY').style.background = 'pink'
    },
    backRandom: function () {
      var x = Math.floor(Math.random() * 256)
      var y = Math.floor(Math.random() * 256)
      var z = Math.floor(Math.random() * 256)
      var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')'
      document.getElementById('newY').style.background = bgColor
    },
    backRes: function () {
      document.getElementById('newY').style.background = 'transparent'
    },
    // dodawanie calkiem nowego elementu
    showToday: function () {
      var today = new Date()
      const para = document.createElement('p')
      para.setAttribute('id', 'para-1')
      const node = document.createTextNode(today)
      para.appendChild(node)
      const element = document.getElementById('tlo')
      element.appendChild(para)
    },
    // usuwanie tego elementu po id
    hideToday: function () {
      const elmnt = document.getElementById('para-1')
      elmnt.remove()
    },
    showFlag: function () {
      document.getElementById('picc').style.visibility = 'visible'
    },
    hideFlag: function () {
      document.getElementById('picc').style.visibility = 'hidden'
    },
    enableFlag: function () {
      document.getElementById('picc').style.display = 'block'
    },
    disableFlag: function () {
      document.getElementById('picc').style.display = 'none'
    },
    rotFlag: function () {
      document.getElementById('picc').style.transform = 'rotate(180deg)'
    },
    resRotFlag: function () {
      document.getElementById('picc').style.transform = 'rotate(0deg)'
    }

  },
  data () {
    return {
      tloRed: false,
      values: {
      }
    }
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
.obiekt{
  padding:1px;
  display:flexbox;
}
.obiekt .bbutton{
  margin:2px;
}
.opisZadania{
  font-family: open-sans;
  font-size:1.3rem;
}
#newY{
  display:block;
  margin:auto;
  height:50vh;
  width:100%;
  padding:auto;
  background:blue;
}
#tlo{
  margin:auto;
  height:100%;
  width:50%;
  background:transparent;
  display:flexbox;
}
#tlo img{
  margin:auto;
}
#flaga{
  height:50%;
  width:60%;
}
</style>
