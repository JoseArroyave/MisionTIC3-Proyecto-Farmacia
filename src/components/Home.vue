<template>

    <div class="container">
        <div class="titulo">
            <div class="alert alert-success mt-3" role="alert">
                  <h4>Bienvenido <strong> {{username}} </strong></h4>  
            </div>
            <hr>
        </div>
        
        
        <br>
        <!-- carrusel -->
        <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" aria-current="true" href="#" @click="informacion">Admin Users</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" @click="activo='Modificar',modificar">Registrar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="activo='Contacto',contacto">Contacto</a>
      </li>
    </ul>
  </div>

  <div class="card-body">
    <h5 class="card-title" v-if="activo ==='Informacion'"><strong>Administracion de {{username}}</strong></h5>
    <div class="card-text" v-if="activo =='Informacion'">
      <table class="table table-dark table-striped text-white">
            <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SALDO</th>
            </tr>
            <tr v-for="user in users" :key="user">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.account.balance}}</td>  
            </tr>      
        </table>
    </div>
    
    
    
  </div>
  <div class="container" v-if="activo =='Contacto'">
      <div class="mb-3 row">
       
       <h4>Datos de contacto</h4>
       
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
        <input type="password" class="form-control" id="email">
    </div>
    </div>
      <div class="mb-3 row">
    <label for="inputTelefono" class="col-sm-2 col-form-label">Telefono</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputTelefono">
    </div>
    <br>
    <br>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    </div>
    <button class="btn btn-primary mb-2" @click="contacto">Enviar</button>
    </div>
</div>
        <!-- fin carrusel -->
    
        <button class="btn btn-primary mt-3" @click="cliente">ir a sitio de usuario</button>

       
        
       
  </div>

</template>


<script>
import axios from 'axios';



export default {
    name: "Home",
    
    data: function(){
        return {
            username: localStorage.getItem('username') || "none",
            activo : "",
            users:[],
            account:{
              name: "",
              email: "",
              balance: 0,
              loaded: false,
            }
            
        }
    },
    methods:{

      

        verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
		
			if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },
        informacion(){
            this.activo='Informacion';
            axios.get('https://mision-tic-inv-be.herokuapp.com/user/all')
                .then((result) => {
                    console.log(result.data)
                    this.users = result.data
                    })
                .catch(() => {
                    alert('ah ocurrido un error');
                });
        },
        modificar(){
            console.log(this.activo)
        },
        logOut(){
            localStorage.clear();
			alert("Sesión Cerrada");
			this.verifyAuth();

        },contacto(){
          alert('Informacion enviada')
        },
        cliente(){
          this.$router.push({name: "farmacia"})
        }
    }
}

</script>


<style>
    .titulo{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .titulo h1{
        font-size: 50px;
        color: #283747;
    }

    .titulo span{
        color: crimson;
        font-weight: bold;
    }
</style>