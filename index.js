var projectBoxes = document.querySelectorAll(".contentbox");
var projectTitles = document.querySelectorAll(".contenttitle");

projectBoxes.forEach(box => {
    box.addEventListener('click', (e) => {requiredDiv = box.getElementsByTagName('ul')[0];
        if (requiredDiv.style.display == 'none'){
            requiredDiv.setAttribute('style', 'a');
        }
    })
});

projectTitles.forEach(box => {
    box.addEventListener('click', (e) => {requiredDiv = box.parentNode.getElementsByTagName('ul')[0];
        if (requiredDiv.style.display != 'none'){
            requiredDiv.setAttribute('style', 'display: none');
            e.stopPropagation()
        }
    })
});
