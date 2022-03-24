function choso() {
    var a = Math.round(Math.random() * 10);
    var b = Math.round(Math.random() * 10);
    var c = Math.round(Math.random() * 10);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;
    var btn = document.getElementById("btnGiaiPT");
    // btn.disabled = false;
    // btn.className = 'btn__key';
}

var ptb2 = {
    giai: function() {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        if (a == 0) {
            // ptb 1
            if (b == 0) {
                if (c == 0) {
                    // vsn
                    document.getElementById("result").innerHTML = "<p>Phương trình vô số nghiệm</p>";
                } else {
                    // vn
                    document.getElementById("result").innerHTML = "<p>Phương trình vô nghiệm</p>";
                }
            } else {
                var x = -c / b;
                display = `<p>Phương trình có nghiệm : ${x.toFixed(2)}</p>`;
                document.getElementById("result").innerHTML = display;
            }
        } else {
            var delta = b * b - 4 * a * c;
            if (delta < 0) {
                // ptvn
                document.getElementById("result").innerHTML = "<p>Phương trình vô nghiệm</p>";
            } else if (delta == 0) {
                // kep
                var x = -b / (2 * a);
                display = `<p>Phương trình có nghiệm kép: ${x.toFixed(2)}</p>`;
                document.getElementById("result").innerHTML = display;
            } else {
                // 2 nghiem
                var x1 = (-b - Math.sqrt(delta)) / (2 * a);
                var x2 = (-b + Math.sqrt(delta)) / (2 * a);
                var display = `<p>Phương trình có 2 nghiệm phân biệt</p>
                            <p>X<sub>1</sub> = ${x1.toFixed(2)} </p>
                            <p>X<sub>2</sub> = ${x2.toFixed(2)} </p>`;
                document.getElementById("result").innerHTML = display;
            }
        }
        // btn = btn.document.getElementById('btnGiaiPT');
        // btn.className = 'btn__key'
        // btn.disabled = true;
    }
}

// Count <3
var solangiai = 0;

function dem() {
    solangiai++;
    document.getElementById("solangiai").innerHTML = solangiai;
}

// Date

function date() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var display = `${day} - ${month} - ${year} ${hour}:${minutes}:${seconds}`;
    document.getElementById("clock").innerHTML = display;
}
setInterval('date()', 1000);

// js slider start 

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
// js slider end.