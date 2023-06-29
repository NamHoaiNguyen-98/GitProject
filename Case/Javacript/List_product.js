class Product {
    name
    img
    rice

    constructor(name, img, rice) {
        this.name = name
        this.img = img
        this.rice = rice
    }

}

function displayProduct() {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username === "admin" && password === "123") {
        let displayList = '';
        for (let i = 0; i < list.length; i++) {
            displayList += ` <div  class="laptop" >
             <img src="${list[i].img}" alt="${list[i].name}" style="width: 400px;height: auto; ">
               <p class="rice">${list[i].rice}</p>
                          <div>
               <input  type='button' value='Delete' onclick='deleteProduct(${i})'>
               <input  type='button' value='Edit' onclick='editProduct(${i})'>
   </div>
         </div> `
        }
        return displayList;
    } else {
        let displayList = '';
        for (let i = 0; i < list.length; i++) {
            displayList += ` <div  class="laptop" >
             <img class="anh" src="${list[i].img}" alt="${list[i].name}" style="width: 400px;height: auto; ">
               <p class="rice">${list[i].rice}</p>
                    <div>
               <input class="buy" type='button' value='Mua ngay' onclick='buyProduct(${i})'>
        </div>
                </div> `
        }
        return displayList;

    }
}

let product1 = new Product("Dell", "../image/laptop_Dell/dell.jpg", "12.696.000 VNĐ");
let product2 = new Product("Dell", "../image/laptop_Dell/dell2.jpg", "13.900.000 VNĐ");
let product3 = new Product("Dell", "../image/laptop_Dell/dell3.jpg", "15.450.000 VNĐ");
let product4 = new Product("Dell", "../image/laptop_Dell/dell4.jpg", "17.800.000 VNĐ");
let product5 = new Product("Acer", "../image/laptop_Acer/acer1.jpg", "15.000.000 VNĐ");
let product6 = new Product("Acer", "../image/laptop_Acer/acer2.jpg", "15.690.000 VNĐ");
let product7 = new Product("Acer", "../image/laptop_Acer/acer3.jpg", "17.990.000 VNĐ");
let product8 = new Product("Acer", "../image/laptop_Acer/acer4.jpg", "19.200.000 VNĐ");
let product9 = new Product("Asus", "../image/laptop_Asus/asus1.jpg", "13.690.000 VNĐ");
let product10 = new Product("Asus", "../image/laptop_Asus/asus2.jpg", "14.550.000 VNĐ");
let product11 = new Product("Asus", "../image/laptop_Asus/asus3.jpg", "16.900.000 VNĐ");
let product12 = new Product("Asus", "../image/laptop_Asus/asus4.jpg", "12.200.000 VNĐ");
let product13 = new Product("Hp", "../image/laptop_Hp/hp4.jpg", "14.500.000 VNĐ");
let product14 = new Product("Hp", "../image/laptop_Hp/hp2.jpg", "17.600.000 VNĐ");
let product15 = new Product("Hp", "../image/laptop_Hp/hp3.jpg", "14.500.000 VNĐ");
let product16 = new Product("Hp", "../image/laptop_Hp/hp4.jpg", "16.500 VNĐ");
let product17 = new Product("Lenovo", "../image/laptop_Lenovo/lenovo1.jpg", "11.500.000 VNĐ");
let product18 = new Product("Lenovo", "../image/laptop_Lenovo/lenovo2.jpg", "12.900.000 VNĐ");
let product19 = new Product("Lenovo", "../image/laptop_Lenovo/lenovo3.jpg", "13.900.000 VNĐ");
let product20 = new Product("Lenovo", "../image/laptop_Lenovo/lenovo4.jpg", "15.500.000 VNĐ");

let list = [product1, product2, product3, product4, product5, product6, product7,
    product8, product9, product10, product11, product12, product13, product14, product15,
    product16, product17, product18, product19, product20]
document.getElementById("result").innerHTML = displayProduct()

// phía dưới là các hàm :thêm, sửa ,xóa sản phẩm

function addProduct() {
    let img = document.getElementById("img").value;
    let rice = document.getElementById("rice").value;
    let newProduct = new Product(name, img, rice);
    list.unshift(newProduct);
    alert("Bạn đã thêm sản phẩm mới thành công!");
    document.getElementById("result").innerHTML = displayProduct();
}
function deleteProduct(index) {
    let answer = confirm("Bạn có muốn xóa sản phẩm này không")
    if (answer) {
        list.splice(index, 1);
        alert("Bạn đã xóa sản phẩm thành công")
        document.getElementById("result").innerHTML = displayProduct()
    }
}

let vitri

function editProduct(index) {
    let img = document.getElementById("img")
    let rice = document.getElementById("rice")
    img.value = list[index].img
    rice.value = list[index].rice
    vitri = index

}

function updateProduct() {
    let upDate1 = document.getElementById("img").value;
    let upDate2 = document.getElementById("rice").value;
    list[vitri].img = upDate1
    list[vitri].rice = upDate2
    document.getElementById("result").innerHTML = displayProduct()
}
function  buyProduct(){
}
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username === "admin" && password === "123") {
        function addsanpham() {
            div_add.style.display = "block"
            return div_add
        }
    }


