const express = require('express')
const app = express()

app.set("view engine", "pug")
app.set("views", __dirname)

app.get('/', function (req, res) {
    res.render("template", {
        heading: "Welcome",
        content: "John Doe is a Toronto-based creative.",
        label: "Contact John",
        url: "/contact",
        title: "John Doe's website"
    })
})

app.get('/contact', function (req, res) {
    res.render("template", {
        heading: "Contact info",
        content: "Reach out to John via email.",
        label: "john@doe.com",
        url: "mailto:john@doe.com",
        title: "John Doe's contact information"
    })
})
 
app.listen(3000)