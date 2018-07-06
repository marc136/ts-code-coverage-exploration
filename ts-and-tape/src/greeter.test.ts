// start with npx ts-node tap/test.ts

// require('ts-node/register')
// require('source-map-support/register')

// const t = require('tap').test
// const t = require('tape')
// import from 'tape'
import {default as test } from 'tape'

import { greeter } from './greeter'

test('test', (t) => {
    t.plan(2)
    // t.pass('hi')

    t.equal(greeter('you'), 'Hello, you')
    t.equal(1, 2)
})
