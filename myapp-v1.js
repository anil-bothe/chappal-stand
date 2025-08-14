function myFunc(arr) {
    var table = document.getElementById("table");
    let counter = 0;
    let rowSize = 13;
    let colSize = 5;
    for (n1 = arr[0]; n1 <= arr[1]; n1++) { // row
        counter += 1
        let x = [n1]
        t = n1
        for (n2 = 1; n2 <= colSize; n2++) { // column
            t += rowSize
            x.push(t)
        }

        var _html = `
        <tr>
            <td>
                <div>
                    <span>${x[0]}</span>
                </div>
            </td>
            <td>
                <div>
                    <span>${x[1]}</span>
                </div>
            </td>
            <td>
                <div>
                    <span>${x[2]}</span>
                </div>
            </td>
            <td>
                <div>
                    <span>${x[3]}</span>
                </div>
            </td>
            <td>
                <div>
                    <span>${x[4]}</span>
                </div>
            </td>
        </tr>`

        table.innerHTML += _html;
    }
    console.log("counter:", counter)
}


let url = new URL(window.location.href);
let pageId = url.searchParams.get('page')

if (pageId != "" || pageId != undefined){
    var range = generateNumbersUsingPageId(pageId);
    console.log('Range:', {range})
    myFunc(range[Number(pageId)])
}

function generateNumbersUsingPageId(pageId){
    // Single page has 48 stickers
    // We are printing two number on single sticker
    // Hence 96 numbers per page 
    const numberSize = 70;
    const totalNumber = Number(pageId) * numberSize;
    const inclusiveColumnSize = 12

    let range = new Object();
    let counter = 0;
    for (let i=1; i<=totalNumber; i+=numberSize ){
        counter ++;
        range[counter] = new Array(i, i + inclusiveColumnSize);
    }
    return range;
}
