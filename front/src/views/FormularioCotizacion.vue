<template>
<div>

<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #263555;" >
  <a class="navbar-brand" href="#">
    <img src="../assets/images/logo.png" width="250" height="120" alt="" style="border-radius:20px; margin-left: 50px; ">
  </a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <a class="nav-link" href="/cotizacion">COTIZAR</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="/reserva">RESERVAR</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/historial">HISTORIAL</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/micuenta">MI CUENTA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="cerrarsesion()">CERRAR SESION</a>
      </li>
    </ul>
  </div>
</nav>


<v-container >
  <div class="">
        <h3 style="padding-top: 20px">COTICE AQUÍ</h3>
          <div class="content1" >
            <v-form @submit.prevent="agregarCotizacion()">
              <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="atributos.nombre"
                  :counter="50"
                  label="Nombre"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="atributos.apellido"
                  :counter="50"
                  label="Apellido"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              </v-row>

              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="atributos.correo"
                     label="ej: absjd@example.com"
                     type="email"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="atributos.telefono"
                    label="Telefono"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-select
                    v-model="atributos.tipo_evento"
                    :items="tipoevento1"
                    label="Seleccione Tipo de evento"
                  ></v-select>
                </v-col>
                
                <v-col
                  cols="12"
                  md="6"
                >

                  <v-text-field
                    v-model="atributos.num_personas"
                    label="Numero de personas"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-select
                v-model="atributos.area"
                :items="area1"
                label="Seleccione Salòn"
                required
              ></v-select>
          
               <v-row>
                 <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                v-model="atributos.fecha" 
                type="date"
                label="Fecha"
                  required
                ></v-text-field>
                </v-col>

                 <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                  v-model="atributos.hora"
                  type="time"
                  label="Hora"
                  required
                ></v-text-field>
                 </v-col>
               </v-row>

               <v-row>
                 <v-col
                  cols="12"
                  md="4"
                >
                  <p>COMIDA</p>
                  <v-checkbox
                    v-model="atributos.comida"
                    :items="comida1"
                    label="Buffet"
                    value="Buffet"                              
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.comida"
                    :items="comida1"
                    label="Servicio Americano" 
                    value= "Servicio Americano"                            
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.comida"
                    :items="comida1"
                    label="Bocadillos"    
                    value="Bocadillos"                          
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.comida"
                    :items="comida1"
                    label="Cathering" 
                    value="Cathering"                            
                  ></v-checkbox>
                 </v-col>

                 <v-col
                  cols="12"
                  md="4"
                >
                <p>BEBIDAS</p>
                  <v-checkbox
                    v-model="atributos.bebidas"
                    :items="bebidas1"
                    label="Vino Espumoso"
                    value="Vino Espumoso"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.bebidas"
                    :items="bebidas1"
                    label="Wisky"
                    value="Wisky"    
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.bebidas"
                    :items="bebidas1"
                    label="Tequila"
                    value="Tequila"          
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.bebidas"
                    :items="bebidas1"
                    label="Agua"
                    value="Agua"          
                  ></v-checkbox>
                 </v-col>

                 <v-col
                  cols="12"
                  md="4"
                >
                <p>MUSICA</p>
                  <v-checkbox
                    v-model="atributos.grupo_musical"
                    :items="musica"
                    label="DJ"
                    value="DJ"          
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.grupo_musical"
                    :items="musica"
                    label="Parranda Vallenata"
                    value="Parraanda Vallenata"          
                  ></v-checkbox>
                  <v-checkbox
                    v-model="atributos.grupo_musical"
                    :items="musica"
                    label="Serenata"
                    value="Serenata"          
                  ></v-checkbox>
                 </v-col>

                 <v-col>
                  <v-textarea
                    v-model="atributos.adicionales"
                    label="Adicionales"
                    required
                  ></v-textarea>
                 </v-col>
              </v-row>

              <div class="button">
                  <input type="submit" value="Cotizar">
              </div>
            </v-form>
              
          </div>
  </div>
  <div class="clear"></div>
</v-container>
</div>
</template>

<script>
export default {
  data(){
    return{
      Atributos: [],

      atributos: {
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        tipo_evento: " ",
        num_personas: "",
        area: "",
        fecha: "",
        hora: "",
        comida: "",
        bebidas: "",
        grupo_musical: "",
        adicionales: "",
      },
      tipoevento1:['Matrimonio', 'Grado', 'Cumpleaños','Reunión empresarial'],
      area1:['Salon presidencial', 'Salon gourtmet','Piscina','Terraza parilla','Terraza futbol','Parque'],
      hora1: ['13:00','14:00','15:00','16:00','17:00'],
      comida1: ['Buffet','Servicio Americano','Bocadillos','Cathering'],
      bebidas1: ['Vino Espumoso','Wisky','Tequila','Agua','Coctel'],
      musica:['DJ','Parranda Vallenata','Serenatas']
    }
  },
  methods: {
      agregarCotizacion(){
        console.log(this.atributos);
        if(!this.atributos.nombre){
          this.$swal('Error',
                        'Falta nombre del socio',
                        'error' );
                 
        }
        else if(!this.atributos.apellido){
          this.$swal('Error',
                        'Falta apellido del socio',
                        'error' );
        }
        else if(!this.atributos.correo){
          this.$swal('Error',
                        'Falta correo del socio',
                        'error' );
        }
        else if(!this.atributos.telefono){
          this.$swal('Error',
                        'Falta telefono del socio',
                        'error' );
        }
        else {

          this.axios
          .post('/nueva-cotizacion',this.atributos)
          .then((res)=>{
            this.Atributos.push(res.data);
            this.$swal('success!',
                        'Cotizacion enviada con exito, pronto se pondran en contacto con usted',
                        'success' );
            this.atributos.nombre="";
            this.atributos.apellido="";
            this.atributos.correo="";
            this.atributos.telefono="";
            this.atributos.tipo_evento="";
            this.atributos.num_personas="";
            this.atributos.area="";
            this.atributos.fecha="";
            this.atributos.hora="";
            this.atributos.comida="";
            this.atributos.bebidas="";
            this.atributos.grupo_musical="";
            this.atributos.adicionales="";
          })
          .catch((e)=>{
          console.log(e.response);
          })
        }
      }
    },
    cerrarsesion(){
        window.localStorage.removeItem('autenticacion');
        this.$router.push({path: '/'});
    }
  
}

import "@/assets/css/reserva.css";
</script>

<style scoped>
#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

</style>