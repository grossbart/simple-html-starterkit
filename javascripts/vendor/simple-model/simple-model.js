/**
 * Original code by Sean Schulte (2010)
 * http://vikinghammer.com/2010/04/25/simple-javascript-eventmodel-framework/
 */
window.SimpleModel = function (fields) {
  this._listeners = {};
  this._fields = (fields || {});
  this._boundListeners = {};

  this.get = function(key) {
    return this._fields[key];
  };

  this.set = function(key, value) {
    var oldValue = this._fields[key];
    this._fields[key] = value;
    if (oldValue !== value) {
      this.poke(key);
    }
  };

  this.listen = function(key, listener) {
    if (this._listeners[key] == null) {
      this._listeners[key] = [];
    }
    this._listeners[key].push(listener);
  };

  this.poke = function(key) {
    if (this._listeners[key] != null) {
      for (var i=0; i < this._listeners[key].length; i++) {
        var listener = this._listeners[key][i];
        listener(this._fields[key]);
      }
    }
  };

}

