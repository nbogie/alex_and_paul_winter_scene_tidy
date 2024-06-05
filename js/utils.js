"use strict";
function collect(numToCreate, creatorFunction) {
    const newArray = [];
    for (let i = 0; i < numToCreate; i++) {
        const item = creatorFunction();
        newArray.push(item);
    }
    return newArray;
}
