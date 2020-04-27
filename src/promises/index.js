const somethingsWillHappen = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){
      resolve('Se resolvio')
    }else{
      reject('reject')
    }
  })
}

somethingsWillHappen()
  .then(resolve=>console.log(resolve))
  .catch(error=> console.error(error))

const somethingsWillHappen2 = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(()=>resolve('Yuppi'),3000)
    }else{
      const error = new Error('error')
    }
  })
}

somethingsWillHappen2()
  .then(resolve=>console.log(resolve))
  .catch(error => console.error(error))

Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
  .then(resolve=>console.log('Array',resolve))
  .catch(error=>console.error(error))