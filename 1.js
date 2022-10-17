
async function parseURI(d){
    var reader = new FileReader();    /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader */
    reader.readAsDataURL(d);          /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL */
    return new Promise((res,rej)=> {  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */
      reader.onload = (e) => {        /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload */
        res(e.target.result)
      },
      reader.error = e =>{
        rej(e.target.result)
      }
    })
  } 
  async function test1(urltext){
    debugger;
    let url2 = "https://cors-anywhere.herokuapp.com/" + urltext;
    var res = await fetch(url2);
    var blob = await res.blob();
    var uri = await parseURI(blob);
    if(res.statusText=="Not Found"){
        document.getElementById('basetext').value = "Not Found";
    }
    else{
        document.getElementById('basetext').value = uri;
    }
    return uri;
  }
  function CopyFunction() {
    var copyText = document.getElementById("basetext");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

