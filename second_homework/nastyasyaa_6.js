land = ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'XXOOO']
function numberOfNeighbours(land, i, j, rows, collumns) {

    let counter = 0;

    if (i > 0  && land[i - 1][j] === 'X')
        counter++;
    if (j > 0  && land[i][j - 1] === 'X')
        counter++;
    if (i < rows - 1  && land[i + 1][j] === 'X')
        counter++;
    if (j < collumns - 1 && land[i][j + 1] === 'X')
        counter++;
    return counter;
}

function landPerimeter(land) {

    let perimeter = 0;
    let rows = land.length;
    let collumns = land[0].length;

    for (let i = 0; i < rows; i++)
        for (let j = 0; j < collumns; j++)
            if (land[i][j] && land[i][j] === 'X') {
                perimeter += (4 - numberOfNeighbours(land, i , j, rows, collumns));
            }
    return "Total land perimeter: " + perimeter;
}

console.log(landPerimeter(land))