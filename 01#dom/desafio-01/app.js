new Vue({
  el: "#desafio",
  data: {
    firstName: "Alexandre Amado",
      idade: 25,
      image: 'https://files.cod3r.com.br/curso-vue/vue.jpg'
  },
  methods: {
    intervalos() {
      return Math.floor(Math.random() * 2);
    },
  },
});
