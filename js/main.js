const Blog = Backbone.Model.extend({
    defaults: {
        author: "",
        title: "",
        url: ""
    }
});

const Blogs = Backbone.Collection.extend({
    model: Blog
});

let blogList = new Blogs([
     new Blog({
         id: 1, 
         author: "Marise", 
         title: "Bonjour Monde", 
         url: "http://www.marisestpierre.com"
        }),
     new Blog({
         id: 2, 
         author: "Etienne", 
         title: "Je suis le maître du monde", 
         url: "http://www.etiennegj.com"
        }),
     new Blog({
         id: 3, 
         author: "Mathias", 
         title: "Je joue à Minecraft", 
         url: "http://www.minecraftetmoi.com"
        })
]);

