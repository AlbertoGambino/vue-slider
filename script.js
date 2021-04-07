// GOAL: ricreare lo slider visto in jquery, con tecnologia Vue
// BONUS: aggiungere un timer che permetta di ciclare le immagini in automatico (cambio ogni 3sec)
function sliderVue (){

  new Vue({

        el: '#app',
        data:{
          images:[
          "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
          "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
          "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
          "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
        ],
        timer: null,
        currentIndex: 0
        },
        mounted: function(){
          this.startSlide();
        },
        methods:{
          startSlide: function (){
            this.timer = setInterval(this.next,3000)
          },
          next: function(){
            this.currentIndex += 1
          },
          prev: function(){

            this.currentIndex -= 1

          },


          }
          computed: {
          currentImg: function() {
          return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
  })
}



function init() {

    console.log('hello');

    sliderVue()

}
$(init);
