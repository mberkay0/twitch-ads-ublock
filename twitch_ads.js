(function() {
    function k() {
        try {
            if (document.querySelector("span[data-test-selector='ad-banner-default-text']")) {
                for (var l = document.getElementsByTagName("video"), a = 0; a < l.length; a++) {
                    var c = l[a]; - 1 === b.indexOf(c) && b.push(c)
                }
                for (a = 0; a < b.length; a++) c = b[a], c.volume = .001, c.style.filter = "brightness(0%)";
                if (!e && window.self === window.top) {
                    var h = window.location.pathname;
                    if (0 === h.indexOf("/") && (h = h.substring(1), c = document.querySelector("div.video-player__overlay"))) {
                        var f = c.getBoundingClientRect();
                        document.fullscreenElement &&
                            (document.exitFullscreen(), f = {
                                x: 0,
                                y: 0,
                                width: window.innerWidth,
                                height: window.innerHeight - 150
                            });
                        var g = document.createElement("iframe"),
                            d = g.style;
                        d.zIndex = 1E5;
                        d.position = "absolute";
                        d.left = f.x + window.scrollX + "px";
                        d.top = f.y + window.scrollY + "px";
                        d.width = f.width + "px";
                        d.height = f.height + "px";
                        g.src = "//player.twitch.tv/?channel=" + h + "&parent=twitch.tv";
                        g.a = 0;
                        document.body.appendChild(g);
                        e = g
                    }
                }
            } else {
                if (b.length) {
                    for (a = 0; a < b.length; a++) b[a].volume = 1, b[a].style.filter = "";
                    b.length = 0
                }
                e && (e.remove(), e =
                    null)
            }
        } catch (m) {}
        setTimeout(k, 100)
    }
    var b = [],
        e = null;
    k()
})();