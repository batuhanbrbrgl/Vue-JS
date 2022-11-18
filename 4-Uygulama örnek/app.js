const app=Vue.createApp({
    template:`
    
    <h2>İçecek Seçiniz</h2>
    <ul>
    <li v-for="i in icecekler" class="li" :class="{secilen:i.sec}" @click:"icecekSec(i)">
    {{i.isim}}
    </li>
    </ul>
    
      
    
    `,
    

    data() {
        return {
           icecekler:[
            {isim:"Su",sec:true},
            {isim:"Kola",sec:false},
            {isim:"Şalgam",sec:false},
            {isim:"Ayran",sec:false},
           ]

          

        }
    },
    methods:{
       icecekSec(icecek){
        icecek.sec=!icecek.sec;
       }
        
    },
})

app.mount('.uygulama');