const app=Vue.createApp({
    template:`
    <h2>Başlık: {{baslik}} </h2>
    <h3>İçerik: {{icerik}} </h3>
    <p>Paragraf:{{appadet}}</p>
    <button v-on:click="appEkle()" >Uygulama Ekle</button>
    
    `,
    data() {
        return {
            baslik:'Batuhan Berberoğlu',
            icerik:'Composition API',
            appadet:5
        }
    },
    methods: {
        appEkle(){
            console.log('appEkle methodu çalıştı.');
            this.appadet++;
        }
    },
    
});
app.mount("#uygulama");
