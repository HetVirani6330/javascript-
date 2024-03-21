const arr = []

const addData = () => {
    const name = document.catfrm.inname.value;
    let allData = JSON.parse(localStorage.getItem("CatInfo"));
    let len= allData!=null?allData.length:0;
    const catData = {
        "id": len+1,
        name: name
    }

    arr.push(catData);
    localStorage.setItem("CatInfo", JSON.stringify(arr));
    document.catfrm.inname.value = ""
    dispCat()
}


const dispCat = () => {
    let tr = ""

    let allData = JSON.parse(localStorage.getItem("CatInfo"));
    if (allData != null) {
        allData.map((i) => {
            tr += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td><a href="#" class="btn btn-danger " onclick="delData(${i.id})">Delete</a></td>
            </tr>`;
        })
        document.getElementById("allCatData").innerHTML=tr
    }

}

const delData = (id)=>{
    let allData = JSON.parse(localStorage.getItem("CatInfo"));
    allData.splice(id-1,1)
    j=1;
    allData.map((i)=>{
        i.id = j++;
    })

    localStorage.setItem("CatInfo", JSON.stringify(allData));
    dispCat()
 
}


dispCat()