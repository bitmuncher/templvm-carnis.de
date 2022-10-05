if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.write('\
<header>\
    <center>\
        <h1>&nbsp;TEMPLVM CARNIS&nbsp;</h1>\
    </center>\
</header>\
    ');
} else {
    document.write('\
<header>\
    <center>\
        <h1> \
            <img src="/data/images/templvm_carnis_logo_dark_100.jpg" style="float:left"/>\
            <a href="index.html">TEMPLVM CARNIS</a>\
            <img src="/data/images/templvm_carnis_logo_dark_100.jpg" style="float:right"/>\
        </h1>\
    </center>\
</header>\
    ');
}
