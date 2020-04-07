export const percentFilter = val => {
  if (Number(val)) {
    return `${ Number(val)*100}%`
  } 
  return val
}

 