Vue.component('paraCvSection', {
    props : ['name', 'content'],
    template : `
    <div class="para">
        <div class="title"><h6>{{ name }}</h6></div>
        <div class="exp"> {{ content }} </div>
    </div>
    `
});
Vue.component('para-section', {
    props : ['title', 'varName', 'value', 'name'],
    data : function() {
        return {
            inputVal : this.value
        }
    },
    template : `
    <div class="test">
        <h1 varname="title">{{name}} </h1>
        <div class="form-group">
          <textarea id="'textNewLine'" cols="50" rows="5" v-model="inputVal"></textarea>
        </div>
    </div>
    `,
    watch : {
        inputVal(val) {
            this.$emit('input', val)
        }
    }
});
Vue.component('listCvSection', {
    props : ['name', 'content'],
    template : `
    <div class="para">
        <div class="title"><h6>{{ name }}</h6></div>
        <div class="exp">
            <ul>
                <li v-for="con in content">{{ con.val }}</li>
            </ul>
        </div>
    </div>
    `
});
// Not Ready
Vue.component('list-section', {
    props : ['name', 'varName'],
    data : function() {
        return {
            inputVal : {val : this.value},
            myList : [{val : ''}],
            sss : '',
            counter : 0
        }
    },
    template : `
    <div class="test">
        <h1 varname="title">{{ name }} </h1>
        <button @click="addNew" class="btn btn-primary" style="float: right; margin-right:50px;">Add {{ name }}</button>
        <div v-for="l in myList">
            <div class="form-group">
                <input type="text" class="form-control" v-model="l.val">
            </div>
        </div>
    </div>
    `,
    methods : {
        addNew() {
            // alert(this.varName);
            this.myList.push({val : ''});
            this.$parent.newSection[this.varName].push(this.myList[this.counter]);
            this.counter++;
        }
    }
});
// Not Ready
Vue.component('paraAndList-section', {
    props : ['title'],
    data : function() {
        return {
            inputVal : this.value
        }
    },
    template : `
    <div class="carousel-item">
      <div class="test">
          <h1 varname="title">title </h1>
          <div class="form-group">
            <textarea id="summary" cols="50" rows="5" v-model="summary"></textarea>
          </div>
      </div>
    </div>
    `,
    watch : {
        inputVal(val) {
            this.$emit('input', val)
        }
    }
});

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
});

Vue.component('edu-work', {
    props : ["name", "obj"],
    template: `<div class="para">
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
});

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
});
