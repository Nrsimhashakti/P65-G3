<template>

<div>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #263555;" >
  <a class="navbar-brand" href="#">
    <img src="../assets/images/logo.png" width="250" height="120" alt="" style="border-radius:20px; margin-left: 50px; ">
  </a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/inicio">INICIO</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="/nosotros">NOSOTROS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/eventos">EVENTOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/galeria">GALERIA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">SOCIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/loginAdmin">LOGIN ADMIN</a>
      </li>
    </ul>
  </div>
</nav>



<div class="main">
  <div class="">
    <!-- SECCION CARRUSEL -->
    <v-carousel>
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>
    <!-- SECCION SERVICIOS -->
    <h3 class="h3">SERVICIOS</h3>
      <v-card
          class="white--text align-end"
          height="200px"
          >
              <v-row >
              <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                  class="d-flex"
              >
                  <v-card class="d-flex flex-column">
                  <v-img
                      :src="card.src"
                      class="white--text align-end" 
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                  >
                      
                  </v-img>
                  <v-card-text v-text="card.title"  class="flex-grow-1"></v-card-text>
                  
                  </v-card>
              </v-col>
              </v-row>
      </v-card>    
    <br>
    <br>
    <br>
    <br>
    <!-- SECCION NOTICIAS -->
    <div>
    <h3 class="h3" style="margin-top: 50px;">NOTICIAS</h3>
    
    <v-card
      height="500"
    >
      <v-carousel
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="560px"
      >
        <v-carousel-item
          v-for="(item,i) in items1"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >     
        </v-carousel-item>
      </v-carousel>
    </v-card>
    </div>
    <br>
    <br>
     <br>
    <!-- SECCION EQUIPO -->
    <div>
      <h3 class="h3">EQUIPO DE TRABAJO</h3>
        <v-row no-gutters>
          <v-col>
            <v-card
                class="pa-2"
                               
              >
                <v-card-title class="justify-center">
                  <span class="text-h6 font-weight-light">Felipe Andres Muñoz Mejia </span>
                </v-card-title>
                <v-card-text >
                  <div> Ingeniero Industrial</div>
                  <div>Cidad: Ibague, Tolima </div>
                  <div> Edad: 35 </div>
                  <div> "Sea como un niño, nunca deje de sorprenderse" :</div>
                </v-card-text> 
            </v-card>
          </v-col>
          <v-col order="12">
            <v-card
              class="pa-2"
                            
            >
              <v-card-title class="justify-center">
                  <span class="text-h6 font-weight-light">Sebastian Barragan Basto</span>
                </v-card-title>
                <v-card-text>
                  <div> Estudiante  de Ingenieria de sistemas </div>
                  <div>Ciudad: Bogota D.C </div>
                  <div> Edad: 19 </div>
                
                  <div> "Cuanto mas duramente trabajo, mas suerte tengo" </div>
                </v-card-text> 
            </v-card>
          </v-col>
          <v-col order="1">
            <v-card
              class="pa-2"
            >
              <v-card-title class="justify-center">
                  <span class="text-h6 font-weight-light">Laura Marcela Castañeda Perilla</span>
                </v-card-title>
              
                <v-card-text>
                  <div> Ingeniera de Sistemas </div> 
                  <div>Cidudad: Bogota D.C </div>
                  <div>Edad: 24 </div>
                  <div>"El exito se consigue con disciplina y perseverancia"</div>
                </v-card-text> 
            </v-card>
          </v-col>
        </v-row>
    </div>
  </div>
</div>


</div>
</template>


<script>
import Home from './Home.vue';
  export default {
  components: { Home },
    data () {
      return {
        items: [
          {
            src: require('../assets/images/slide1.jpg'),
          },
          {
            src: require('../assets/images/slide2.jpg'),
          },
          {
            src: require('../assets/images/slide3.jpg'),
          },
          {
            src: require('../assets/images/slide.jpg'),
          },
        ],
        cards: [
            { 
              title: 'Prestamos un servicio a los socios, para que  celebren con sus familiares y amigos una nueva etapa de su vida', 
              src: require('../assets/images/3.jpg'), flex: 4 
              },
            { 
              title: 'Nuestro club le brinda a los hijos de los socios eventos didacticos y recreativos.                          ', 
              src: require('../assets/images/8.jpg'), flex: 4 
              },
            { 
              title: 'El deporte despierta interés en la sociedad y por medio de su práctica se logra aprender sobre la convivencia y valores fundamentales.', 
              src: require('../assets/images/7.jpg'), flex: 4 
              },
        ],
        items1:[
          {
            src: require('../assets/images/noticia1.jpg'),
          },
          {
            src: require('../assets/images/noticia2.jpg'),
          },
          {
            src: require('../assets/images/Noticia3.jpg'),
          },
        ],    
        
      }
    },
  };

  
</script>

<style lang="scss" scoped>
.h3, h3 {
    font-size: 45px;
}




</style>