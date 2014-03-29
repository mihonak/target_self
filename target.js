var aTags = document.getElementsByTagName('a');
for(var i = 0; i < aTags.length; i++){
    aTags[i].setAttribute('target','_self');
}
