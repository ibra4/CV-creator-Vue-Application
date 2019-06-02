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

var app = new Vue({
    el : '#app',
    data : {
        firstname       : '',
        lastname        : '',
        phone           : '',
        email           : '',
        address         : '',
        birthday        : '',
        image           : 'pics/56468193_2258994747694174_6472742480755294208_n.jpg',
        summary         : '',
        skills          : [{value : 'skill 1'}],
        educations      : [{cons : '', spec : '', startY : '', endY : '', exp : ''}],
        works           : [{cons : '', spec : '', startY : '', endY : '', exp : ''}],
        softskills      : [{ skill : 'skill 1', value : '' }],
        personalities   : [{value : 'block 1'}, {value : 'block 2'}, {value : 'block 3'}],
        certificates    : [{ cert : 'certificates' }],
        languages       : [{ name : 'english', value : 'good' }],
        customSections  : [],
        cons            : '',
        spec            : '',
        startY          : '',
        endY            : '',
        degree          : '',

        profile             : 'profile',
        educationTitle      : 'Education',
        workTitle           : 'work',
        skillsTitle         : 'skills',
        personalitiesTitle  : 'personalities',
        softSkillsTitle     : 'soft skills',
        certificatesTitle   : 'certificates',
        informationTitle    : 'personal information',
        languagesTitle      : 'Languages',
        
        floatingDiv : false

    },
    methods : {
        addSkill : function() {
            this.skills.push({value : ''});
        },
        removeSkill : function(_skill) {
            this.skills.splice(this.skills.indexOf(_skill), 1);
        },
        addPersonality : function() {
            this.personalities.push({value : ''});
        },
        removePersonality : function(_per) {
            this.personalities.splice(this.personalities.indexOf(_per), 1);
        },
        addSoftSkill : function() {
            this.softskills.push({
                skill : '',
                level : ''
            });
        },
        removeSoftSkill : function(_softskill) {
            this.softskills.splice(this.softskills.indexOf(_softskill), 1);
        },
        addCer : function() {
            this.certificates.push({cert : ''})
        },
        removeCer : function(_cer) {
            this.certificates.splice(this.certificates.indexOf(_cer), 1)
        },
        addEdu : function() {
            this.educations.push({
                cons    : '',
                spec    : '',
                startY  : '',
                endY    : '',
                exp     : ''
            });
        },
        removeEdu : function(_education) {
            this.educations.splice(this.educations.indexOf(_education), 1);
        },
        addWork : function() {
            this.works.push({
                cons    : '',
                spec    : '',
                startY  : '',
                endY    : '',
                exp     : ''
            });
        },
        removeWork : function(_work) {
            this.works.splice(this.works.indexOf(_work), -1);
        },
        addLanguage : function() {
            this.languages.push({
                name    : '',
                value   : ''
            });
        },
        removeWork : function(_lang) {
            this.languages.splice(this.languages.indexOf(_lang), -1);
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.createImage(files[0]);
          },
          createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
      
            reader.onload = (e) => {
              vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
          },
          removeImage: function (e) {
            this.image = '';
          },
          showDiv : function() {
              this.floatingDiv = true;
          },
          addSection : function() {
              console.log('das');
          }
    }
});


// editable
function someFunc(elem) {
    var divVal  = elem.innerText,
        node = document.createElement('input'),
        span = document.createElement('span'),
        varname
    ;
    node.type = "text";
    node.className = "editInput";
    node.value = divVal;
    span.innerText = "save";
    span.id = "save";
    elem.innerHTML = "&nbsp";
    elem.appendChild(node);
    elem.appendChild(span);
    node.focus();
    varname = elem.getAttribute("varname");
    span.addEventListener('click', function(e) {
        e.stopPropagation();
        var text = node.value;
        elem.removeChild(node);
        elem.innerText = text;
        app[varname] = text;
    });
}
// JQuery
window.onload = function() {
    var fDiv = document.getElementById('floating_div');
    $("body").click(function(e) {
        if (e.target.id !== "floating_div" && !$(e.target).parents("#floating_div").length && app.floatingDiv == true && e.target.id != 'addsec') {
          console.log("Outside div");
          console.log(app.floatingDiv);
          app.floatingDiv = false;
        //   if (app.floatingDiv == true) {app.floatingDiv = false}
        } else {
          console.log("what");
        }
      });
}