const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "Ciao a tutti!",
        image: "https://i.insider.com/602ee9ced3ad27001837f2ac?width=700",
      }
    }
}).mount('#app')