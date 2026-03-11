const getHomePage = (req, res) => {
    // Render file views/home.ejs
    res.render('home');
}

module.exports = {
    getHomePage
}


