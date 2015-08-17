class MikeyClass {
    constructor() {
        console.log("constructor called");
    }

    doOutput(myOutput) {
        console.log("Output called with " + myOutput);
    }
}

var mikeyObj = new MikeyClass();
mikeyObj.doOutput("bananas 9");