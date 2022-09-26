import React from "react"
import Sketch from './loadable';

// Adapted from https://github.com/GenArtRepo/game-of-life/tree/main/

const FeatureSketch = () => {
	let columns;
    let rows;
    let board;
    let next;
    let play;
    let borders;
    let settings;
    let canvas;
    let width;
    let height;

    const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		canvas = p5.createCanvas(720, 400).parent(canvasParentRef);  
        width = canvas.width;
        height = canvas.height;

        p5.frameRate(10);

        // Creating the board matrix
        setBoard(p5);
	};

	const draw = (p5) => {
		p5.background(255);
        if(play) generate();
        for ( let i = 0; i < columns; i++) {
            for ( let j = 0; j < rows; j++) {
                if ((board[i][j] == 1)) p5.fill("#006DAE");
                else p5.fill(255);
                p5.stroke(0);
                p5.strokeWeight(0.1);
                p5.rect(i * settings.w + borders.l, j * settings.w + borders.u, settings.w-1, settings.w-1);
            }
        }
	};


    // Settings, values used in the algorithm execution
    settings = { 
        Play: function(){ play=true; },
        Pause: function(){ play=false; },
        // Reset: function(){ play=false; fillBoard(randomly=false); },
        // Random: function(){ play=false; fillBoard(randomly=true); },
        w: 10, // Width of each square in the grid
    };

    // Returns the cell selected through the mouse coordinates
    // function getCell(){
    //     var cord = {
    //     x: p.floor((p.p.mouseX - borders.l)/settings.w),
    //     y: p.floor((p.p.mouseY - borders.u)/settings.w)
    //     };
    //     return cord;
    // }

    function setBoard(p5){
        // Setting border values
        borders = {
            u: settings.w,
            l: settings.w,
            r: 100 + 100 % settings.w,
            d: settings.w,
        };
        
        // Recalculate width and height using the border
        let width_ = width - borders.l - borders.r;
        let height_ = height - borders.u - borders.d;
            
        // Calculate columns and rows
        columns = Math.floor(width_ / settings.w);
        rows = Math.floor(height_ / settings.w);
        board = new Array(columns);
        for (let i = 0; i < columns; i++) {
            board[i] = new Array(rows);
        }
        // Going to use multiple 2D arrays and swap them
        next = new Array(columns);
        for (let i = 0; i < columns; i++) {
            next[i] = new Array(rows);
        }
        init(p5);
    };



    // Fill board given the randomly arg.
    function fillBoard(p5,randomly=false){
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            // Lining the edges with 0s
            if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
            else{
                // Filling the rest randomly
                if(randomly) board[i][j] = p5.floor(p5.random(2));
                else board[i][j] = 0;
            } 
            next[i][j] = 0;
        }
    }
    }

    function init(p5) {
        fillBoard(p5,true);
    }

    // // At clicking the grid the state of the cell selected is changed
    // function mousePressed() {
    //     if ( p.mouseX>borders.l & p.mouseY>borders.u & p.mouseX<(width-borders.r) & p.mouseY<(height-borders.d)){
    //         let cord = getCell();
    //         let x = cord.x
    //         let y = cord.y
    //         if(board[x][y] == 1) board[x][y] = 0;
    //         else board[x][y] = 1;
    //     }
    // }

    function calculate_borders(xi, yj){
        if(xi >= columns) xi -= columns - 1;
        if(yj >= rows) yj -= rows - 1;
        if(xi < 0) xi += columns;
        if(yj < 0) yj += rows;

        return {xi, yj};
    }

    // The process of creating the new generation
    function generate() {
        // Loop through every spot in our 2D array and check spots neighbors
        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                // Add up all the states in a 3x3 surrounding grid
                let neighbors = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        let{ xi, yj } = calculate_borders(x+i, y+j);
                        neighbors += board[xi][yj];
                    }
                }
                neighbors -= board[x][y];
                
                // Rules of Life
                // 1. Loneliness
                if((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;  
                // 2. Overpopulation
                else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;   
                // 3. Reproduction
                else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;  
                // 4. Stasis
                else next[x][y] = board[x][y]; 
                }
        }

        // Swaping the states to the next generation
        let temp = board;
        board = next;
        next = temp;
    }

    return (<Sketch setup={setup} draw={draw} />)
}

export default FeatureSketch