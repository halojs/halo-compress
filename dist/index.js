'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    let compress = (0, _koaCompress2.default)(Object.assign({}, {
        level: 4
    }, options));

    return async function _compress(ctx, next) {
        await compress(ctx, next);
    };
};

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }