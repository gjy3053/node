//데이터요청해서 가져옴 (client부분)

const url = "/customers";
selectAll(); //전체조회 함수 호출
insert(); //등록버튼에 이벤트지정 함수
customerDelete(); //삭제, 조회 버튼에 이벤트 지정
update();

//전체조회
function selectAll() {
  fetch(url) //json방식으로 자료요청
    .then((res) => res.json())
    .then((res) => {
      //list 클리어
      list.innerHTML = "";
      for (let i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].id}">
            <td><input type="checkbox" /></td>
            <td>${res[i].id}</td>
            <td>${res[i].name}</td>
            <td>${res[i].email}</td>
            <td>${res[i].phone}</td>
            <td>${res[i].address}</td>
            <td><button id="delbtn">삭제</button></td><td>
            <button id="btnsel">조회</button></td>
          </tr>`;
        list.innerHTML += tr;
      }
    });
}
//등록 post
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data), //서버로 자료를 json으로 보낸다
    })
      .then((res) => res.json()) //(client과 서버와의 통신형식은 무조건String) 그리고 나서 받을때도json으로 받는다
      .then((res) => {
        selectAll();
      });
  });
}

//수정 고치기
function update() {
  updbtn.addEventListener("click", function (ev) {
    let data = {
      id: userid.value,
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(`${url}/${userid.value}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data), //서버로 자료를 json으로 보낸다
    })
      .then((res) => res.json()) //(client과 서버와의 통신형식은 무조건String) 그리고 나서 받을때도json으로 받는다
      .then((res) => {
        selectAll();
      });
  });
}

//삭제
function customerDelete() {
  //삭제버튼 이벤트
  list.addEventListener("click", function (ev) {
    if (ev.target.id == "btnsel") {
      // 단건조회
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          userid.value = res.id; //수정할때 id값 필수
          username.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        }); //customers/5번  get방식이라서 {}없어도 됨
    } else if (ev.target.id == "delbtn") {
      //삭제
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" }).then(() => {
        selectAll();
      });
    }
  });
}
