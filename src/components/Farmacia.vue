<template>
<div id="fondo">
  
<div class="container" >
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active mt-2">
      <img src="https://indoamerica.edu.co/wp-content/uploads/2021/05/regencia.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="https://www.valoraanalitik.com/wp-content/uploads/2020/01/Medicamentos.jpg" class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="https://www.carbonellfarma.com/wp-content/uploads/2018/09/productos-farmacia-1-1080x675.jpg" class="d-block w-100">
      </div>
   </div>
  </div>
  <hr>
  <h1 class="bg-dark text-white border" id="titulo">Productos Disponibles</h1>
  
  <a href="#" class="btn btn-secondary" @click="prods">Ver Productos</a> 

  <div class="tarjetas row" >
      <div class="card-columns col-md mt-2 mb-4" >
        <div class="card p-3 " v-for="producto in productos" :key="producto">
          <div class="card-body">
            <h5 class="card-title">{{producto.nombre}}</h5>
            <p class="card-text">
              proveedor : {{producto.proveedor}}
              cantidad : {{producto.cantidad}}
            </p>
            <p class="card-text"><small class="text-muted">precio : {{producto.precio}}</small></p>
    </div>
  </div>
   </div>
  </div>
 </div>
</div>
  
</template>

<script>
import axios from 'axios';

export default ({
    name:"Farmacia",

    data: function(){
        return{
          url :'https://mision-tic-inv-be.herokuapp.com/producto/',
          productos:[]
          }
        

    },
    methods:{
      prods(){
        axios.get(this.url)
        .then(
          respuesta=>{
            console.log(respuesta.data);
            this.productos=respuesta.data;
        })
        .catch(error=>console.error(error))
      }
    }
})
</script>
<style>
  #fondo{
    background-image: url("https://ratiopharm.es/sites/default/files/styles/post_main_image/public/2019-07/Digitalizaci%C3%B3n%2C%20el%20gran%20reto%20pendiente%20de%20la%20farmacia.jpg?itok=2pdmyuiB");
    background-attachment: fixed;
  }
  #titulo{
    color: aliceblue;
    font-weight: bold;
  }

  
 

</style>
