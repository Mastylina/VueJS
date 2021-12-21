var vm = new Vue({
    el: '#computed_props',
    data: {
       firstName : "Terry",
       lastName : "Ben"
    },
    methods: {
    },
    computed :{
       fullname : {
          get : function() {
             return this.firstName+" "+this.lastName;
          },
          set : function(name) {
             var fname = name.split(" ");
             this.firstName = fname[0];
             this.lastName = fname[1]
          }
       }
    }
 });