const app = require("express")();


const port = process.env.PORT || 3001;
const restaurantData = require("./restaurantData.json");

app.use(require('cors')());
app.get("/", (req, res) => {
    res.json(restaurantData);
});

app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`);
});
