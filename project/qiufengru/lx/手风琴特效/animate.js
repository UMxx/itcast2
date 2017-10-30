function animate(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            //json {attr:target}
            //{属性名:属性值} {"left": 300} {k:json[k]}
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr]
    }
}