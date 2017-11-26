var items = {}
function save(id,cb) {
  $.ajax({
    type: "POST",
    url:"/api/items",
    dataType:"json",
    data:JSON.stringify(items[id]),
    contentType: "application/json",
    success:function(response) {
      if(response.saved) {
        $("#save-"+id).text("Saved");
        $("#save-"+id).attr("disabled", true);
      }
      if(cb) {
          if(response.saved) {
            cb(undefined, response);
          } else {
            cb(new Error("Error saving"), response);
          }
      }
    },
    error: function(err) {
      if(cb) {
        cb(err)
      }
    }
  });

}

function deleteItem(id,cb) {
  $("#item-"+id).hide()

  $.ajax({
    type: "DELETE",
    url:"/api/items/"+id,
    success: function(response) {
      if(cb) {
          if(response.saved) {
            cb(undefined, response);
          } else {
            cb(new Error("Error deleting"), response);
          }
      }
    },
    error: function(err) {
      if(cb) {
        cb(err)
      }
    }
  });
}

function addItemRow(resultDiv, element,saveButton, deleteButton) {
 var buttons = "";
 if(saveButton) {
   buttons+='<button onclick="save(\''+element.id+'\')" id="save-'+element.id+'" type="button" class="btn btn-dark" name="salvar">Salvar</button>'
 }
 if(deleteButton) {
   buttons+='<button onclick="deleteItem(\''+element.id+'\')" id="delete-'+element.id+'" type="button" class="btn btn-dark" name="salvar">Borrar</button>'
 }
 var r = '<div class="row result-row" id="item-'+element.id+'">'+
          '<div class="col-1">'+
            '<img class="thumbnail" src="'+element.thumbnail+'" />'+
          '</div>'+
          '<div class="col-8 price-col">'+
            '<div class="row">'+
              '<div class="col result-row">'+
                '<h2><a class="nav-link py-3 px-0 px-lg-3 rounded result-row" href="'+element.permalink+'">'+element.title+'</a></h2>'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="col price-col">'+
                '<h3>$'+element.price+'</h3>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="col-3">'+
            buttons
          '</div>'+
        '</div>';
        resultDiv.html(resultDiv.html()+r);


}
