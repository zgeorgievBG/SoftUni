function solve(){

   const creator = document.querySelector('#creator');
   const title = document.querySelector('#title');
   const category = document.querySelector('#category')
   const content = document.querySelector('#content');
   const postSection = document.querySelector('main section')
   const archiveSection = document.querySelector('.archive-section ol')

   

   document.querySelector("button").addEventListener('click', (ev) => {
      ev.preventDefault()

      if(ev.target.textContent == 'Create') {
      const deleteBtn = e('button', 'btn delete', 'Delete')  
      const archiveBtn = e('button', 'btn archieve', 'Archive')
      const titleValue = title.value;
         
      const result =  
      e('article', '',
      e('h1', '', title.value),
      e('p', '', `Category: `, e('strong', '', category.value)),
      e('p', '',`Creator: `, e('strong', '', creator.value)),
      e('p', '', content.value),
      e('div', 'buttons')   
      )
      
      result.querySelector('div').appendChild(deleteBtn)
      result.querySelector('div').appendChild(archiveBtn);   
 
      postSection.appendChild(result)

      deleteBtn.addEventListener('click', (ev) => {
         deleteArticle(ev, result)
      })
      archiveBtn.addEventListener('click', () =>{
         let olEl = e('li','',titleValue);
         archiveSection.appendChild(olEl);
    
         const items = [...archiveSection.querySelectorAll('li')];
         archiveSection.innerHTML = '';
    
         items.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => archiveSection.appendChild(e));
    
            postSection.removeChild(result);
       });

      }

      creator.value = ''
      title.value = ''
      category.value = ''
      content.value = ''
   });



   function deleteArticle(ev, article) {
      article.remove()
   }



   function e(type,name,...content) {
      const result = document.createElement(type);
      content.forEach((el) => {
        if (typeof el == "string") {
          const node = document.createTextNode(el);
          result.appendChild(node);
        } else {
          result.appendChild(el);
        }
      });

      if (name !== '') {
         const tokens = name.split(' ')
         result.classList.add(...tokens);
      }
  
      return result;
    }

  }
