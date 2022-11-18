// const app=Vue.createApp({
//     template:`
//     <ul>
//     <li v-for="karakter in karakter">{{karakter.isim}}-{{karakter.görev}}</li>
    
    
    
//     </ul>
    
//     `,
//     data() {
//         return {
//             karakter:[
//                 {isim:"Luffy", görev:"Kaptan"},
//                 {isim:"Zoro", görev:"Sanji"},
//                 {isim:"Sanji", görev:"Aşçı"},

//             ]

//         }
//     },
//     methods:{
       
        
//     },
// })

// app.mount("#uygulama");

const app=Vue.createApp({
    template:`
   <div v-bind:style="style">Batuhan</div>
    
    `,
    data() {
        return {
            style:"color:blue"

        }
    },
    methods:{
       
        
    },
})

app.mount("#uygulama");