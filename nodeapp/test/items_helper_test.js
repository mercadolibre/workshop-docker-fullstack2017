var should = require('should');
var ItemsHelper = require('../lib/items_helper.js');
describe('Items', function() {
  it("Should save items", function(done) {
    var helper = new ItemsHelper.Items()
    helper.clear();
    helper.saveItem({id: "1234",title:"hola mundo"}, function(err) {
      if(err) done(err);
      helper.getItems(function(err, items) {
        if(err) done(err);
        items.length.should.be.equal(1);
        items[0].id.should.be.equal("1234");
        items[0].title.should.be.equal("hola mundo");
        done();
      });
    })
  });
});
