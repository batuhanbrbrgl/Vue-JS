const app=Vue.createApp({
    template:`
    <h2>Başlık: {{baslik}} </h2>
    <h3>İçerik: {{icerik}} </h3>
    <p>Paragraf:{{appAdet}}</p>
    <button v-on:click="appEkle()" >Uygulama Ekle</button>
    <p @click="appEkle()">{{metin}}</p>
    
    `,
    
    
    
    data() {
        return {
            baslik:'Batuhan Berberoğlu',
            icerik:'Composition API',
            appAdet:5,
            metin:"Metin eklemek için tıklayınız..."
        
           
        }
    },
    methods: {
        appEkle(){
            console.log('appEkle methodu çalıştı.');
            this.appAdet++;
            this.metin=`Şu anda ${this.appAdet} uygulama var.`;
           
        }
    },
    
});
app.mount("#uygulama");
