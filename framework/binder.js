/**
 * VANilla javascript BInder (VANBI)
 * @author Vitor Pêgas
 * @description VANBI is a simple framework for data binding on JS Elements
 * @version 1.2
 */

/**
 * @description Query Selector alias
 * @param {string} selector
 * @returns {HTMLElement}
 */
function q(selector) {
  if (window != this) {
    try {
      return this.querySelector(selector);
    } catch (e) {
      console.log(`Error Querying ${selector}: ${e}`);
    }
  }

  return document.querySelector(selector);
}

/**
 * @description Query Selector alias
 * @param {string} selector
 * @returns {Array<HTMLElement>}
 */
function qAll(selector) {
  if (window != this) {
    try {
      return Array.from(this.querySelectorAll(selector));
    } catch (e) {
      console.log(`Error Querying ${selector}: ${e}`);
    }
  }

  return Array.from(document.querySelectorAll(selector));
}

/**
 * Add prototype functionality
 */
HTMLElement.prototype.qAll = qAll;
DocumentFragment.prototype.qAll = qAll;
HTMLElement.prototype.q = q;
DocumentFragment.prototype.q = q;
