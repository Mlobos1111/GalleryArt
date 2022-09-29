
<script setup>

    
</script>
    
<template>
    
        <div>
            <div class="container_show">
    
                <div class="card mb-3 card text-bg-dark mb-3 card_show">
                    <img src="https://media.gq.com.mx/photos/5eb98f9a51cd5e1b340e8d48/2:3/w_727,h_1091,c_limit/la-persistencia-de-la-memoria-de-salvador-dali-significado-foto.jpg" class="card-img-top img_cardShow" alt="...">
                    <div class="card border-dark card_textshow">
                        <p class="card-text">-Autor de la Obra.</p>
            
                         <div class="container_spaces">
                         <p class="card-title">Aqui se dejara una breve descripcion de laobra de arte</p>
                          </div>
                     
            
            
                        <p class="card-text"></p>
                        <div class="buttons_cardShow">
<!--             
                            <a href="" class="btn btn-dark">To Favorite!</a>
                            <a href="" class="btn btn-dark">   Buy!     </a> -->
                            <a href="{{ route('cancelInscription', $event->id)}}"class="btn btn-dark" onclick="return confirm ('Acabas de desinscribirte en el evento {{$event->name}}')">❌</a>
                                <a href="{{ route('inscribe', $event->id)}}" class="btn btn-dark" onclick="return confirm ('Acabas de inscribirte en el evento {{$event->name}}')">✔️</a>
            
                        </div>
                   
                </div>
                    </div>
                   
            </div>
    
            
        </div>
    
</template>

<style>
    .container_show{
        display: flex;
        justify-content: center;
        margin-top: 20vh;
        }
        .container_spaces{
            display: flex;
        }
        
        .card_show {
            height: 40vh;
            width: 40vh;
           
        }
        
        .img_cardShow {
            margin: auto;
         
        }
     
        .buttons_cardShow {
            display: flex;
            justify-content:space-evenly;
            gap: 6vh;
        }
        .card_textshow {
             background-color: lightgrey;
             
            
        }
        p{
            color:black;
        }
</style>