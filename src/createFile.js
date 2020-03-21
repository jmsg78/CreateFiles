const fs = require('fs');
//Array Greetins && Names
const greetings = [
  'Good morning, *****, have a great day.',
  'Buenos Días, *****, que tengas un gran día.',
  'Bonjour, *****, bonne journee.',
  'Buon giorno, *****, buona giornata.',
  'Guten Morgen, *****, einen schonen Tag.'
  ];
  //Array names
const names=[
  'Jose Manuel', 'Any','Aranza','Victor','Silvia','Samuel',
  'Samy','Samael','Soledad','Boody','Connie','Alex','Jaydan',
  'Joshua','Carmelita','Ana','David','Fernando','Omar',
  'Guiselle','Yoshua','Humberto','Arantxa','Jeffer'];

function createFile(path, content) {
  let  nameFile = path.split("/");
  fs.appendFile(path, content, (error,data) => {
    if (error) {
      console.log('Error creating ' + nameFile[nameFile.length-1] + ":::" +error + ":::");
    }
    else {
      console.log(`${nameFile[nameFile.length-1]} created success`);
    }
  });
}

function readNewFile(path,callback) {
  let  nameFile = path.split("/");
  fs.readFile(path, (err,data) => {
    if (err) {
      data=`Error reading ${nameFile[nameFile.length-1]}`;
    }
    else {
    console.log("*****Reading data new file*****");
    callback(data.toString());
    console.log("*****end file*****");
    }
  });
} 

function deleteFiles(path, files, callback) {
  for (let index = 1; index <= files; index++) {
  fs.unlink(path +"/file" + index + ".txt",(error, data) => {
    if (error) {
      callback(`Error deleting file${index}.txt OR not exists`);
    }
    else {
      callback(`file${index}.txt deleted success!`);
    }
    });
  }
  }

function createFiles(path, greetings, names, quantityFiles, intervalTime) {
  let files = 0;
  const myVar = setInterval(() => { 
    files++;
    if (files <= quantityFiles)
    {
    //Select random names and greetins
    randomGreetings = parseInt(Math.random() * greetings.length);
    randomName = parseInt(Math.random() * names.length);
    //Replace names in Greetings 
    let greeting = greetings[randomGreetings];
    let newGreeting = greeting.replace('*****', names[randomName]);
    createFile(path + '/file'+ files +'.txt', newGreeting +  new Date() );
    readNewFile(path + '/file'+ files +'.txt',console.log);
    }
    else {
      console.log('Process finished success');
      clearInterval(myVar);
    }
   }, intervalTime*1000);
    
}
//deleteFiles(path, files, callback) 
deleteFiles(__dirname + '/files',5,console.log);
//createFiles(path, greetings, names, quantityFiles, intervalTime) intervalTime (seconds) 
createFiles(__dirname + '/files',greetings,names,5,60);