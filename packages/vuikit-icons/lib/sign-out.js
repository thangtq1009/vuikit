'use strict';

var signOut = {
  functional: true,
  render: function (h, ref) {
    var props = ref.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-sign-out',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5" /><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3" />'
      }
    })
  }
}

module.exports = signOut;
