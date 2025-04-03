function on_img(previewPic){
    const view=document.getElementById('Gallery-View');
    view.style.backgroundImage=`url(${previewPic.src}) `;
    view.style.backgroundSize='cover';
    view.innerHTML = previewPic.alt;

}

function out_img(){
    const view=document.getElementById('Gallery-View');
    view.style.backgroundImage = "none";
    view.innerHTML='Tab or Hover the mouse on a image'
}

let all_img=document.querySelectorAll('.row-Gallery img');
console.log(all_img);
for(i=0;i<all_img.length;i++){
    all_img[i].setAttribute('tabindex',0);
    all_img[i].addEventListener('mouseover',function(){
        on_img(this)
    });
    all_img[i].addEventListener('mouseleave',function(){
        out_img()
    });
    all_img[i].addEventListener('focus', function() {
        on_img(this);  // Call on_img when focus occurs
    });
    all_img[i].addEventListener('blur', function() {
        out_img();  // Call out_img when blur occurs
    });
}
