//데이터요청해서 가져옴 (client부분)

const url = "/board";
selectAll(); //전체조회 함수 호출

//전체조회
function selectAll() {
  fetch(url) //json방식으로 자료요청
    .then((res) => res.json())
    .then((res) => {
      //list 클리어
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr>
            <td>${res[i].no}</td>
            <td>${res[i].title}</td>
            <td>${res[i].wirter}</td>
            <td>${res[i].day}</td>
          </tr>`;
        list.innerHTML += tr;
      }
    });
}
