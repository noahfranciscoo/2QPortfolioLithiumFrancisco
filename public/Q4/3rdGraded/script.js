function plotPoint(x0, y0, x, y) {
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;
    var point = document.createElement('div');  
    point.className = 'point';
    

    point.style.left = (x - x0 + 200 - 5) + 'px'; 
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; 
    document.getElementById('coordinatePlane').appendChild(point);
    
    if (x > x0 && y > y0) { out1.innerHTML = "NE"; }
    else if (x < x0 && y < y0) { out1.innerHTML = "SO"; }
    else if (x > x0 && y < y0) { out1.innerHTML = "SE"; }
    else if (x < x0 && y > y0) { out1.innerHTML = "NO"; }
    else { out1.innerHTML = "divisa"; }
}
