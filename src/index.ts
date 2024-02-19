export type PositiveTemporal =
    | { days: string }
    | { weeks: string }
    | { months: string }
    | { years: string }
    | { hours: string }
    | { minutes: string };
export const toPositiveTemporal = (
    amount: string,
    unit: string,
    nonNegative?: boolean | string
): PositiveTemporal | string => {
    // Function implementation...
    const isNonNegative = typeof nonNegative === 'boolean' || nonNegative === 'nonNegative';

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
                return `Invalid time unit: ${unit}`;
        }
    }

    if (amount === '0') {
        return `amount zero in toPositiveTemporal is invalid, unit: ${unit}`;
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
            return `Invalid time unit: ${unit}`;
    }
};