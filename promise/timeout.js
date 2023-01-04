function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000); //3초뒤에 실행
  });
}
greet()
  .then((res) => {
    console.log(res);
    return res.length;
  })
  .then((res) => {
    console.log(res);
  });

console.log("end");
