var cvbody = document.getElementById('cvbody');
cvbody.style.height = cvbody.offsetWidth * 1.41426;
const cvElements  = document.getElementById('paragraphs');
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

        showDiv             : false,
        sections            : [],
        inputSections       : [],
        sectionName         : '',
        sectionLocation     : '',
        sectionStructure    : '',
        sectionVar          : '',
        // cvSections          : [],

        newSection : {}

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
        addSection : function() {
          if (!this.sections.includes(this.sectionName)) {
              this.sections.push(this.sectionName);
              let componentName = '';
              sectionVar = this.sectionVar = this.sectionName.split(' ').join('_');
              sectionLocation = this.sectionLocation;
              sectionName = this.sectionName;
              switch(this.sectionStructure) {
                  case 'paragraph only' :
                        componentName   = 'para-section';
                        cvCompName      = 'paraCvSection'
                      break;
                  case 'list & paragraph' :
                        componentName   = 'paraAndList-section';
                        cvCompName      = 'paraAndListCvSection';
                      break;
                  case 'list only' :
                        componentName   = 'list-section';
                        cvCompName      = 'listCvSection';
                      break;
              }
              if (this.sectionStructure == 'paragraph only') {
                Vue.set(this.newSection, [sectionVar], '');
              } else if(this.sectionStructure == 'list & paragraph') {
                Vue.set(this.newSection, [sectionVar], '');
                Vue.set(this.newSection, [sectionVar], []);
              } else {
                Vue.set(this.newSection, [sectionVar], []);
              }
              this.inputSections.push({componentName, cvCompName, sectionName, sectionVar, sectionLocation});
          } else {
              alert(this.sectionName + 'Already Exists');
          }
        },
        deleteSection : function(name) {
            const cvElements  = document.querySelectorAll('.para .title');
            cvElements.forEach(function(section) {
                if (name.toUpperCase() == section.innerText) {
                    section.parentElement.style.display = 'none';
                }
            });
        },
        enableSection : function(name) {
            const cvElements  = document.querySelectorAll('.para .title');
            cvElements.forEach(function(section) {
                if (name.toUpperCase() == section.innerText.toUpperCase()) {
                    section.parentElement.style.display = 'block';
                }
            });
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

const floatingDiv   = document.getElementById('floating-div');

// elements creation 
const div           = document.createElement('div');
const span          = document.createElement('span');

function showDiv() {
    document.querySelectorAll('.para .title').forEach(function(sec, index) {
        app.sections.push(sec.innerText.toLowerCase());
    })
    floatingDiv.style.display = 'block';
    app.showDiv = true;
}


// JQuery click listener
window.onload = function() {
    $("body").click(function(e) {
        if ((e.target.id != "floating-div" && !$(e.target).parents("#floating-div").length) && e.target.id != 'addsec') {
            // console.log('outside');
            floatingDiv.style.display = 'none';
            app.showDiv = false;
            app.sections            = [];
            app.sectionName         = "";
            app.sectionLocation     = "";
            app.sectionStructure    = "";
        } else {
        //   console.log('inside');
        }
      });
}