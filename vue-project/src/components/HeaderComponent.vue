<script setup>



</script>





<template>
    <div class="container_main">
        <nav class="navbar navbar-dark bg-dark fixed-top navbar navbar-expand-lg bg-light fixed-top navbarmain">
      
          <div class="container-fluid">
            <a class="navbar-brand" href="?">

                <RouterLink to="/">
                  <a id="title_header">GALLERY ART</a> 
                        
                      
                   
                </RouterLink>
            </a>
        
          
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <RouterLink to="/formcreate">
                      <a class="nav-link button_nav">➕AGREGAR PRODUCTO|</a>
                    </RouterLink>
                    
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/favorite">
                        <a class="nav-link button_nav">FAVORITE |</a>
                    </RouterLink>
                   
                  </li>
                  <li class="nav-item dropdown">
                    <RouterLink to="/shop">
                        <a class="nav-link button_nav">SHOP | </a>
                    </RouterLink>
                   
                    </li>
                </ul>
             </div>
            </div>
          </div>
          
            
        </nav>
      
      </div>
</template>

<style scoped>
  
  .button_nav{
    transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;
  }
    .button_nav:hover{
       color: black;
       background-color:white;

    }
    #title_header{
      color: aliceblue;
      font-size: 3vh;
      font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
      
    }
    a{
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
</style>