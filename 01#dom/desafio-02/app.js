new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, 
    methods: {
        exibirAlerta() {
            return alert('Eu sou evento do click')
        }
    },
})