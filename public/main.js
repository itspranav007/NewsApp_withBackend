const select = (selector) => { return documet.querySelector(selector);
};


const validateForm=()=>{

  const title = select('#title').value();
  

return true;
}

const form = select('.form')

form.addEventLister('submit',(e)=>{
  
  e.preventDefault();
})