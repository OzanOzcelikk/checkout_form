
let x=1;
let x2=1;
document.getElementById("text1").textContent = x;
document.getElementById("text2").textContent = x2;

total();


function arttir1() {
    x=x+1;
    document.getElementById("text1").textContent = x;
    total();
}

function azalt1() {
    if (x>0){x=x-1;
    document.getElementById("text1").textContent = x;
    total();}
    
}

function arttir2() {
    x2=x2+1;
    document.getElementById("text2").textContent = x2;
    total();
}

function azalt2() {
    if (x2>0){x2=x2-1;
    document.getElementById("text2").textContent = x2;
    total();}
    
}

function total() {
    let xx= Number(document.getElementById("discounttext").textContent);
    let t1 = (19+(x*54.99+x2*74.99)).toFixed(2);
    let t2 = (((19+(x*54.99+x2*74.99))*xx)/100).toFixed(2);

    document.getElementById("totaltext").textContent = `$ ${t1}`;
    document.getElementById("discountvalue").textContent = `${t2}`;
    document.getElementById("Toptotaltext").textContent = `${(t1-t2).toFixed(2)}`;

}


function sa(){
    swal("Thank you!", "You have confirmed your order.", "success");
}

function discount(){
    let x= String(document.getElementById("discount-input").value);
    let y= Number(x[1])*10+Number(x[2]);
    let z= String(document.getElementById("totaltext").value);
    if (x.length==3  & x[0]=="D" & y>=0 & y<=100) {
        document.getElementById("discounttext").textContent = y;
        total();
    }
    else if( x==="D100"){
        document.getElementById("discounttext").textContent = "100";
        total();
    }
    


    
}