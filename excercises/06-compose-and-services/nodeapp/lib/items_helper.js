'use strict';
var redis = require("redis"),
    client = redis.createClient(6379, process.env["REDIS_HOST"]);

class Items {
  constructor() {}
  saveItem(data,cb) {
    client.hset("items",data.id, JSON.stringify(data),function(err) {
      if(err) {
        return cb(err, false);
      } else {
        return cb(undefined, true);
      }
    })

  }
  getItems(cb) {
    var ret = [];
    client.hvals("items", function(err, vals) {
      if(err) {
        return cb(err)
      } else {
        vals.forEach(function(e) {
          ret.push(JSON.parse(e));
        })
        return cb(undefined, ret);
      }
    });
  }
  deleteItem(itemId,cb) {
    client.hdel("items",itemId, cb)
  }

  clear(cb) {
    client.flushall(cb);
  }
}


module.exports.Items = Items
