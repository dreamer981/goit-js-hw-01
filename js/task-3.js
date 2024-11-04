function getElementWidth (content, padding, border) {    
    console.log(parseInt(content) + 2*parseInt(padding) + 2*parseFloat(border))
}

getElementWidth("50px", "8px", "4px"); // 74
getElementWidth("60px", "12px", "8.5px"); // 101
getElementWidth("200px", "0px", "0px"); // 200
