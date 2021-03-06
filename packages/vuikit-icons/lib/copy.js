'use strict';

var copy = {
  functional: true,
  render: function (h, ref) {
    var props = ref.props;
    var width = props.width || 20;
    var height = props.height || 20;
    var viewBox = props.viewBox || '0 0 20 20';
    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-copy',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16" /><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17" />'
      }
    })
  }
}

module.exports = copy;
