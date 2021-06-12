//CH04
//#1
scores = { "Albert": 0, "Steven": 0, "Bill": 0};
scores["Albert"] += 32;
scores["Steven"] += 50;
scores["Bill"] += 100;

console.log(scores);
console.log(scores['Albert']);
console.log(scores['Steven']);
console.log(scores['Bill']);

//#2
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
};
console.log(myCrazyObject["some array"][2]["number"]);
