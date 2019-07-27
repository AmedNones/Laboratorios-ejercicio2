//archivo que contiene las funciones para calcular el área de las figuras geométricas

const square = (s) => {
    return s * s;
};

const rectangle = (b, h) => {
    return b * h;
};

const triangle = (b, h) => {
    return b * h / 2;
};

const circle = (r) => {
    return Math.PI * r * r;
};

const ellipse = (a, b) => {
    return Math.PI * a * b;
};

module.exports = {
    square,
    rectangle,
    triangle,
    circle,
    ellipse
}
