var fs = require('fs');
var roomsList = JSON.parse(fs.readFileSync("./data/rooms.json", "utf8"));

const rooms = (req, res) => {
    res.render("rooms", { title: "Travlr Getaways", roomsList});
}

module.exports = {
    rooms,
};