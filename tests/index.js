import koa from 'koa'
import test from 'ava'
import compress from '../src'
import request from 'request'
import mount from 'koa-mount'

const req = request.defaults({
    json: true,
    gzip: true,
    baseUrl: 'http://localhost:3000'
})

test.before.cb((t) => {
    let app = new koa()

    app.use(compress())
    app.use(mount('/compress', async function(ctx, next) {
        ctx.body = { ok: Array(2000).fill(1).join('') }
    }))
    app.listen(3000, t.end)
})

test.cb('compress', (t) => {
    req.get('/compress', (err, res, body) => {
        t.is(res.headers['content-encoding'], 'gzip')
        t.is(body.ok, Array(2000).fill(1).join(''))
        t.end()
    })
})