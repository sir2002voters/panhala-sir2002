const fs=require("fs");

function process(folder){

let files=fs.readdirSync(folder);

let records=[];

files.forEach(file=>{

if(file.endsWith(".txt")){

let content=fs.readFileSync(folder+"/"+file,"utf8");

let lines=content.split("\n");

lines.forEach((line,i)=>{

line=line.trim();

if(line.length>20){

records.push({
text:line,
file:file,
line:i+1,
area:folder
});

}

});

}

});

return records;

}

let data=[
...process("PANHALA")
];

fs.writeFileSync("data.json",JSON.stringify(data));

console.log("PANHALA JSON created");
