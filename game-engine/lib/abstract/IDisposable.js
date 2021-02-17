"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDisposable = void 0;
/**
 * Checks if object is disposable.
 * @param object
 */
function isDisposable(object) {
    return typeof object["dispose"] === "function";
}
exports.isDisposable = isDisposable;
//# sourceMappingURL=IDisposable.js.map