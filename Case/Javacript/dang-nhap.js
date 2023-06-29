function login1() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("vui lòng nhập usernamr và password")
    } else if (username === "admin" && password === "123") {
        alert("Đăng nhập thành công")
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = '../HTML/Case_Module_1.html';

    } else {
        alert("Tài khoản Mật Khẩu không chính xác , vui lòng nhập lại")

    }
}

function checklogin() {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username === "admin" && password === "123") {
        document.getElementById("login").innerHTML = "Đăng xuất"
        document.getElementById("name").innerHTML = "Admin"
    }
}
    checklogin()





