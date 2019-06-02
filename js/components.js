Vue.component('floating-div', {
    data : function() {
        return {
            selectSection   : "",
            sectionName     : "",
            sectionLocation : "",
            sections        : []
        }
    },
    template : `
    <div id="floating_div">
        <div class="floating-div" >
            <button @click="closeSectionDialog" class="esc btn btn-danger">close</button>
            <div class="container text-center"><h5>* New Section</h5></div>
            
                <div class="form-group">
                    <label for="as">Section Title</label>
                    <input class="form-control" v-model="sectionName" type="text" id="as">
                </div>

                <div class="form-group">
                    <label for="sectionLocation">Section will displayed before</label>
                    <select class="form-control" v-model="sectionLocation">
                        <option v-for="sec in getSections">{{sec}}</option>
                    </select>
                </div> 
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Choose Section Type</label>
                    <select class="form-control" v-model="selectSection">
                        <option>Paragraph Only</option>
                        <option>Paragraph and List</option>
                        <option>List Only</option>
                    </select>
                </div> 
                <button class="btn btn-primary">Add This Section</button>               
            
        </div>
    </div>
    `,
    watch : {
        selectSection(val) {
            this.$emit('input', val)
        },
        sectionName(val) {
            this.$emit('input', val)
        },
        sectionLocation(val) {
            this.$emit('input', val)
        }
    },
    methods : {
        addSection : function() {

        },
        closeSectionDialog : function() {
            app.floatingDiv = false;
        }
    },
    computed : {
        getSections : function() {
            var el = document.querySelectorAll('.para .title');
            var sections = [];
            el.forEach(function(val, index) {
                sections[index] = val.innerText;
            });
            return sections;
        }
    }
})

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
        <input type="text" class="form-group" :id="varName" v-model="inputVal">
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


