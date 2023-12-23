const liElements = document.querySelectorAll('.item');
console.log(`Number of categories:  ${liElements.length}`);

liElements.forEach(item => {
    let ulName = item.querySelector('h2').textContent;
    let itemCount = item.querySelectorAll('li').length;
    console.log(`Category: ${ulName}`);
    console.log(`Elements: ${itemCount}`);
})
