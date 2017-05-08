// Thanks to:
//   - http://zlib.net/manual.html

import koaCompress from 'koa-compress'

export default function (options = {}) {
    let compress = koaCompress({ level: 4 })

    return function* _compress(next) {
        yield* compress.call(this, next)
    }
}