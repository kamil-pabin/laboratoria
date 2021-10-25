<template>
  <div class="stronaPodr">
    <div class="dwieStrony">
      <div class="tloStrony">
        <div class="mt-4 stronka">
          <div class="goraStrony">
          <h4>BIEDNE KRAJE AFRYKI</h4>
          <b-card img-src="https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0001/89/5d8f242634a681dd144bcc8cb2a0131023256db9.jpeg" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunetiam erat velit. Aliquam sem et tortor consequat. Quis vel eros donec ac. Proin sagittis nisl rhoncus mattis rhoncus urna. Velit egestas dui id ornare arcu odio ut. Et malesuada fames ac turpis egestas integer. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Non quam lacus suspendisse faucibus interdum. Neque volutpat ac tincidunt vitae. Libero justo laoreet sit amet cursus sit amet dictum.
            </b-card-text>
          </b-card>
          </div>
          <b-card class="dolStrony" img-src="https://www.rejsy.pl/sites/default/files/reservationcarers/afryka.jpg" img-alt="Card image" img-right>
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunetiam erat velit. Aliquam sem et tortor consequat. Quis vel eros donec ac. Proin sagittis nisl rhoncus mattis rhoncus urna. Velit egestas dui id ornare arcu odio ut. Et malesuada fames ac turpis egestas integer. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Non quam lacus suspendisse faucibus interdum. Neque volutpat ac tincidunt vitae. Libero justo laoreet sit amet cursus sit amet dictum.
            </b-card-text>
          </b-card>
          <div id="stronaNumLewoM">
            Strona 1
          </div>
        </div>
      </div>
      <div class="tloStrony">
        <div class="mt-4 stronka">
          <div class="goraStrony">
          <h4>JAK BYŁO BEZ WODY CZ.1</h4>
            <b-card img-src="https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0001/89/5d8f242634a681dd144bcc8cb2a0131023256db9.jpeg" img-alt="Card image" img-right class="mb-3">
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunetiam erat velit. Aliquam sem et tortor consequat. Quis vel eros donec ac. Proin sagittis nisl rhoncus mattis rhoncus urna. Velit egestas dui id ornare arcu odio ut. Et malesuada fames ac turpis egestas integer. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Non quam lacus suspendisse faucibus interdum. Neque volutpat ac tincidunt vitae. Libero justo laoreet sit amet cursus sit amet dictum.
            </b-card-text>
          </b-card>
          </div>
          <b-card class="dolStrony" img-src="https://www.rejsy.pl/sites/default/files/reservationcarers/afryka.jpg" img-alt="Card image" img-right>
            <b-table striped hover :items="items"></b-table>
          </b-card>
          <div id="stronaNumPrawoM">
            Strona 2
          </div>
        </div>
      </div>
    </div>
    <div class="stopkaStrony">
      <div id="stronaNumLewo">
        Strona 1
      </div>
      <div id="stronaNumPrawo">
        Strona 2
      </div>
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
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media only screen and (min-width: 1350px) {
  img{
    width: 200px;
    height: 300px;
  }
  .dolStrony{
    height: 40%;
    margin-bottom:7%;
  }
  .dwieStrony{
    display:inline-flex;
  }
  .goraStrony{
    height: 40%;
    margin-bottom:7%;
  }
  .stopkaStrony{
    display:flex;
    width:100%;
    height: auto;
    justify-content: space-between;
    padding-left:5%;
    padding-right:5%;
  }
  .stronaPodr{
    display:inline-flexbox;
    max-width:100%;
    font-family: 'Dancing Script', cursive;
  }
  .stronaPodr img{
    object-fit: fill;
    margin-left: auto;
    margin-right: auto;
    transform: scaleX(-1);
  }
  .stronka{
    max-height:100%;
    padding: 0;
  }
  .tloStrony{
    padding:2%;
    background: rgb(255, 250, 232);
    width:50%;
    font-size: 1.1rem;
    display:flexbox;
    align-content: center;
    margin-top:0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    border-left: 20px solid rgba(0, 0, 0, 0.719);
    border-right: 20px solid rgba(0, 0, 0, 0.719);
  }
  #stronaNumLewoM{
    visibility: hidden;
  }
  #stronaNumPrawoM{
    visibility: hidden;
  }
}
@media only screen and (max-width: 1350px) {
  img{
    width: 200px;
    height: 250px;
  }
  .stronaPodr{
    display:block;
  }
  .stronaPodr img{
    max-width:25%;
    display: inline-flexbox;
    object-fit:cover;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    transform: scaleX(-1);
  }
  .tloStrony{
    padding:2%;
    background: rgb(255, 250, 232);
    width:auto;
    display:block;
    align-content: center;
    margin-top:0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    border-top: 20px solid rgba(0, 0, 0, 0.37);
    border-bottom: 20px solid rgba(0, 0, 0, 0.356);
    font-family: 'Dancing Script', cursive;
  }
  #stronaNumLewo{
    visibility: hidden;
  }
  #stronaNumPrawo{
    visibility: hidden;
  }
}
</style>
