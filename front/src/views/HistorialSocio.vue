<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #263555;" >
    <a class="navbar-brand" href="#">
        <img src="../assets/images/logo.png" width="250" height="120" alt="" style="border-radius:20px; margin-left: 50px; ">
    </a>
    
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item ">
            <a class="nav-link" href="/historialsocio">HISTORIAL SOCIO</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/historialreservas">HISTORIAL RESERVAS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/historialcotizaciones">HISTORIAL COTIZACIONES</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click="cerrarsesion()">CERRAR SESION</a>
        </li>
        </ul>
    </div>
   </nav>
  <div class="main">
        <div class="content">
          <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="calories"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>SOCIOS</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ attrs }">
                          <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            onclick="location.href='/RegistroSocio'"
                          >
                            CREAR SOCIO
                          </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                                      <v-col cols="12" sm="6" md="4">
                                          <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="4">
                                          <v-text-field v-model="editedItem.apellido" label="Apellido"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="4">
                                          <v-text-field v-model="editedItem.telefono" label="Telefono"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="4">
                                          <v-text-field v-model="editedItem.correo" label="Correo"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="4">
                                          <v-text-field v-model="editedItem.documento" label="Documento"></v-text-field>
                                      </v-col>
                                      <v-col cols="12" sm="6" md="4">
                                          <v-text-field v-model="editedItem.contraseña" label="Contraseña"></v-text-field>
                                      </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancelar
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="editarSocio(editedItem)"> Actualizar </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  
                  <v-card>
                    <v-card-title class="text-h5"
                      >¿Quiere eliminar este evento?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >No</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                        >Si</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
            <v-btn @click="editItem(item._id)"
                     dark
                     small
                     color="cyan"
                    >
                    <v-icon >
                        mdi-pencil
                    </v-icon>
                    </v-btn>
                    <v-btn @click="eliminarSocio(item._id)"
                     dark
                     small
                     color="red"
                    >
                    <v-icon>
                        mdi-delete
                    </v-icon>
                    </v-btn>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize"> Reset </v-btn>
            </template>
          </v-data-table>
        </div>
  </div>

</div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
          text: 'No. Socio',
                align: 'start',
                sortable: false,
                value: '_id',
            },
            {
                text: 'Nombre',
                value: 'nombre'
            },
            {
                text: 'Apellido',
                value: 'apellido'
            },
            {
                text: 'Telefono',
                value: 'telefono'
            },
            {
                text: 'Correo',
                value: 'correo'
            },
            {
                text: 'Documento',
                value: 'documento',

            },
            {
                text: 'Contraseña',
                value: 'contraseña',

            },
            
            {
                text: 'Editar/Eliminar',
                value: 'actions',
                sortable: false
             },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: [],
    defaultItem: {
      
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item"
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
    this.listarSocios();
  },

  methods: {
    initialize() {
      
    },

    editItem(item) {      
      this.dialog = true
      console.log(item);
      this.axios.get(`buscar-socio/${item}`)
      .then(res =>{
        this.editedItem=res.data
      })
    },


    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete();
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    listarSocios(){
      this.axios.get(`socios`)
      .then((response)=>{
        this.desserts=response.data;
      })
      .catch((e)=>{
        console.log('error'+e)
      })
    },
    
    editarSocio(item){
      this.axios.put(`/actualizar-socio/${item._id}`,item)
      .then(res =>{

        this.$swal('success',
        'Socio Modificado con Exito!',
        'success');
        this.close();
         const index= this.desserts.findIndex(n=>n._id===res.data._id)
                           
                this.desserts[index].nombre=res.data.nombre;
                this.desserts[index].apellido=res.data.apellido;
                this.desserts[index].telefono=res.data.telefono;
                this.desserts[index].correo=res.data.correo;
                this.desserts[index].documento=res.data.documento;
                this.desserts[index].contraseña=res.data.contraseña;
      }) .catch(e=>{
        console.log(e.response)
      })
    
    },
    eliminarSocio(id){
            console.log(id);
            this.axios.delete(`eliminar-socio/${id}`)
            .then(res=>{
                this.$swal('Ok',
                'Socio Eliminado con Exito',
                'success');
                
                const index = this.desserts.findIndex(item=>item._id===res.data._id)
                this.desserts.splice(index,1);
                this.editedIndex=this.desserts.indexOf(item);
                this.editedItem=Object.assign({},item)
            }).catch(e=>{
                console.log(e.response)
            })
    },
    cerrarsesion(){
    window.localStorage.removeItem('autenticacion');
    this.$router.push({path: '/'});
    },
  }
    
};

import "@/assets/css/historial.css";

</script>