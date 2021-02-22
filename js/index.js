class Particle {
    constructor() {
        this.position = createVector(random(width), random(height));

        this.size = 5;

        this.moveSpeed = createVector(random(-1, 1), random(-1, 1));
    }

    //draw one
    draw() {
        noStroke();
        fill('rgba()255,255,255,.5');
        circle(this.position.x, this.position.y, this.size);
    }

    //update animation
    update() {
        this.position.add(this.moveSpeed);
        this.edges();
    }

    //range
    edges() {
        if (this.position.x < 0 || this.position.x > width) {
            this.moveSpeed.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.moveSpeed.y *= -1;
        }
    }

    //connect
    connect(minis) {
        minis.forEach(mini => {

            let d = dist(this.position.x, this.position.y, mini.position.x, mini.position.y)

            if (d < 100) {
                stroke('rgba(255,255,255,0.1)');
                line(this.position.x, this.position.y, mini.position.x, mini.position.y)
            }

        })
    }

}

let minis = [];



// p5.js
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    // mini = new Particle();
    let minisLength = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < minisLength; i++) {
        minis.push(new Particle());
    }

}

// p5.js
function draw() {
    background('#333');

    minis.forEach((mini, index) => {
        mini.update();

        mini.draw();

        mini.connect(minis.slice(index))
    })
}