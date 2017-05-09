// Thanks to:
//   - http://zlib.net/manual.html

import koaCompress from 'koa-compress'

export default function (options) {
    let compress = koaCompress(Object.assign({}, {
        level: 4
    }, options))

    return async function _compress(ctx, next) {
        await compress(ctx, next)
    }
}