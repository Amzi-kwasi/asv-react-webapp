var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("mxw_nav").style.top = "40px";
            document.getElementById("myNavbarc").style.bottom = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
            document.getElementById("mxw_nav").style.top = "-50px";
            document.getElementById("myNavbarc").style.bottom = "-60px";
        }
        prevScrollpos = currentScrollPos;
    };


