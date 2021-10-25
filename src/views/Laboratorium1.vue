<template>
  <div class="lab1">
    <b-tabs content-class="mt-3" class="tabA">
      <b-tab class="tabA" title="List" active>
        <div>
          <h2>List</h2>
          <ListP v-show="isListHiddenStep == 0"
          :imieNazwisko=values.imieNazw
          :ulicaNumer=values.uliNumer
          :kodPocztowy=values.kodPoczt
          :miasto=values.miasto
          :dataDnia=values.dataDnia
          :tytul=values.tytul
          :par1=values.par1
          :par2=values.par2
          :par3=values.par3
          :pozdrowienie=values.pzdr
          >
          </ListP>
          <ListP v-show="przykLis == 1"
          imieNazwisko="Kamil Pabin"
          ulicaNumer="Śmidowicza 69"
          kodPocztowy="12-345"
          miasto="Gdynia"
          dataDnia="27-10-2011"
          tytul="Lorem Ipsum"
          par1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Purus sit amet volutpat consequat mauris nunc congue nisi. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Quis lectus nulla at volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Aliquam sem et tortor consequat. Quis vel eros donec ac. Proin sagittis nisl rhoncus mattis rhoncus urna. Velit egestas dui id ornare arcu odio ut. Et malesuada fames ac turpis egestas integer. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Non quam lacus suspendisse faucibus interdum. Neque volutpat ac tincidunt vitae. Libero justo laoreet sit amet cursus sit amet dictum."
          par2="Mauris rhoncus aenean vel elit scelerisque mauris. Libero enim sed faucibus turpis in. Lectus magna fringilla urna porttitor rhoncus dolor purus non. A scelerisque purus semper eget duis at tellus at. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Massa placerat duis ultricies lacus sed turpis. A scelerisque purus semper eget duis at. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Auctor urna nunc id cursus metus aliquam eleifend mi in. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Elit eget gravida cum sociis natoque. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Vitae congue mauris rhoncus aenean vel elit scelerisque."
          par3="Arcu dui vivamus arcu felis bibendum ut. Libero justo laoreet sit amet cursus sit. Eget nullam non nisi est sit. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Venenatis cras sed felis eget velit aliquet sagittis. Molestie nunc non blandit massa enim nec dui nunc. Urna molestie at elementum eu facilisis sed odio. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Lacus vel facilisis volutpat est velit egestas dui id. Aliquam sem et tortor consequat id porta. Molestie a iaculis at erat pellentesque adipiscing commodo. Sit amet consectetur adipiscing elit ut. Congue eu consequat ac felis donec et odio. In hac habitasse platea dictumst vestibulum. Posuere sollicitudin aliquam ultrices sagittis. Ut porttitor leo a diam. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et."
          pozdrowienie="Z poważaniem"
          >
          </ListP>
          <div class="napiszList" v-show="isListHiddenStep == 2 && przykLis == 0 ">
            <FormulateForm v-model="values" :schema="schemaList" id="formList">
            </FormulateForm>
          </div>
          <div class="napiszList" v-show="isListHiddenStep == 1 && przykLis == 0 ">
            <FormulateForm v-model="values" :schema="schemaList2" id="formList2">
            </FormulateForm>
          </div>
          <div>
            <b-button variant="outline-danger" class="m-1" v-if="isListHiddenStep > -1 && isListHiddenStep < 2 && przykLis == 0 ">
              <div v-on:click="isListHiddenStep += 1">Wstecz</div>
            </b-button>
            <b-button variant="outline-dark" class="m-1" v-if="isListHiddenStep > 0 && przykLis == 0">
              <div v-on:click="isListHiddenStep -= 1">Dalej</div>
            </b-button>
            <b-button variant="success" class="m-1" v-if="przykLis == 0 && isListHiddenStep > 0 ">
              <div v-on:click="przykLis = !przykLis">Przykladowy List</div>
            </b-button>
            <b-button variant="warning" class="m-1" v-if="przykLis == 1">
              <div v-on:click="przykLis = !przykLis">Powrót</div>
            </b-button>
          </div>
        </div>
      </b-tab>
      <b-tab class="tabB" title="Strona z podrecznika">
        <h2> Strona z podręcznika</h2>
        <StronaPodr />
      </b-tab>
      <b-tab class="tabC" title="Strona z formularzem">
        <div id="formularz">
          <h2>Formularz w Vue.js</h2>
          <FormulateForm v-model="values" :schema="schema">
          </FormulateForm>
        </div>
        <div id="odpowiedzi" class="h4">
          <b-button v-on:click="isHiddenOdp = !isHiddenOdp" variant="dark" class="m-1">
            <div v-if="isHiddenOdp">Pokaż</div><div v-if="!isHiddenOdp">Ukryj</div>
          </b-button>
          <div v-if="!isHiddenOdp" id="odp">
            <p> Imię: <a> {{ values.name }} </a> </p>
            <p> Email: <a> {{ values.email }} </a> </p>
            <p> Numer albumu: <a> {{ values.student_id }} </a> </p>
            <p> Kierunek: <a> {{ values.kierunek }} </a> </p>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ListP from '../components/ListP.vue'
import StronaPodr from '../components/StronaPodr.vue'

export default {
  name: 'Laboratorium1',
  components: { ListP, StronaPodr },
  methods: {
  },
  data () {
    return {
      isHiddenOdp: 'false',
      isListHiddenStep: 2,
      isListHidden: 'true',
      przykLis: 0,
      values: {
      },
      schema: [
        {
          label: 'Twoje imię',
          name: 'name',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          label: 'Twój adres email',
          name: 'email',
          help: 'Użyj adresu otrzymanego od uczelni',
          validation: 'bail|required|email|ends_with:edu.amw.gdynia.pl',
          'validation-messages': {
            email: 'To nie jest poprawny adres email',
            required: 'To pole jest wymagane',
            ends_with:
              'Pamiętaj że nasz adres kończy się na @edu.amw.gdynia.pl'
          }
        },
        {
          label: 'Numer albumu',
          name: 'student_id',
          help: 'Twój numer albumu (np. 22637)',
          validation: '^required|matches:/^[\\d]{5}$/',
          'validation-name': 'Student ID',
          'validation-messages': {
            matches: 'To nie jest poprawny numer albumu',
            required: 'To pole jest wymagane'
          }
        },
        {
          type: 'radio',
          name: 'kierunek',
          label: 'Na jakim kierunku studiujesz?',
          options: [
            { value: 'Informatyka', id: 'Informatyka', label: 'Informatyka' },
            { value: 'Nawigacja', id: 'Nawigacja', label: 'Nawigacja' },
            { value: 'GryIZabawy', id: 'GryIZabawy', label: 'Gry i Zabawy' }
          ],
          'validation-name': 'Kierunek',
          validation: 'required'
        }
      ],
      schemaList: [
        {
          id: 'imieNazw',
          label: 'Twoje Imię i Nazwisko',
          name: 'imieNazw',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          label: 'Ulica i numer',
          name: 'uliNumer',
          help: 'Wprowadź ulicę oraz numer budynku',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          label: 'Kod pocztowy',
          name: 'kodPoczt',
          help: 'Np. 12-345',
          validation: '^required|matches:/^[\\d]{2}-[\\d]{3}$/',
          'validation-messages': {
            required: 'To pole jest wymagane',
            matches: 'To nie jest poprawny kod pocztowy'
          }
        },
        {
          label: 'Miasto',
          name: 'miasto',
          help: 'Wprowadź miasto',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          type: 'date',
          label: 'Data',
          name: 'dataDnia',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        }
      ],
      schemaList2: [
        {
          label: 'Tytuł',
          name: 'tytuT',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          type: 'textarea',
          label: 'Pierwszy paragraf',
          name: 'par1',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          type: 'textarea',
          label: 'Drugi paragraf',
          name: 'par2',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          type: 'textarea',
          label: 'Trzeci paragraf',
          name: 'par3',
          validation: 'required',
          'validation-messages': {
            required: 'To pole jest wymagane'
          }
        },
        {
          type: 'select',
          name: 'pzdr',
          label: 'Wybierz pozdrowienie',
          options: [
            { value: 'Z poważaniem,', id: 'powaz', label: 'Z poważaniem,' },
            { value: 'Wszystkiego dobrego!', id: 'wszDbr', label: 'Wszystkiego dobrego!' },
            { value: 'Całuję,', id: 'cal', label: 'Całuję,' }
          ],
          validation: 'required'
        }
      ]
    }
  }
}
</script>

<style>
.formulate-input{
  margin-right: auto;
  margin-left: auto;
}
.formulate-input-wrapper{
  margin-right: auto;
  margin-left: auto;
  display:inline-block;
}
.lab1 a {
  color: black;
  font-family: Zen Kurenaido;
  font-weight: 700;
  text-transform: uppercase;
}
.lab1:hover a {
  color: black;
}
.napiszList{
  text-align: left;
}
.napiszList .formulate-input{
  width:50%;
  text-align: left;
}
.napiszList .formulate-input-wrapper{
  width: 100%;
  height: 100%;
  text-align: left;
}
.napiszList .formulate-input-label{
  width: 100%;
  text-align: center;
  font-weight: 700;
}
.napiszList .formulate-input-element{
  max-width:100%;
}
.tabB{
  color: black;
  padding:1%;
  background: cadetblue;
  display:flex;
  margin: auto;
  text-align: center;
  width: 85%;
}
.tabC {
  color: black;
  padding:1%;
  display:flex;
  margin: auto;
  width: 100%;
  text-align:left;
}
#formularz{
  width:70%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
#odp{
  text-align:left;
  width: 100%;
}
#odpowiedzi{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color:black;
  width:50%;
  padding:1%;
}
#odpowiedzi a{
  color:rgb(100, 0, 0);
  font-weight: 900;
}
</style>
