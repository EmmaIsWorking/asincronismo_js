const doSomethingAsync = ()=>{
  return new Promise((resolve, reject)=>{
    (true)
      ? setTimeout(()=>resolve('resolve'),4000)
      : reject(new Error('error'))
  })
}

const doSomething = async ()=>{
  const doSomething = await doSomethingAsync()
  console.log(doSomething)
}

console.log('Before1');
doSomething()
console.log('After2');

const doSomething2 = async ()=>{
  try {
    const Something = await doSomethingAsync()
    console.log(Something)
  } catch (error) {
    console.error(error);
  }
}

console.log('Before1');
doSomething2()
console.log('After2');