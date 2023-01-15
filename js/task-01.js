const allElemId = document.querySelectorAll(".item");
const allElem = allElemId.length;

console.log(`Number of categories: ${allElem}`);

//!! =============================================

 allElemId.forEach(element => {
    const elemTitle = element.querySelector("h2").textContent;

    const findElemTitle = element.querySelectorAll("li");
    const findElemTitleQs = findElemTitle.length;

    console.log(`Category: ${elemTitle}`);
    console.log(`Elements: ${findElemTitleQs}`);
});
