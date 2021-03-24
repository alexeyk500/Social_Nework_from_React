export const required = (value) =>{
  if (value) return undefined
  else return 'Required field'
};

export const maxLength30 = (value)=>{
  if (value.length > 30) return 'Max length is 30 characters'
  else return undefined
};

export const maxLengthCreator = (maxLength) =>{
  return function(value){
    if (value.length > maxLength) return `Max length is ${maxLength} characters`
    else return undefined
  }
};
