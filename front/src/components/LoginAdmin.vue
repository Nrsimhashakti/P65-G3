<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #263555;" >
  <a class="navbar-brand" href="#">
    <img src="../assets/images/logo.png" width="250" height="120" alt="" style="border-radius:20px; margin-left: 50px; ">
  </a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
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
        <a class="nav-link" href="/loginAdmin">LOGIN ADMIN</a>
      </li>
    </ul>
  </div>
</nav>

  <div class="main">
    <div class="content"> 
        <!--=======content================================-->
        <form action="inicio-logueo.html"> 
        
          <div class="wrapper fadeInDown">
            <div id="formContent">
              <!-- Tabs Titles -->
              <h3 class="active"> LOGIN ADMIN</h3>
              
          
              <!-- Icon -->
              <div class="fadeIn first">
                <img src="../assets/images/team.jpg" id="icon" alt="User Icon" />
              </div>
          
              <!-- Login Form -->
              <form @submit.prevent="buscarUser()" v-if="show">
                <input type="text" class="fadeIn second" name="login" placeholder="Usuario" v-model="form.user"> 
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="Contraseña" v-model="form.contraseña">
                
                <input type="submit" name="verificar" value="Ingresar" class="fadeIn fourth">
                
              </form>
          
            
          
            </div>
          </div>
        </form>

    <div class="clear"></div>

    </div>
  </div>
</div>
</template>

<script>
    export default {
      name:'Login',
      data(){
        return{
          form:{
            user: '',
            contraseña: '',
          },
          show: true,
          users: []
        }
      },  
      methods: {
        buscarUser(){
          console.log("se ejecuta la funcion buscar usuario")
          console.log(this.form);
            if(!this.form.user){
              this.$swal('Error',
                          'Falta Documento del socio',
                          'error' );
            }
            else if(!this.form.contraseña){
            this.$swal('Error',
                          'Falta contraseña',
                          'error' );
            }
            else{
              this.axios.get('empleados').then(res =>{
                console.log(this.users);
                this.users = res.data;
                this.$swal('Error!',
                          'Ingreso fallido',
                          'error' );
            
              this.users.forEach((value, index) =>{
                
                console.log(value.user);
                console.log(value.contraseña);
                if(this.form.user == value.user){
                  
                  console.log("Usuario si existe")
                  if(this.form.contraseña == value.contraseña){
                    
                    console.log("contraseña correta");
                    
                    window.localStorage.setItem('autenticacion','ok');
                    
                    this.$router.push({path: '/menuadmin'});
                      this.$swal('success!',
                        'Ingreso Exitoso',
                        'success' );
                  }
                }
              });
          })
          }

        },
        
      },
      beforeCreate() {
        var autenticacion = window.localStorage.getItem('autenticacion');
        console.log("Autenticacion esta "+autenticacion);
          if(autenticacion === 'ok'){
              this.$router.push({path: '/menuadmin'});
          }
      },

    }

   

    import '@/assets/css/login.css'
</script>