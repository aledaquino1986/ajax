let ajax = {
  showAjaxPage: function(req, res){
    res.render("ajax");
  },

  muchosGifs: function(req, res){
      res.render("25gifs");
  },

  search: function(req, res){
    res.render("search");
},
}

module.exports = ajax