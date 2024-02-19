"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPositiveTemporal = void 0;
var toPositiveTemporal = function (amount, unit, nonNegative) {
    // Function implementation...
    var isNonNegative = typeof nonNegative === 'boolean' || nonNegative === 'nonNegative';
    if (amount === '0' && isNonNegative) {
        switch (unit.toLowerCase()) {
            case 'm':
            case 'month':
                return { months: amount };
            case 'd':
            case 'day':
                return { days: amount };
            case 'w':
            case 'week':
                return { weeks: amount };
            case 'y':
            case 'year':
                return { years: amount };
            default:
                return "Invalid time unit: ".concat(unit);
        }
    }
    if (amount === '0') {
        return "amount zero in toPositiveTemporal is invalid, unit: ".concat(unit);
    }
    // Logic for handling non-zero amounts
    switch (unit.toLowerCase()) {
        case 'm':
        case 'month':
            return { months: amount };
        case 'd':
        case 'day':
            return { days: amount };
        case 'w':
        case 'week':
            return { weeks: amount };
        case 'y':
        case 'year':
            return { years: amount };
        default:
            return "Invalid time unit: ".concat(unit);
    }
};
exports.toPositiveTemporal = toPositiveTemporal;
