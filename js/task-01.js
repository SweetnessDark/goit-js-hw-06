const allElemId = document.querySelectorAll(".item");

console.log(`Number of categories:`, allElemId.length);

//!! =============================================

 allElemId.forEach(element => {
    console.log(`Category:`, element.firstElementChild.textContent);
    console.log(`Elements:`, element.lastElementChild.children.length);
});
