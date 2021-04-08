#!/usr/bin/env node
 const fs = require("fs");

//let data = fs.readFileSync("abc.txt", "utf-8");
//console.log(data);

//fs.writeFileSync("def.txt", "How are you");

//let proceesData = process.argv;
//fs.writeFileSync("jkl.txt", "Is Everything good");
//fs.appendFileSync("jkl.txt", "\nYou are in jkl file");

//let filename = process.argv[2];
//let data = fs.readFileSync(filename, 'utf-8');
//console.log(data);

//let processData = process.argv[2];
//let data = fs.readFileSync(processData, 'utf-8');
//console.log(data);

//let processData = process.argv;
//let data = "";
//for(let i = 2; i < processData.length; i++){
//    data += fs.readFileSync(processData[i], 'utf-8') + "\n";
//}
//console.log(data);

//this will write file in a file
let processData = process.argv;
if(processData[2] == 'a'){
    let previousData = fs.readFileSync(process.argv[3], 'utf-8');
    let appendData = process.argv[4];
    fs.writeFileSync(process.argv[3], previousData + "\n" + appendData);

}else if(processData[2] == 'w'){

    fs.writeFileSync(process.argv[3], process.argv[4]);

}else{
    let data = "";
    let iUpdated = false;
    for(let i = 2; i < processData.length; i++){
        let temp = "";
        if(processData.includes("ne")){
            if(!iUpdated){
                i += 1;
                iUpdated = true;
            }
           temp = fs.readFileSync(processData[i], 'utf-8');
           let lines = temp.split('\n');
           
           
           for(let i = 0; i < lines.length; i++){
               if(lines[i] != ""){
                   data += lines[i] + "\n";
               }
               
           }
           console.log(data);
        }else{

        data += fs.readFileSync(process.argv[i], 'utf-8');
        console.log(data);

        }

    }
} 