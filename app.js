const qr = require("qrcode");
const data={
    name:"krupasagar",
    place:"Hyderabad",
    state:"Telangana",
    country:"India"
}
let stJson = JSON.stringify(data);

qr.toString(stJson,{type:"terminal"})
.then((err,code)=>{
    if(err){
        console.log(err);
    }else{
        console.log(code);
    }
})
qr.toDataURL(stJson)
.then((err,code)=>{
    if(err){
        console.log(err);
    }else{
        console.log(code);
    }
})

qr.toFile("qr.png",stJson)
.then((err)=>{
    if(err){
        console.log(err);
    }
})
