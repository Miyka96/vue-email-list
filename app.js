const app = new Vue ({
    el: ('#root'),
    data: {
        emails: [],
        emailsNumber: 10,
    },
    created(){
        for (let i=0; i<this.emailsNumber; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (res => {
                if(res.data.success) {
                    this.emails.push( res.data.response );
                 }
            }
            ))
        }
    }
})