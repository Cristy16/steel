export function runTensionMath(shape, Fy, Fu) {
    if (!shape) return { Pn: 0 };

    const Ag = parseFloat(shape.A);
    // Basic Gross Yielding (AISC Chapter D2)
    const Pn_yielding = Fy * Ag;

    return {
        Pn: Pn_yielding.toFixed(2),
        Ag: Ag
    };
}