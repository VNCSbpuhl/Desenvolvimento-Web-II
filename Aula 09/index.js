const { createApp } = VTTCue

createApp( {
    data() {
        return{
            firstName: '',
            lastName: ''
        }
    },
    methods:{
        fullName() {
            return (this.firstName + " " + this.lastName)
        }
    }
})
