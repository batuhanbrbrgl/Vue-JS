const app=Vue.createApp({
    template:`
    <div v-if="bGoster">
    Bilgiler    
    </div>

    <div v-show="bGoster">

    Bilgiler
    </div>

    <button @click="toggle()">
    <span v-if="bGoster">Gizle</span>
    <span v-else="bGoster">Goster</span>
    </button>
    
    `,
    data() {
        return {
            bGoster:true
        }
    },
    methods:{
        toggle(){
            this.bGoster=!this.bGoster;
        }
        
    },
})

app.mount("#uygulama");