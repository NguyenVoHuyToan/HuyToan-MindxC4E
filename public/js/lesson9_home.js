const nameTab = [
  [
    { name: "Hoàng", score: 2 },
    { name: "Long", score: 4 },
  ],
  [
    { name: "Tú", score: 100 },
    { name: "Linh", score: 10 },
  ],
  [
    { name: "Ngọc", score: 1 },
    { name: "Long Lê", score: 9 },
  ],
];
// //out put: Trả về một mảng mới chứa các phần tử được sắp xếp theo thứ tự score tăng dần
let newBox = []
for (let i = 0; i < nameTab.length; i++) {
  for (let j = 0; j < nameTab[i].length; j++) {
    newBox.push(nameTab[i][j])
  }
}
//vòng lặp sắp xếp thứ tự tăng dần
for(let i = 0; i < newBox.length; i++){
    for(let j = 0; j< newBox.length-1; j++){
        if(newBox[j+1].score < newBox[j].score){
            let b ;
            b = newBox[j];
            newBox[j] = newBox[j+1]
            newBox[j+1] = b
        } 
    }
}
console.log(newBox)
//câu 2
//bài học A sẽ bằng bài học kế tiếp là A + 1, key là bài học hiện tại và value là bài học kế tiếp
 //Viết function return - > để lấy được object như kết quả muốn

let listWork = [
    ["Bai_01","Bai_02","Bai_03","Bai_04"],
    ["Bai_01","Bai_03"],
    ["Bai_02","Bai_04","Bai_01"],
    ["Bai_04","Bai_02","Bai_03","Bai_01"],
    ["Bai_04","Bai_03","Bai_02","Bai_01"]
]

listWork.forEach(element => {
    let result = {}
    for(i = 0; i < element.length - 1; i++){
        const b = {
         [element[i]] : element[i + 1]
        }
        result = {...result, ...b}
    }
    console.log(result)
})

