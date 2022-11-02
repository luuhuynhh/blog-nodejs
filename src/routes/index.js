const siteRouter = require("./site.route");
const newsRouter = require("./news.route");

function route(app) {
    //route
    app.use("/", siteRouter);

    app.use("/news", newsRouter);

    app.get('/search', (req, res) => {
        res.render('search')
    })
}

module.exports = route;