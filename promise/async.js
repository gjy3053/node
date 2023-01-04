function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000); //3초뒤에 실행
  });
}

async function callgreet() {
  //async해야 await쓸수있음
  var result = await greet();
  console.log(result);
  console.log(result.length);
}

callgreet(); //non-블로킹
console.log("end");
