var hasilHYPO = ""
var hasil =""
var hasilAREA=""

    function Circumference(){
        let pertama = document.getElementById("Height").value
        let kedua = document.getElementById("width").value
        let ketiga = document.getElementById("Hypotenuse").value
        let hasil = parseInt(pertama) + parseInt(kedua) + parseInt(ketiga);
        console.log(hasil)
        document.getElementById("Result").value=hasil
    }
    function Area(){
        let pertama = document.getElementById("Height").value
        let kedua = document.getElementById("width").value
        let hasilAREA = parseInt(pertama) * parseInt(kedua) / "2"
        console.log(hasilAREA)
        document.getElementById("ResultAREA").value=hasilAREA
    }
    function Hypotenuse(){
        let pertama = document.getElementById("Height").value
        let kedua = document.getElementById("width").value
        let hasilHYPO = Math.sqrt(parseInt(pertama)**"2" + parseInt(kedua)**"2")
        console.log(hasilHYPO)
        document.getElementById("ResultHYPO").value=hasilHYPO
    }
    function Reset(){
        document.getElementById("Height").value = ""
        document.getElementById("width").value=""
        document.getElementById("Hypotenuse").value =""
        document.getElementsByClassName("Result").value=""
        console.log("Number Reset")
    }
    function All(){
        let pertama = document.getElementById("Height").value
        let kedua = document.getElementById("width").value
        let hasilAREA = parseInt(pertama) * parseInt(kedua) / "2"
        let hasilHYPO = Math.sqrt(parseInt(pertama)**"2" + parseInt(kedua)**"2")
        let hasil = parseInt(pertama) + parseInt(kedua) + parseInt(hasilHYPO);
        console.log("All Calculated")
        document.getElementById("Result").value=hasil
        document.getElementById("ResultAREA").value=hasilAREA
        document.getElementById("ResultHYPO").value=hasilHYPO
    }
    