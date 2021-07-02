function sapXep() {
    var a = document.getElementById("so1").value
    var b = document.getElementById("so2").value
    var c = document.getElementById("so3").value
    var temp
    if (a > b) {
        temp = a
        a = b
        b = temp
    }
    if (a > c) {
        temp = a
        a = c
        c = temp
    }
    if (b > c) {
        temp = b
        b = c
        c = temp
    }
    var divCount = document.getElementById("count")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Giá trị tăng dần: " + a + "," + b + "," + c
    divCount.appendChild(pTitle)
}

function sayHello() {
    var user = document.getElementById("user").value
    var hello
    var B = "Bố"
    var M = "Mẹ"
    var A = "Anh"
    var E = "Em gái"
    if (user === B) {
        hello = "Chào bố"
    }
    else if (user === M) {
        hello = "Chào mẹ"
    }
    else if (user === A) {
        hello = "Chào anh"
    }
    else if (user === E) {
        hello = "Chào em gái"
    }
    else {
        alert("Vui lòng cho biết ai đang là người sử dụng")
    }
    var divHello = document.getElementById("hello")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = hello
    divHello.appendChild(pTitle)
}

function congThuc() {
    var a = document.getElementById("soNguyen1").value
    var b = document.getElementById("soNguyen2").value
    var c = document.getElementById("soNguyen3").value
    var x = 0
    var y = 0
    a = parseInt(a)
    b = parseInt(b)
    c = parseInt(c)
    if (a % 2 == 0) {
        x = x + 1
    }
    else {
        y = y + 1
    }
    if (b % 2 == 0) {
        x = x + 1
    }
    else {
        y = y + 1
    }
    if (c % 2 == 0) {
        x = x + 1
    }
    else {
        y = y + 1
    }
    var divHello = document.getElementById("hello")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Tống số chẵn: " + x + "," + "Tổng số lẻ: " + y
    divHello.appendChild(pTitle)
}

function tamGiac() {
    var a = document.getElementById("canh1").value
    var b = document.getElementById("canh2").value
    var c = document.getElementById("canh3").value
    var tamGiac
    if (a == b == c) {
        tamGiac = "Tam giác đều"
    }
    else if (a == b) {
        tamGiac = "Tam giác cân tại A"
    }
    else if (a == c) {
        tamGiac = "Tam giác cân tại B"
    }
    else if (b == c) {
        tamGiac = "Tam giác cân tại C"
    }
    else if (b == Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2))) {
        tamGiac = "Tam giác vuông"
    }
    else {
        tamGiac = "Tam giác thường"
    }
    var divTamGiac = document.getElementById("tamGiac")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Kết quả: " + tamGiac
    divTamGiac.appendChild(pTitle)
}

// Bài tập nâng cao
function dateMonth() {
    var x = document.getElementById("ngay").value
    var t = document.getElementById("thang").value
    var n = document.getElementById("nam").value
    var z = x
    var y = x
    x = parseInt(x)
    t = parseInt(t)
    z = parseInt(z)
    y = parseInt(y)
    switch (t) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12: {
            z = z - 1
            y = y + 1
        }
    }
    var divDate = document.getElementById("date")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Ngày tháng năm của ngày trước đó: " + z + "/" + t + "/" + n + "," + "Ngày tháng năm của ngày tiếp theo: " + y + "/" + t + "/" + n
    divDate.appendChild(pTitle)
}