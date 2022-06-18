type = "zero";
var type1 = { type: "one" };
var type2 = { type: "two" };

function getType() {
    console.log(this.type);
}

getType();
getType.call(this);
getType.call(type1);
getType.call(type2);
