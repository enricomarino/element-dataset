/**
 * Element
 * Element dataset component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * dataset
 * Get/Set value.
 *
 * @param {Mixed} [value] value to set
 * @api public
 */

exports.data = function (attribute, value) {
  if (1 == arguments.length) {
    return this.set_data(attribute, value);
  }
  return this.get_data(attribute);
};

/**
 * get_data
 * Get data.
 *
 * @param {String} attribute attribute
 * @return {Mixed} the value.
 * @api public
 */

exports.get_data = function (attribute) {
  return this.el.dataset[attribute];
};

/**
 * set_data
 * Set data.
 *
 * @param {String} attribute attribute
 * @param {Mixed} value value to set
 * @return {Element} this for chaining
 * @api public
 */

exports.set_data = function (attribute, value) {
  this.el.dataset[attribute] = value;
  return this;
};
