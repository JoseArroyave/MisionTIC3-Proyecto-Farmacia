<template>
  <div id="app" class="app">

    
    <div class="header container-fluid">
      


      <h1> Farmacia App </h1>
      <nav>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" v-if="is_auth" @click="inventario">Inventario</button>
          <button type="button" class="btn btn-secondary" v-if="is_auth" v-on:click="loadHome">Inicio</button>
          <!-- <button type="button" class="btn btn-secondary" v-if="is_auth" v-on:click="loadAccount">Cuenta</button> -->
          <button type="button" class="btn btn-secondary" v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
          <button type="button" class="btn btn-secondary" v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
          <button type="button" class="btn btn-secondary" v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
        </div>      
      </nav>
    </div>
    

    <div class="main-component">
       <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    
     
<!-- footer -->
    <footer class="mainfooter " role="contentinfo">
  <div class="footer-middle">
  <div class="container container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Contacto</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Telefono : 3480000</a></li>
            <li><a href="#">Direccion : Calle falsa 123</a></li>
            <li><a href="#">Email: farmaciaapp@mail.com</a></li>
           
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Redes Sociales</h4>
          <ul class="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Links relacionados</h4>
          <ul class="list-unstyled">
            <li><a href="#">Wikipedia</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Whatssap</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
<!-- /footer -->
  </div> 
</div>
  
</template>




<script>
export default {
  name: 'App',

  data: function(){
      return{
        is_auth: false
      }
  },

  components: {
  },

  methods:{
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
		
			if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
			localStorage.setItem("isAuth", true);
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.verifyAuth();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadAccount: function () {
			this.$router.push({ name: "account" });
		},

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
			this.verifyAuth();
		},

    inventario: function(){
      this.$router.push({name: "inventario"})
    },
  },

  created: function(){
    this.verifyAuth()
  }

}
</script>






<style>

  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    background-image: url("https://static.vecteezy.com/system/resources/previews/002/700/980/non_2x/online-pharmacy-store-web-banner-design-header-or-footer-banner-free-vector.jpg");
    /*width: 100%;
    height: 10vh; 
    min-height: 100px;*/

    background-color: #0debd9 ;
    color:#050505;
    border-style: inset;
    font-weight: bolder;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }



  .header h1{
    width: 20%;
    text-align: center;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }

  .header nav {
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    color: #0f0f0f;
    background: #58d7ee;
    border: 1px solid #fffefe;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(12, 12, 12);
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #1882f3;
    background: #11273d;
    border: 1px solid #E5E7E9;
  }

  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }

 
  footer {
  background: #5c87a3;
  background: -webkit-linear-gradient(59deg, #7bbee0, #171e24);
  background: linear-gradient(59deg, #5c9ebe, #090c0e);
  color: white;
  margin-top:100px; 
}

footer a {
  color: #fff;
  font-size: 14px;
  transition-duration: 0.2s;
}

footer a:hover {
  color: #FA944B;
  text-decoration: none;
}

.copy {
  font-size: 12px;
  padding: 10px;
  border-top: 1px solid #FFFFFF;
}

.footer-middle {
  padding-top: 2em;
  color: white;
}


/*SOCİAL İCONS*/

/* footer social icons */

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}


/* footer social icons */

.social-network a.icoFacebook:hover {
  background-color: #3B5998;
}

.social-network a.icoLinkedin:hover {
  background-color: #007bb7;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoLinkedin:hover i {
  color: #fff;
}

.social-network a.socialIcon:hover,
.socialHoverClass {
  color: #44BCDD;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 15px;
}

.social-circle li i {
  margin: 0;
  line-height: 30px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

.social-circle i {
  color: #595959;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

.social-network a {
  background-color: #F9F9F9;
}

</style>
