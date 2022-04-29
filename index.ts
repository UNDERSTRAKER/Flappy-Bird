let sketch = function (p: any) {
    let tubo = new Tubo(p);
    p.setup = function () {
        p.createCanvas(1000, 700);
    }

    p.draw = function () {
        p.background(240);
        tubo.mostrar();
    }
}


let myp5 = new p5(sketch);