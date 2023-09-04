function myFunc(arr) {
    var table = document.getElementById("table");
    let counter = 0
    for (n1 = arr[0]; n1 <= arr[1]; n1++) { // row
        counter += 1
        let x = [n1]
        t = n1
        for (n2 = 1; n2 <= 8; n2++) { // column
            t += 12
            x.push(t)
        }

        var _html = `
        <tr>
            <td>
                <div>
                    <span>${x[0]}</span>
                    <span>${x[1]}</span>
                </div>
            </td>
        <td>
                <div>
                    <span>${x[2]}</span>
                    <span>${x[3]}</span>
                </div>
            </td>
            <td>
                <div>
                    <span>${x[4]}</span>
                    <span>${x[5]}</span>
                </div>
            </td>
            <td>
                <div>
                    <span>${x[6]}</span>
                    <span>${x[7]}</span>
                </div>
            </td>
        </tr>`

        table.innerHTML += _html;
    }
    console.log("counter:", counter)
}


let url = new URL(window.location.href);
let pageId = url.searchParams.get('page')
console.log({pageId})

if (pageId != "" || pageId != undefined){
    var range = generateNumbersUsingPageId(pageId);
    myFunc(range[Number(pageId)])
}

function generateNumbersUsingPageId(pageId){
    // Single page has 48 stickers
    // We are printing two number on single sticker
    // Hence 96 numbers per page 
    const numberSize = 96;
    const totalNumber = Number(pageId) * numberSize;
    const inclusiveColumnSize = 11

    let range = new Object();
    let counter = 0;
    for (let i=1; i<=totalNumber; i+=numberSize ){
        counter ++;
        range[counter] = new Array(i, i + inclusiveColumnSize);
    }
    return range;
}
