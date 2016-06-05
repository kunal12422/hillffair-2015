(function(){


    angular.module('hillffair15App').directive('ksFp', ['$window','$timeout','$interval',function($window, $timeout, $interval){

        var link = function(scope, elem, attrs){

            console.log('Chrome: Weird flickering?');
            console.log('Try this: --->  Click on Settings menu option  --->  Click on Advance setting  ---->  Un-Check \'Use Hardware acceleration when available\' checkbox  ---->  Restart your Browser!');
            var option = scope.$eval(attrs.options);

            angular.element(document).ready(function () {

                elem.fullpage(
                    option
                );

                $timeout(function(){
                    angular.element( document.querySelector( '.leftcurtain' )).stop().animate({width:'60px'}, 2000 );
                    angular.element( document.querySelector( '.rightcurtain' )).stop().animate({width:'60px'},2000 );
                },100);



                $(".demo2").lettering("words").children('span').lettering();
                $(".demo3").lettering("words").children('span').lettering();




                var imagesClass = ['decorator-1','decorator-3','decorator-2'];
                var i = 0;



                $('.'+imagesClass[0]).css('opacity', '0');
                $('.'+imagesClass[1]).css('opacity', '0');
                $('.'+imagesClass[2]).css('opacity', '0');

                $interval(function(){
                    $('.'+imagesClass[i%3]).css('opacity', '1');
                    $('.'+imagesClass[(i+1)%3]).css('opacity', '0');
                    $('.'+imagesClass[(i+2)%3]).css('opacity', '0');
                    i++;

                }, 1000);





                var parallaxScene =   angular.element(document.querySelector('#parallax-scene'));
                var parallax = new Parallax(parallaxScene[0]);

                $("#owl-slider").owlCarousel({
                    loop:true,
                    dots: false,

                    stagePadding: 50,
                    margin:60,

                    responsive:{
                        0:{
                            items:2,
                            nav:false
                        },
                        600:{
                            items:3,
                            nav:false
                        },
                        1000:{
                            items:4,
                            nav:false

                        }
                    },
                    autoplay:true,
                    autoplayTimeout:2000


                });


                $timeout(function(){

                    'use strict';


                    var DEBUG       = false;
                    var points      = null;
                    var constraints = null;
                    var skins       = null;
                    var kGravity    = 1.5;
                    var kFriction   = 0.98;
                    var base        = 'images/scene1/';
                    var iwidth = 350;
                    var iheight = 200;
                    Math.sign = Math.sign || function(x) {
                            return x > 0 ? 1 : -1;
                        };



                    function run() {

                        requestAnimationFrame(run);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);



                        pointer.dragging();



                        scene.static();



                        ctx.save();
                        var s = skins;
                        while (s) s = s.draw();
                        ctx.restore();



                        var p = points;
                        while (p) p = p.integrate();



                        pointer.cursor();

                        var c = constraints;
                        while (c) c = c.solve();



                        if (DEBUG) {
                            c = constraints;
                            while (c) c = c.draw();
                        }

                    }


                    function Point (x, y, radius, mass, gravity) {

                        this.x        = canvas.width * 0.5 + x;
                        this.y        = y;
                        this.oldX     = this.x;
                        this.oldY     = y;
                        this.radius   = radius || 1;
                        this.mass     = mass || 1.0;
                        this.friction = kFriction;
                        this.gravity  = gravity || kGravity;
                        this.next     = null;
                        points        = iterator.link (points, this);

                    }



                    Point.prototype.position = function (x, y) {

                        this.x = x;
                        this.y = y;

                    };



                    Point.prototype.integrate = function () {

                        var x       = this.x;
                        var y       = this.y;
                        this.x     += (this.x - this.oldX) * this.friction;
                        this.y     += (this.y - this.oldY) * this.friction + this.gravity;
                        this.oldX   = x;
                        this.oldY   = y;



                        if (this.y > canvas.height - this.radius) {
                            this.x = x;
                            this.y = canvas.height - this.radius;
                        }



                        if (!pointer.draggable) {
                            var dx = this.x - pointer.x;
                            var dy = this.y - pointer.y;
                            if (Math.sqrt(dx * dx + dy * dy) < this.radius * 2) pointer.draggable = true;
                        }

                        return this.next;

                    };



                    Point.prototype.dist = function (p) {

                        var dx = this.x - p.x;
                        var dy = this.y - p.y;
                        return Math.sqrt(dx * dx + dy * dy);

                    };



                    function AngleConstraint (p1, p2, p3, angle, range, force) {

                        this.p1     = p1;
                        this.p2     = p2;
                        this.p3     = p3;
                        this.len1   = p1.dist(p2);
                        this.len2   = p2.dist(p3);
                        this.angle  = angle;
                        this.range  = range;
                        this.force  = force || 0.2;
                        constraints = iterator.link (constraints, this);

                    }



                    AngleConstraint.prototype.solve = function () {

                        var a, b, c, e, m, m1, m2, m3, x1, y1, cos, sin;
                        a         = Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x);
                        b         = Math.atan2(this.p3.y - this.p2.y, this.p3.x - this.p2.x);
                        c         = this.angle - (b - a);
                        c         = c > Math.PI ? (c - 2 * Math.PI) : (c < -Math.PI ? (c + 2 * Math.PI) : c);
                        e         = (Math.abs(c) > this.range) ? (-Math.sign(c) * this.range + c) * this.force : 0;
                        m         = this.p1.mass + this.p2.mass;
                        m1        = this.p1.mass / m;
                        m2        = this.p2.mass / m;
                        cos       = Math.cos(a - e);
                        sin       = Math.sin(a - e);
                        x1        = this.p1.x + (this.p2.x - this.p1.x) * m2;
                        y1        = this.p1.y + (this.p2.y - this.p1.y) * m2;
                        this.p1.x = x1 - cos * this.len1 * m2;
                        this.p1.y = y1 - sin * this.len1 * m2;
                        this.p2.x = x1 + cos * this.len1 * m1;
                        this.p2.y = y1 + sin * this.len1 * m1;
                        a         = Math.atan2(this.p2.y - this.p3.y, this.p2.x - this.p3.x) + e;
                        m         = this.p2.mass + this.p3.mass;
                        m2        = this.p2.mass / m;
                        m3        = this.p3.mass / m;
                        cos       = Math.cos(a);
                        sin       = Math.sin(a);
                        x1        = this.p3.x + (this.p2.x - this.p3.x) * m2;
                        y1        = this.p3.y + (this.p2.y - this.p3.y) * m2;
                        this.p3.x = x1 - cos * this.len2 * m2;
                        this.p3.y = y1 - sin * this.len2 * m2;
                        this.p2.x = x1 + cos * this.len2 * m3;
                        this.p2.y = y1 + sin * this.len2 * m3;
                        return this.next;

                    };



                    AngleConstraint.prototype.draw = function () {

                        ctx.beginPath();
                        ctx.moveTo (this.p1.x, this.p1.y);
                        ctx.lineTo(this.p2.x, this.p2.y);
                        ctx.lineTo(this.p3.x, this.p3.y);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(this.p1.x, this.p1.y, this.p1.radius * 2, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(this.p2.x, this.p2.y, this.p2.radius * 2, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(this.p3.x, this.p3.y, this.p3.radius * 2, 0, Math.PI * 2);
                        ctx.stroke();
                        return this.next;

                    };


                    function Constraint (p1, p2, force, len) {

                        this.p1     = p1;
                        this.p2     = p2;
                        this.len    = len || p1.dist(p2);
                        this.force  = force || 2;
                        constraints = iterator.link (constraints, this);

                    }


                    Constraint.prototype.solve = function () {

                        var d, dx, dy, s1, s2, tm;
                        dx = this.p1.x - this.p2.x;
                        dy = this.p1.y - this.p2.y;
                        d  = Math.sqrt(dx * dx + dy * dy);
                        tm = this.p1.mass + this.p2.mass;
                        d  = (d - (d + (this.len - d) * this.force)) / d * 0.5;
                        s1 = d * (this.p1.mass / tm);
                        s2 = d * (this.p2.mass / tm);
                        this.p1.x = this.p1.x - dx * s2;
                        this.p1.y = this.p1.y - dy * s2;
                        this.p2.x = this.p2.x + dx * s1;
                        this.p2.y = this.p2.y + dy * s1;
                        return this.next;

                    };



                    Constraint.prototype.draw = function () {

                        ctx.beginPath();
                        ctx.moveTo (this.p1.x, this.p1.y);
                        ctx.lineTo(this.p2.x, this.p2.y);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(this.p1.x, this.p1.y, this.p1.radius * 2, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(this.p2.x, this.p2.y, this.p2.radius * 2, 0, Math.PI * 2);
                        ctx.stroke();
                        return this.next;

                    };



                    function Skin (img, p1, p2, offsetX, offsetY, width, height, angle) {

                        this.p1      = p1;
                        this.p2      = p2;
                        this.img     = new Image();
                        this.img.src = base + img;
                        this.ox      = offsetX;
                        this.oy      = offsetY;
                        this.w       = width;
                        this.h       = height;
                        this.angle   = angle || 0;
                        this.ctx     = ctx;
                        skins        = iterator.link(skins, this);

                    }


                    Skin.prototype.draw = function () {

                        var a   = Math.atan2((this.p2.y - this.p1.y), (this.p2.x - this.p1.x));
                        var cos = Math.cos(a + this.angle);
                        var sin = Math.sin(a + this.angle);
                        this.ctx.setTransform(cos, sin, -sin, cos, this.p1.x, this.p1.y);
                        this.ctx.drawImage(this.img, -this.ox, -this.oy, this.w,    this.h);
                        return this.next;

                    };

                    // Stroke constructor

                    function Stroke (color, p1, p2) {

                        this.p1 = p1;
                        this.p2 = p2;
                        skins   = iterator.link(skins, this);

                    }



                    Stroke.prototype.draw = function () {

                        ctx.beginPath();
                        ctx.strokeStyle = this.color;
                        ctx.moveTo(this.p1.x, this.p1.y);
                        ctx.lineTo(this.p2.x, this.p2.y);
                        ctx.stroke();
                        return this.next;

                    };


                    var canvas = {
                        width:  0,
                        height: 0,
                        elem: document.getElementById('myCanvas'),
                        resize: function () {
                            this.width  = this.elem.width  = this.elem.offsetWidth;
                            this.height = this.elem.height = this.elem.offsetHeight;

                        },
                        init: function () {

                            var ctx = canvas.elem.getContext('2d');

                            $(window).resize(function(){
                                console.log('resized!');

                                canvas.resize.bind(canvas);

                            });
                            return ctx;
                        }
                    };

                    var ctx = canvas.init();



                    var iterator = {
                        last: null,
                        link: function (list, object) {
                            if (!list) list = object;
                            if (this.last) this.last.next = object;
                            this.last = object;
                            return list;
                        }
                    };



                    var pointer = {
                        x:  0,
                        y:  0,
                        drag: null,
                        draggable: false,
                        cursor: function () {
                            canvas.elem.className = this.drag ? 'dragging' : (this.draggable ? 'draggable' : 'default');
                        },
                        dragging: function () {
                            this.draggable = false;
                            if (pointer.drag) {
                                this.drag.x += (this.x - this.drag.x) / 20;
                                this.drag.y += (this.y - this.drag.y) / 20;
                            }
                        },
                        pointer: function (e) {
                            var pointer;
                            if (e.targetTouches) {
                                e.preventDefault();
                                pointer = e.targetTouches[0];
                            } else pointer = e;
                            return pointer;
                        },
                        addEvents: function () {
                            [
                                [$(window), 'mousemove touchmove', function (e) {
                                    var pointer = this.pointer(e);
                                    this.x = pointer.clientX;
                                    this.y = pointer.clientY;
                                }],
                                [$(canvas.elem), 'mousedown touchstart', function (e) {
                                    if (!this.drag) {
                                        var pointer = this.pointer(e);
                                        this.x = pointer.clientX;
                                        this.y = pointer.clientY;
                                        var dm = 9999, p = points;
                                        while (p) {
                                            var dx = p.x - this.x;
                                            var dy = p.y - this.y;
                                            var d = Math.sqrt(dx * dx + dy * dy);
                                            if (d < p.radius * 2) {
                                                if (d < dm) {
                                                    dm = d;
                                                    this.drag = p;
                                                }

                                            }
                                            p = p.next;
                                        }
                                    }
                                }],
                                [$(window), 'mouseup touchend touchcancel', function () {
                                    this.drag = null;

                                }]
                            ].forEach(function (e) {
                                    for (var i = 0, events = e[1].split(','); i < events.length; i++) {
                                        e[0].on(events[i], e[2].bind(this));

                                    }

                                }.bind(this));
                        }
                    };



                    pointer.addEvents();

                    canvas.resize();



                    var scene = {

                        points: {
                            p0: [-70, -80, 20, 1],
                            p1: [0  , -200, 40, 1],
                            p2: [   0,  100, 20, 1],
                            p3: [-46,  100, 20, 1],
                            p4: [ 75, -75, 20, 1],
                            p5: [ 50,  104, 20, 1],
                            p6: [ 50,  244, 20, 0.5],
                            p7: [ -46, 244, 20, 0.5],
                            p8: [ 50, 450, 15, 0.35],
                            p9: [-46, 450, 15, 0.35],
                            p10: [ -181, -80, 20, 0.5],
                            p11: [ 187, -75, 20, 0.5],
                            p14: [ 0, -80],
                            p15: [ 0, -40],

                            mong10: [0, -50 - canvas.height / 20],
                            mong11: [80, 100, 20],
                            mong12: [200, 160, 30]

                        },
                        static: function () {

                            this.points.mong10.position(canvas.width * 0.5 + 2 , -100);

                        },
                        constraints: [

                            ['mong10','mong11'],
                            ['mong11','mong12']


                            //  ['mong12','p14', 0, canvas.height / 3]
                        ],
                        angleConstraints: [
                            ['p0', 'p3', 'p7',  1.2, Math.PI / 1.8, 0.2],
                            ['p4', 'p5', 'p6', -1.2, Math.PI / 1.8, 0.2],
                            ['p3', 'p7', 'p9', -1.2, Math.PI / 1.8, 0.2],
                            ['p5', 'p6', 'p8',  1.2, Math.PI / 1.8, 0.2]
                        ],
                        strokes: [

                            ['#fff', 'mong10', 'mong11']



                        ],
                        images: [


                            ['logo.png', 'mong11', 'mong12', 170, 20 , iwidth, iheight, -1.580]


                        ],
                        build: function () {

                            var p, i, c, o, s;
                            iterator.last = null;
                            for (p in scene.points) {
                                o = scene.points[p];
                                scene.points[p] = new Point (o[0], o[1], o[2], o[3], o[4]);
                            }

                            iterator.last = null;
                            for (i = 0; i < 2; i++) {
                                c = scene.constraints[i];
                                new Constraint (scene.points[c[0]], scene.points[c[1]], c[2], c[3]);
                            }

                            for (i = 0; i < scene.angleConstraints.length; i++) {
                                c = scene.angleConstraints[i];
                                new AngleConstraint (scene.points[c[0]], scene.points[c[1]], scene.points[c[2]], c[3], c[4], c[5]);
                            }

                            iterator.last = null;


                            for (i = 0; i < 1; i++) {
                                s = scene.strokes[0];
                                new Stroke (s[0], scene.points[s[1]], scene.points[s[2]]);
                            }

                            for (i = 0; i < 1; i++) {
                                s = scene.images[0];
                                new Skin (s[0], scene.points[s[1]], scene.points[s[2]], s[3], s[4], s[5], s[6], s[7]);
                            }
                        }

                    };



                    scene.build();



                    run();



                },0);


            });


        };




            return {
                restrict: 'EA',
                scope:true,
                replace:true,
                templateUrl: 'scripts/homepage/models/ksFp.tmpl.html',
                link : link,
                controller:
                    function(){

                        var vm = this;
                        vm.GallerySlide = function(){
                            $.fn.fullpage.moveSlideRight();
                            return false;
                        };
                        vm.scrollDown  = function(){
                            $.fn.fullpage.moveSectionDown();
                        }


                    },
                controllerAs: 'vm',
                bindToController: true

            }
        }]);
})();
