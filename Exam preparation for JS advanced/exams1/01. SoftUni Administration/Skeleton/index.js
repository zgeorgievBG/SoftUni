function solve() {

    const addBtn = document.querySelector('.form-control>button')
    addBtn.addEventListener('click', (ev) => addLecture(ev));
    const lectureNameDefaultValue = document.querySelector('.form-control input[type="text"]').value;
    const lectureDateDefaultValue = document.querySelector('.form-control input[type="datetime-local"]').value;
    const selectModuleDefaultValue = document.querySelector('select[name="lecture-module"]').children[0].textContent
    const trainingSection = document.querySelector('.user-view, section-view')

    
    function addLecture(ev){

        ev.preventDefault()

        const lectureName = document.querySelector('.form-control input[type="text"]');
        const lectureDate = document.querySelector('.form-control input[type="datetime-local"]');
        const selectModule = document.querySelector('select[name="lecture-module"]')


        if(lectureName.value !== lectureNameDefaultValue && lectureDate.value !== lectureDateDefaultValue && selectModule.value !== selectModuleDefaultValue) {
            console.log(1)
            const result = e('div', 'module',
            e('h3', '', selectModule.value),
            e('ul', '','',
            e('li', 'flex', '',
            e('h4', '', lectureName.value, '-', lectureDate.value),
            e('button', 'red', 'Del'))))

            
            const resultAll = [];
            resultAll.push({'module': selectModule.value, result})
            console.log(resultAll)
            trainingSection.appendChild(result)
        } 



        lectureName.value = '';
        lectureDate.value = lectureDateDefaultValue;
        
        
    }


    function e(type, className, ...content) {


        const result = document.createElement(type);
      
        if(content.length > 0) {
            content.forEach((el) => {
                if (typeof el == "string") {
                  const node = document.createTextNode(el);
                  result.appendChild(node);
                } else {
                  result.appendChild(el);
                }
              });
      
        }
        if(className) {
            result.className = className;
        }
    
        return result;
      }
};