function unpackSausages(truck) {

    let counter = 1;
    let str = [];
    let sausages = [];
    let numOfUndamagedPackages = 1;

    for (let box of truck) {
        for (let packages of box) {
            if (packages[0] === "[" && packages[packages.length - 1] === "]" && packages.length === 6) {
                for (let i = 0; i < packages.length; i++) {
                    if (packages[i] === packages[i + 1]) {
                        sausages.push(packages[i]);
                        counter++;
                        if (counter === 4) {
                            if (numOfUndamagedPackages % 5 !== 0) {
                                sausages.push(packages[i + 1]);
                                str.push(sausages.join(' '));
                            }
                            numOfUndamagedPackages++;
                        }
                    }
                }
                counter = 1;
            }
            sausages = [];
        }
    }
    return str.join(' ');
}
console.log(unpackSausages([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]));
