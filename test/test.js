import { assert } from 'chai'
import emitsChange from '../src/index'

describe('emitsChange', () => {

    class TestEmitter {
        constructor() {
            emitsChange(this)
        }
    }

    it('can be bound to a class through composition', () => {

        let testEmitter = new TestEmitter

        assert.isFunction(testEmitter.listen)
        assert.isFunction(testEmitter.unlisten)
        assert.isFunction(testEmitter.emitChange)
        assert.notOk(testEmitter.random)
    })

    it('accepts a listener and calls it on change', () => {

        let testEmitter = new TestEmitter
        let listenerHasBeenCalled = false
        let listener = () => {
            listenerHasBeenCalled = ! listenerHasBeenCalled
        }

        testEmitter.listen(listener)
        assert.isFalse(listenerHasBeenCalled)
        testEmitter.emitChange()
        assert.isTrue(listenerHasBeenCalled)
    })

    it('can unlisten a callback', () => {

        let testEmitter = new TestEmitter
        let listenerHasBeenCalled = false
        let listener = () => {
            listenerHasBeenCalled = ! listenerHasBeenCalled
        }

        testEmitter.listen(listener)
        assert.isFalse(listenerHasBeenCalled)
        testEmitter.emitChange()
        assert.isTrue(listenerHasBeenCalled)
        testEmitter.unlisten(listener)
        testEmitter.emitChange()
        assert.isTrue(listenerHasBeenCalled)
    })
})
