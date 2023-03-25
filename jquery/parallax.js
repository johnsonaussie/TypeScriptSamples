var Parallax;
(function (Parallax) {
    var ParallaxContainer = /** @class */ (function () {
        /**
        *   Creates a Container for a Parallax
        *
        *   @param {HTMLElement} scrollableContent The container that will be parallaxed
        *   @param {perspective} perspective The ratio of how much back content should be scrolled relative to forward content. For example, if this value is 0.5, and there are 2 surfaces,
        *                                    the front-most surface would be scrolled normally, and the surface behind it would be scrolled half as much.
        */
        function ParallaxContainer(scrollableContent, perspective) {
            var _this = this;
            this.perspective = perspective;
            this.surface = [];
            this.content = scrollableContent;
            $(scrollableContent).scroll(function (event) {
                _this.onContainerScroll(event);
            });
        }
        ParallaxContainer.prototype.onContainerScroll = function (e) {
            var currentScrollPos = $(this.content).scrollTop();
            var currentParallax = 1;
            for (var i = 0; i < this.surface.length; i++) {
                var surface = this.surface[i];
                var offset = -(currentScrollPos * currentParallax);
                surface.currentY = offset;
                currentParallax *= this.perspective;
            }
        };
        ParallaxContainer.prototype.addSurface = function (surface) {
            this.surface.push(surface);
        };
        return ParallaxContainer;
    }());
    Parallax.ParallaxContainer = ParallaxContainer;
    var ParallaxSurface = /** @class */ (function () {
        function ParallaxSurface(surfaceContents) {
            this.content = surfaceContents;
        }
        Object.defineProperty(ParallaxSurface.prototype, "currentY", {
            get: function () {
                return -$(this.content).css('margin-top');
            },
            set: function (value) {
                $(this.content).css({ marginTop: value });
            },
            enumerable: false,
            configurable: true
        });
        return ParallaxSurface;
    }());
    Parallax.ParallaxSurface = ParallaxSurface;
})(Parallax || (Parallax = {}));
//# sourceMappingURL=parallax.js.map