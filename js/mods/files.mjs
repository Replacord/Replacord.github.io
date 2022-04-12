let fileHandle;

// file reader
async function getContents(){
  [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  return contents
}
// file Writer
function setContents(name, text, type) {
  
  type = type || "plain/text"

  var a = document.createElement("a")
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.append(a)
  a.click()
  a.remove()
}



let filesys = {

readFile:async function(){
  [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  return contents
},

writeFile:function(name, text, type){
setContents(name, text, type)
}

}


export { filesys }