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
    <div class="main">
        <div class="content">
            <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">

                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>CONSULTAR RESERVAS</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="850px">
                           
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                           
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.nombre" type="text" label="Nombre"></v-text-field>
                                            </v-col>
                                        
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.telefono" type="number" label="Telefono"></v-text-field>
                                            </v-col>
                                            
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.tipo_evento" type="text" label="Tipo Evento"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.num_personas" type="number" label="Numero Personas"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.area" label="Area "></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field type="date" v-model="editedItem.fecha"  label="Fecha" ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.hora" type="time"  label="Hora"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.comida" label="Comida"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.bebidas" label="Bebidas"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.grupo_musical" label="Grupo Musical"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.adicionales" label="Adicionales"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">
                                        Cancelar
                                    </v-btn>
                                    <v-btn color="blue darken-1" text @click="editarEventos(editedItem)">
                                        Actualizar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="400px">
                            <v-card>
                                <v-card-title class="text-h5">¿Quiere eliminar este evento?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">No</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">Sí</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{item}">
                    <v-btn @click="editItem(item._id)"
                     dark
                     small
                     color="cyan"
                    >
                    <v-icon >
                        mdi-pencil
                    </v-icon>
                    </v-btn>
                    <!-- <v-icon small @click="eliminarEventos(item._id)">
                        mdi-delete
                    </v-icon> -->
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
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
        headers: [{
                text: 'No. Reserva',
                align: 'start',
                sortable: false,
                value: '_id',
            },
            {
                text: 'Nombre',
                value: 'nombre'
            },
            {
                text: 'Teléfono',
                value: 'telefono'
            },
            {
                text: 'Tipo de evento',
                value: 'tipo_evento'
            },
            {
                text: 'Fecha',
                value: 'fecha',

            },
            {
                text: 'Hora',
                value: 'hora',
                type: Date

            },
            {
                text: 'Editar',
                value: 'actions',
                sortable: false
            },
         
        ],
        
        desserts: [],
        editedIndex: -1,
        editedItem: [],
        defaultItem:{

        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'EDITAR RESERVA' : 'Edit Item'
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
        this.listarEventos();
    },

    methods: {
        initialize() {
            
        },

        editItem(item) {
            this.dialog = true
            console.log(item);
            this.axios.get(`buscar-reserva/${item}`)
            .then(res=>{
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
            this.closeDelete()
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

        listarEventos(){
            this.axios.get('reservas')
            .then((response)=>{
                this.desserts=response.data;
            })
            .catch((e)=>{
                console.log('error'+e)
            })
        },

        editarEventos(item){
             
            this.axios.put(`/actualizar-reserva/${item._id}`, item)
            .then(res=>{

                this.$swal('success',
                'Evento Modificado con Exito!',
                'success');
                this.close();
                const index=this.desserts.findIndex(n=>n._id===res.data._id)
                this.desserts[index].nombre=res.data.nombre;
                this.desserts[index].telefono=res.data.telefono;
                this.desserts[index].tipo_evento=res.data.tipo_evento;
                this.desserts[index].fecha=res.data.fecha;
                this.desserts[index].hora=res.data.hora;

            }) .catch(e=>{
            console.log(e.response)
        })
        },

        // eliminarEventos(id){
        //     console.log(id);
        //     this.axios.delete(`eliminar-reserva/${id}`)
        //     .then(res=>{
        //         this.$swal('success',
        //           'Reserva eliminada con Exito!',
        //           'success');
                
        //         const index = this.desserts.findIndex(item=>item._id===res.data._id)
        //         this.desserts.splice(index,1);
        //         this.editedIndex=this.desserts.indexOf(item);
        //         this.editedItem=Object.assign({},item)
        //     }).catch(e=>{
        //         console.log(e.response)
        //     })
        // },
         buscarReserva(){
        axios.get(`http://localhost:3000/api/buscar-reserva/${this.desserts._id}`)
        .then(res => {
          if (res.data !== null){
             this.desserts = res.data
          }else{
             this.$swal.fire(
                'Reserva no encontrada',
                        'No existe el evento con el id ' + this.desserts._id,
                        'warning'
             )
          }
        });
         },
         cerrarsesion(){
        window.localStorage.removeItem('autenticacion');
        this.$router.push({path: '/'});
        }
    }
}
    
import "@/assets/css/historial.css";
</script>
