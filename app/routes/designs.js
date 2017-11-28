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

   revealEdit(data){
     this.controllerFor('designs').set('edit', true);
     this.controllerFor('designs').set('fila', data);
   },

   update(){
     let newFila = this.controllerFor('designs').get('fila');
     this.get('ajax').put('http://web-unicen.herokuapp.com/api/thing/'+newFila._id,{
        data: {
          group: 12 ,
          thing:{
            Medidas: newFila.thing.Medidas,
            Talle_S: newFila.thing.Talle_S,
            Talle_M: newFila.thing.Talle_M,
            Talle_L: newFila.thing.Talle_L,
            Talle_XL: newFila.thing.Talle_XL 
          }
        }
      });
      this.controllerFor('designs').set('edit', false);
      this.refresh();
   }
 }

});
