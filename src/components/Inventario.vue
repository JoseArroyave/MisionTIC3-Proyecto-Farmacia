<template>
    <!-- seccion navegacion -->
    <div class="container mt-4">
        <ul class="nav nav-tabs">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click="activo='consultar'">Consultar</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" @click="activo='modificar'">Modificar</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" @click="activo='agregar'">Agregar</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" @click="eliminar,activo='eliminar'">Eliminar</a>
            </li>
        </ul>
    <!-- fin seccion navegacion -->    

    <!-- seccion consultar -->
        <div class="consultar" v-if="activo=='consultar'">
        <h1 class="text-center"> Inventario total</h1>
        <br>
        <table class="table table-white table-striped text-dark">
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>PRECIO</th>
                <th>PROVEEDOR</th>
                <th>CANTIDAD</th>
            </tr>
            <tr v-for="producto in productos" :key="producto">
                <td>{{producto.id}}</td>
                <td>{{producto.nombre}}</td>
                <td>{{producto.precio}}</td>
                <td>{{producto.proveedor}}</td>  
                <td>{{producto.cantidad}}</td>
            </tr>      
        </table>
        </div>
        <br>
        
       <!-- fin seccion consultar -->

       <!-- seccion modificar -->
        <div class="form" v-if="activo==='modificar'">
            <h4>Modificacion Productos</h4>
            <hr>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ID producto</label>
                <input type="text" class="form-control"  placeholder="nombre" v-model="producto1.id">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre Producto</label>
                <input type="text" class="form-control"  placeholder="nombre" v-model="producto1.nombre">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Precio</label>
                <input type="number" class="form-control"  placeholder="precio" v-model="producto1.precio">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Proveedor</label>
                <input type="text" class="form-control"  placeholder="proveedor" v-model="producto1.proveedor">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Cantidad</label>
                <input type="number" class="form-control"  placeholder="cantidad" v-model="producto1.cantidad">
            </div>
                <button class="btn btn-primary mb-3" @click="modificar">Modificar</button>
        </div>
        <!-- fin seccion modificar -->

        <!-- seccion agregar -->
        <div class="agregar" v-if="activo ==='agregar'">
            <h4>Agregar Productos</h4>
            <hr>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre Producto</label>
                <input type="text" class="form-control"  placeholder="nombre" v-model="producto1.nombre">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Precio</label>
                <input type="number" class="form-control"  placeholder="precio" v-model="producto1.precio">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Proveedor</label>
                <input type="text" class="form-control"  placeholder="proveedor" v-model="producto1.proveedor">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Cantidad</label>
                <input type="number" class="form-control"  placeholder="cantidad" v-model="producto1.cantidad">
            </div>
                <button class="btn btn-primary mb-3" @click="agregar">Agregar</button>
        </div>
        <!-- fin seccion agregar -->

        <!-- seccion eliminar -->
        <div class="eliminar" v-if="activo==='eliminar'">
            <h4>Eliminar Productos</h4>
            <hr>
            <div class="mb-3">
            <label for="" class="form-label">
                ID Producto :<input type="text" class="form-control" placeholder="id_producto" v-model="idProd">
                <button class="btn btn-primary" @click="eliminar">Eliminar</button>
                
                </label>
            
            </div>
        </div>
        <!-- fin seccion eliminar -->

    </div>
    
   
    
</template>

<script>
import axios from 'axios';

export default {
    
    name: "Inventario",
    mounted() {
        axios.get(this.url)
            .then(respuesta => {this.productos = respuesta.data;
             })
            .catch(error => console.error(error));

    },

    data: function(){
        return {
            
            url: 'https://mision-tic-inv-be.herokuapp.com/producto/',
            productos:[],
            activo:"consultar",
            producto1 : {
                id: 0,
                nombre : '',
                precio : 0,
                proveedor : '',
                cantidad : 0 
            },
            idProd : 0
            
        }
    },
    methods:{
        consultar(){
           
        },

        modificar(){
            if (this.producto1.id != undefined){
                axios.put(this.url.concat(this.producto1.id),this.producto1).then(
                    respuesta=>{alert(`el producto id ${this.producto1.id}, nombre ${this.producto1.nombre} fue modificado`)}
                )
                
            }else{
                alert("ha ocurrido un error inesperado contacte al administrador.")
            }
            
            

        },
        agregar(){
            if(this.producto1 != undefined){
                axios.post(this.url,this.producto1).then(
                    respuesta=>{
                        alert(`se agrego el producto : ${this.producto1.nombre}, ${this.producto1.precio}`);
                        
                    }
                )
            }else{  
                alert("ha ocurrido un error inesperado contacte al administrador.")
            }
        },
        eliminar(){
            
            if(this.idProd != undefined){
                axios.delete(this.url.concat(this.idProd));
                alert(`se elimino el producto ${this.idProd}`);
                this.idProd=""
            }else{  
                alert("ha ocurrido un error inesperado contacte al administrador.")
            }
        }
        
    }
}

</script>


<style>
    .greetings{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .greetings h1{
        font-size: 50px;
        color: #283747;
    }

    .greetings span{
        color: crimson;
        font-weight: bold;
    }
</style>