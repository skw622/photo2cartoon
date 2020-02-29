var testModel = require('../models/test.model')
var Cartoonlization = require("photo2cartoon");
var c = new Cartoonlization();

class mainController {
    index(rea, res) {
        c.init("./public/images/sky.jpg").then((cs) => {
            let c = cs[0];
            c.make();
            c.toFile("./test.png");
        });
    }
}


module.exports = mainController;