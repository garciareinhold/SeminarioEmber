import Route from '@ember/routing/route';

export default Route.extend({

  ajax: Ember.inject.service(),

  model(params, transition) {
    return this.get('ajax').request('http://web-unicen.herokuapp.com/api/thing/group/12');
  },

 actions:
 {
   create(medidas, talleS, talleM, talleL, talleXL){
     this.get('ajax').post('http://web-unicen.herokuapp.com/api/thing/',
      { data: {
        group: 12,
        thing:{
           Medidas: medidas,
           Talle_S: talleS,
           Talle_M: talleM,
           Talle_L: talleL,
           Talle_XL: talleXL
           }
         }
       }
     );
     this.refresh();
   },

   delete(id){
     this.get('ajax').del('http://web-unicen.herokuapp.com/api/thing/'+id);
     this.refresh();
   },

   update(id){
     this.get('ajax').put('http://web-unicen.herokuapp.com/api/thing/'+id, {
        data: {
          group: 12 ,
          thing:{
            Medidas: data.thing.medidas,
            Talle_S: data.thing.talleS,
            Talle_M: data.thing.talleM,
            Talle_L: data.thing.talleL,
            Talle_XL: data.thing.talleXL
          }
        }
      });
     this.refresh();
   }
}

});
