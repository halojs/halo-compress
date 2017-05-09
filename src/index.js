// Thanks to:
//   - http://zlib.net/manual.html

import koaCompress from 'koa-compress'

export default function (options) {
    let compress = koaCompress(Object.assign({}, {
        level: 4
    }, options))

    return function* _compress(next) {
        yield* compress.call(this, next)
    }
}