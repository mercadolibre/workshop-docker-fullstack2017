'use strict';
var saved_items = {}
class Items {
  constructor() {}
  saveItem(data,cb) {
    if(data.id) {
      saved_items[data.id] = data;
    }else {
      return cb(undefined,false);
    }
    return cb(undefined,true);

  }
  getItems(cb) {
    var ret = [];
    Object.keys(saved_items).forEach(function(e){
      ret.push(saved_items[e])
    })
    cb(undefined, ret);
  }
  deleteItem(itemId,cb) {
    delete saved_items[itemId];
    cb(undefined)
  }

  clear() {
    saved_items = {}
  }
}


module.exports.Items = Items
