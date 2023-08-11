function isItem(){
    let takeItem = localStorage.getItem("infomation")
    console.log(takeItem);
    if(takeItem){
        document.getElementById("dangnhap").style.display = "none";
        document.getElementById("change").style.display = "flex"
    }
}
isItem()
