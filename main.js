let random_name= ["Hương Giang",
"Hương Ly",
"Khánh Linh",
"Khánh Ly",
"Mai Anh",
"Ngọc Ánh",
"Phương Anh 5",
"Phương Anh 6",
"Phương Nhung",
"Phương Thảo",
"Thanh Hiền",
"Kim Ngân",
"Đoan Trang"];

document.querySelector("#button").addEventListener("click", die);

let sacrificed = [];

function die() {
  if (random_name.length === 0) {
    alert("💀 CHÚC CÁC BẠN NỮ 12A7 NGÀY CÀNG XINH ĐẸP 💀");
    document.querySelector("#resultado").innerHTML = '';
    return;
  }
  let randomNumber = Math.round(Math.random() * (random_name.length - 1));
  let sacrificio = random_name[randomNumber];
  sacrificed.push(random_name.splice(randomNumber, 1));

  // Clear the content immediately
  document.querySelector("#resultado").innerHTML = '';

  // Wait for 1 second and then append the text
  setTimeout(function() {
    document.querySelector("#resultado").innerHTML = sacrificio;
  }, 500); // 1000 milliseconds = 1 second
}

