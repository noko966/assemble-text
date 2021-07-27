/**@type {HTMLCanvasElement} */

class Particle{
        constructor(x,y,size){
            this.x = x;
            this.y = x;
            this.size = size;
            

        }

        draw(ctx){
            ctx.fillStyle = '#fb0700';
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.size, this.size);
            ctx.fill();
            ctx.closePath();
        }
    }

class TextAssembler{
    constructor(width, height, text, elm){
        this.cavas;
        this.ctx;
        this.parts = [];

        this.width = width || 600;
        this.height = height || 600;
        this.text = text || "FORTIS FORTUNA ADIUVAT";
        this.elm = elm || document.body;


        this.createCanvas();
        this.createParts();

        window.requestAnimationFrame(this.render.bind(this));
    }

    createParts(){
        for (let i = 0; i < 100; i++) {
            let x = 100;
            let y = Math.random() * this.width;; 
            console.log(x,y);
            // x = Math.floor(x);
            // y = Math.floor(y);

            let part = new Particle(x, y, 10);
            this.parts.push(part);
        }
    }

    createCanvas(){
        let canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        let ctx = canvas.getContext('2d');
        let elm = this.elm;
        elm.appendChild(canvas);
        this.canvas = canvas;
        this.ctx = ctx;
    }

    
    



    render(){
        let ctx = this.ctx;
       
       this.parts.forEach(part => {
            part.draw(ctx);
        });
        
        window.requestAnimationFrame(this.render.bind(this));
    }


}