import assign from 'object-assign'
import { EventEmitter } from 'events'

function emitsChange(object) {

    assign(object, EventEmitter.prototype)

    object.listen = function(callback) {
        this.on('change', callback)
    }

    object.unlisten = function(callback) {
        this.removeListener('change', callback)
    }

    object.emitChange = function() {
        this.emit('change')
    }
}

export default emitsChange
