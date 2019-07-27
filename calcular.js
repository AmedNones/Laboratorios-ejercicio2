//lamada de surfaces.js
let calcSurface = (figure) => {
    const surfaces = require ('./surfaces.js');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    switch (figure) {
        case 'square':
            process.stdout.write('Por favor ingrese el lado de un cuadrado: ');
            process.stdin.on('data', (chunk) => {
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);
                process.stdout.write(`La superficie del cuadrado es ${surface} metros cuadrados\n`);
                process.stdin.destroy();
            });
        break;
        case 'triangle':
            process.stdout.write('Ingrese la base y la altura de un triángulo, separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);
                process.stdout.write(`La superifice del triángulo es ${surface} metros cuadrados`);
                process.stdin.destroy();
            });
        break;
        case 'rectangle':
            process.stdout.write('Ingrese la base y la altura de un rectángulo, separado porun espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);
                process.stdout.write(`La superficie del rectángulo es ${surface} metros cuadrados`);
                process.stdin.destroy();
            }); 
        break;
        case 'circle':
            process.stdout.write('Ingrese el radio del circúlo: ');
            process.stdin.on('data', (chunk) => {
                let radio = parseFloat(chunk);
                let surface = surfaces.circle(radio);
                process.stdout.write(`La superficie del circúlo es ${surface} metros cuadrados`);
                process.stdin.destroy();
            });
        break;
        case 'elipse':
                process.stdout.write('Ingrese los dos puntos del elipse, separados de un espacio: ');
                process.stdin.on('data', (chunk) => {
                    let AandB = chunk.split(' ');
                    let a = parseFloat(AandB[0]);
                    let b = parseFloat(AandB[1]);
                    let surface = surfaces.ellipse(a,b);
                    process.stdout.write(`La superficie del elipse es ${surface} metros cuadrados`);
                    process.stdin.destroy();
                });
        break;
        default:
            process.stdout.write('Te perdiste la opción. Inténtalo de nuevo.\n');
            process.exit();
        break;
    }
}

calcSurface (process.argv[2]);
process.on('exit', () => {
    process.stdout.write('Hasta la próxima\n');
});