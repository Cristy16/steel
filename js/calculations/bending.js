export function runBendingMath(shape, Fy) {
    const Zx = parseFloat(shape.Zx);
    const Sx = parseFloat(shape.Sx);
    const lambda = parseFloat(shape['bf/2tf']);
    const E = 29000;

    const lp = 0.38 * Math.sqrt(E / Fy);
    const lr = 1.0 * Math.sqrt(E / Fy);

    let Mn = 0;
    let state = "";

    if (lambda <= lp) {
        Mn = Fy * Zx;
        state = "Compact (Plastic Yielding)";
    } else if (lambda <= lr) {
        const Mp = Fy * Zx;
        Mn = Mp - (Mp - 0.7 * Fy * Sx) * ((lambda - lp) / (lr - lp));
        state = "Non-Compact (Flange Local Buckling)";
    }

    return {
        Mn: (Mn / 12).toFixed(2), // kip-ft
        limitState: state
    };
}