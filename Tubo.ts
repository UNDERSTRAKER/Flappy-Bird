export default class Tubo {
    constructor(p) {
        this.p = p;
        this.yTam = p.random(100,900);
        this.x = 1100;
    }

    mostrar(): void {
        for (let i = 0; i < 1; i++) {
            this.p.fill(255);
            this.p.noStroke();
            this.p.rect(this.x, 350, 90, this.yTam + 150);
            this.p.rect(this.x, 0, 90, this.yTam);

        }

        this.mover();

    }

    mover(): void {
        this.x -= 3;
            if (this.x == -100) {
                this.x = 1100;
                
            }

        


    }


}