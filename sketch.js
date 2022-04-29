var grid = []
var gridSize = 600;
var gridSize2 = 600;
var time = 0;
function setup()
{
  createCanvas(600,600)
  gen();
  noLoop();
} 

function draw() {
  background(51);
  console.time("Time:")
  loadPixels();
  for (var y = 0; y < gridSize; y++) {
    for (var x = 0; x < gridSize2; x++) {
      var clr = grid[y][x]
      clr = color(grid[y][x])
      
      
      set(y,x,clr)
    }
  }
  updatePixels();
  console.timeEnd("Time:")
}




function add(p, val)
{
	return createVector(p.x+val,p.y+val)
}

function fbm(p)
{
	return noise(p.x,p.y,time)*3
}

function F(p)
{
	return fbm(add(p,fbm(add(p,fbm(p)))))
}

//interesting concept
//f(p) = fbm( p + fbm( p + fbm( p )))
function gen()
{
  noiseDetail(6,0.5)
  var a = 1
  grid = []
  for (var i = 0; i < gridSize; i++)
  {
    grid.push([])
    for (var o = 0; o < gridSize2; o++)
    {
			var x = (i/100)
			var y = (o/100)
			var p = createVector(x,y)
      var n = F(p)
      
      
      grid[i].push(n);
    }
  }
  
  
  var l = normNoise(grid)
  var gird = []
  for (var i = 0; i < gridSize; i++)
  {
    gird.push([])
    for (var o = 0; o < gridSize2; o++)
    {
      
      gird[i].push(map(grid[i][o],l[0],l[1],0,255));
    }
  }
  
  grid = gird
}


