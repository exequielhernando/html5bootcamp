"use strict";
document.addEventListener("DOMContentLoaded",function(){
    let canvas = document.getElementById("canvas");
    let animation_rectangle = document.getElementById("animation_rectangle");
    let ctx = canvas.getContext("2d");
    let rectangle = animation_rectangle.getContext("2d");
    let raf;
    
    function get_color_random() {
        let color_ramdon = `rgb(${get_number_random()},${get_number_random()},${get_number_random()})`;
        return color_ramdon;        
    }
    function get_number_random() {
        let number_color = Math.floor((Math.random() * 255) + 1);
        return number_color;
    }

    function draw_random_rectangle() {
        if (canvas.getContext) {
            ctx.beginPath();
            ctx.fillStyle = `${get_color_random()}`;
            ctx.fillRect(`${get_number_random()}`,`${get_number_random()}`,`${get_number_random()}`,`${get_number_random()}`);
            ctx.fill();
            ctx.stroke();
        }
        else{
            alert("Canvas is not supported");
        }
    }
    function draw_random_square() {
        if (canvas.getContext) {
            ctx.beginPath();
            let side = get_number_random();
            ctx.fillStyle = `${get_color_random()}`;
            ctx.fillRect(side, side, side, side);
            ctx.fill();
            ctx.stroke();
        }
        else{
            alert("Canvas is not supported");
        }
    }
    function draw_random_circle() {
        if (canvas.getContext) {
            ctx.beginPath();
            ctx.arc(`${get_number_random()}`,`${get_number_random()}`,`${get_number_random()/2}`,0,(Math.PI/180)*360,true);
            ctx.fillStyle=`${get_color_random()}`;
            ctx.fill();
            ctx.stroke();
        }
        else{
            alert("Canvas is not supported");
        }
    }

    let rectangle_data = {
        x: 0,
        y: 0,
        vx: 5,
        vy: 3,
    }
    function draw_rectangle() {

        if (canvas.getContext) {
            rectangle.beginPath();
            rectangle.fillStyle = `${get_color_random()}`;
            rectangle.fillRect(rectangle_data.x,rectangle_data.y,100,75);
            rectangle.fill();
            rectangle.stroke();
        }
        else{
            alert("Canvas is not supported");
        }
    }
    function clear() {
        rectangle.fillStyle = 'rgba(255, 255, 255, 0.1)';
        rectangle.fillRect(0,0,animation_rectangle.width,animation_rectangle.height);
      }
    function draw() {
        clear();
        draw_rectangle();
        rectangle_data.x += rectangle_data.vx;
        rectangle_data.y += rectangle_data.vy;

        if (rectangle_data.y + rectangle_data.vy > animation_rectangle.height ||
            rectangle_data.y + rectangle_data.vy < 0) {
                rectangle_data.vy = -rectangle_data.vy;
        }
        if (rectangle_data.x + rectangle_data.vx > animation_rectangle.width ||
            rectangle_data.x + rectangle_data.vx < 0) {
        rectangle_data.vx = -rectangle_data.vx;
        }
    raf = window.requestAnimationFrame(draw);

    }

    animation_rectangle.addEventListener('mouseover', function(e) {
    raf = window.requestAnimationFrame(draw);
    });

    animation_rectangle.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(raf);
    });
    
    draw_random_rectangle();
    draw_random_square();
    draw_random_circle();
    draw_rectangle();

});

