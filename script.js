

function myFunction1() {
    var x = document.getElementById("administrator");
    var y = document.getElementById("user");

    if (x.style.display === "none") {

        y.style.display = "none"
        x.style.display = "block";
        return
    }
    x.style.display = "none";
    y.style.display = "block";

}


function myFunction2() {
    var x = document.getElementById("cashier");
    var y = document.getElementById("user");

    if (x.style.display === "none") {

        y.style.display = "none"
        x.style.display = "block";

    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function myFunction3() {

    var x = document.getElementById("administrator");
    var y = document.getElementById("mangement-form");


    let name = document.getElementById("txtName").value;
    let password = document.getElementById("txtPassword").value;

    // if (name == "nilan" && password == "1234") {
    if (true) {
       
        x.style.display = "none";
        y.style.display = "block";


    } else {

        y.style.display = "none"
        x.style.display = "block";

    }
}

function myFunction4() {


    let name = document.getElementById("txtName1").value;
    let password = document.getElementById("txtPassword1").value;

    // if (name == "nilan" && password == "1234") {
    if (true) {
        window.location.href = 'order.html';


    } else {

        alert(" Login Unsuccess :(");

    }
}

function myFunction5() {

    window.location.href = 'pay.html';


}

function backButton1() {

    window.location.href = 'order.html';

}


function backButton() {

    var x = document.getElementById("administrator");
    var y = document.getElementById("cashier");
    var z = document.getElementById("user");
    var a = document.getElementById("mangement-form");

    if (x.style.display === "block") {

        z.style.display = "block"
        x.style.display = "none";

    } else if (a.style.display === "block") {

        z.style.display = "block"
        a.style.display = "none";


    } else {
        z.style.display = "block"
        y.style.display = "none";

    }
}


function btnBurgers() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (b.style.display === "none") {

        b.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    } else {
        b.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    }
}

function btnSubmarines() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (c.style.display === "none") {

        c.style.display = "block";
        a.style.display = "none"
        b.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    } else {
        c.style.display = "block";
        a.style.display = "none"
        b.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    }
}

function btnFries() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (d.style.display === "none") {

        d.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        b.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    } else {
        d.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        b.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    }
}

function btnPasta() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (e.style.display === "none") {

        e.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        b.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    } else {
        e.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        b.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    }
}

function btnChicken() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (f.style.display === "none") {

        f.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        b.style.display = "none"
        g.style.display = "none"

    } else {
        f.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        b.style.display = "none"
        g.style.display = "none"

    }
}

function btnBeverages() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (g.style.display === "none") {

        g.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        b.style.display = "none"

    } else {
        g.style.display = "block";
        a.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        b.style.display = "none"

    }
}

function btnall() {

    var a = document.getElementById("all");
    var b = document.getElementById("main-Burger");
    var c = document.getElementById("main-submarines");
    var d = document.getElementById("main-Fries");
    var e = document.getElementById("main-Pasta");
    var f = document.getElementById("main-Chicken");
    var g = document.getElementById("main-Beverages");

    if (a.style.display === "none") {

        a.style.display = "block";
        b.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    } else {
        a.style.display = "block";
        b.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"

    }
}



