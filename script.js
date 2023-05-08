let input = document.getElementById('input');
let grid = document.getElementsByClassName('grid')[0];
// key for access: vTPy220cTBvPHynNe2RHMcwmVVbT5AQG_7IaBG8VQ6I
// security key for access: qEIDBvEuupblAI3aRY-qUd5L04yua-nZyNq4-KwAjeA
//asafenko1703@gmail.com
//asafgta1
//asaf_1703




input.addEventListener('keydown',function(event){
    if(event.key === "Enter"){
        loadImg();
    }
})


function loadImg(){
    removeImg();

    fetch('https://api.unsplash.com/search/photos/?query='+input.value+'&client_id=vTPy220cTBvPHynNe2RHMcwmVVbT5AQG_7IaBG8VQ6I')
    .then(response =>{
        return response.json()
    })
    .then(data=>{
        let imageNodes=[];
        for(let i=0;i<data.results.length;i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className='img';
            imageNodes[i].style.backgroundImage='url('+data.results[i].urls.raw +')';
            grid.appendChild(imageNodes[i]);
        }
        // let img = document.createElement('img');
        // img.setAttribute('src',data.results[1].urls.full);
        // container.appendChild(img);
    })



}




function removeImg(){
    grid.innerHTML="";
} 




















