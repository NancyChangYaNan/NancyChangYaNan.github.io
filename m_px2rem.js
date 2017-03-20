/**
 * Created by zym on 2016/3/4.
 */
(function(x) {
    var d = x.document,
        h = d.documentElement;
    v = d.querySelector('meta[name="viewport"]');

    // console.info(v);

    if(!v){
        var metaEl = d.createElement('meta');
        metaEl.name = 'viewport';
        metaEl.content = 'width = device-width, initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 1.0, user-scalable = no';

        if(d.head.firstChild){
            d.head.insertBefore(metaEl, d.head.firstChild);
        }else{
            d.head.appendChild(metaEl);
        }
    }

    function w() {
        var a = h.getBoundingClientRect().right,
            b = a > 540 ? 540 : a;  // b = a > 540 ? 540 : a < 320 ? 320 : a;

        x.rem = b / 16;
        h.style.fontSize = x.rem + 'px';

    } w();

    if(x.addEventListener){
        x.addEventListener('resize', function(){
            setTimeout(w, 300)
        })
    }else if(x.attachEvent){
        x.attachEvent('resize', function(){
            setTimeout(w, 300)
        })
    }

})(window);