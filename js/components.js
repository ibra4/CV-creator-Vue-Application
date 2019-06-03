
Vue.component('form-group', {
    props : ['value', 'name', 'varName'],
    data : function() {
        return {
            inputVal : this.value
        }
    },
    template : `
    <div class="form-group">
        <label :for="varName">{{ name }}</label>
        <input type="text" class="form-control" :id="varName" v-model="inputVal">
    </div>
    `,
    watch : {
        inputVal(val) {
            this.$emit('input', val)
        }
    }
})

Vue.component('edu-work', {
    props : ["name", "obj"],
    template: `<div>
    <div class="title"><h6>{{ name }}</h6></div>
      <div v-for="(elem, index) in obj">
          <div class="exp" :class="{'bg-grey' : index == 0}">
              <span>{{elem.startY}}</span> <span>-</span> <span>{{elem.endY}}</span>
              <div class="cons">{{elem.cons}}</div>
              <span class="spec">{{elem.spec}}</span>
              <p class="text-secondary">{{elem.exp}} </p>
          </div>
      </div>
    </div>`
})
Vue.component('basic-info', {
    props : ["address", "birthday", "phone", "email", "title"],
    template : `
    <div>
      <h6>{{title}}</h6>
      <div class="basicinfo">
          <i class="icon fa fa-home"></i><span>{{ address }}</span>
      </div>
      <div class="basicinfo">
          <i class="icon fa fa-birthday-cake"></i><span>{{ birthday }}</span>
      </div>
      <div class="basicinfo">
          <i class="icon fa fa-phone"></i><span>{{ phone }}</span>
      </div>
      <div class="basicinfo">
          <i class="icon fa fa-envelope"></i><span>{{ email }}</span>
      </div>
    </div>
    `
})