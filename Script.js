let file = document.getElementById("myfiles");
let column = document.querySelectorAll(".column");
let Imgarr=[];

file.onchange=()=>
{
  for (const key in file.files) {
    if(file.files.hasOwnProperty(key))
    {
      const element = file.files[key];

      if(element.type == "image/jpeg" || element.type == "image/jpg")
      {
        let parentColumn = minParent(column);
        let Img = createImg(element.webkitRelativePath);
        Imgarr[key]=Img;
        parentColumn.appendChild(Img);
      }
    }
    let i=0;
    let cleartime = setInterval(()=>{
      Imgarr[i].setAttribute("style","display:initial");
      Imgarr[i].classList.add("animated", "zoomIn");
      i++;
      i == Imgarr.length ? clearInterval(cleartime): undefined;
    }, 200);
  }
}


function minParent(parentNode)
{
  let arr = [];
  parentNode.forEach((element, i)=>
  {
    arr[i] = element.children.length;
  });


let min = Math.min.apply(null,arr);

for (let i = 0; i<parentNode.length;i++)
{
  if(parentNode[i].children.length == min)
  {
    return parentNode[i];
  }
}
}
function createImg(ImgSrc)
{
  let Img = document.createElement("img");
  Img.setAttribute("src", ImgSrc);
  Img.setAttribute("height", "200px");
  Img.className = "Img";
  return Img;
}
