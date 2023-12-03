const app = require("express")();
// require("dotenv").config();
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 3001;
// const restaurantData = ;

app.get("/", (req, res) => {
    res.json(require("./restaurantData.json"));
});

app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`);
});
