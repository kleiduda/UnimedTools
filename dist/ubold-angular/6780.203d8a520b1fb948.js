"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[6780],{6780:(s,r,a)=>{a.r(r),a.d(r,{AnimationModule:()=>v});var t=a(9808),l=a(3075),g=a(9095),u=a(4202),e=a(5e3),c=a(9475);const d=[{path:"",component:(()=>{class n{constructor(){this.pageTitle=[],this.animationType="bounce"}ngOnInit(){this.pageTitle=[{label:"Extended UI",path:"/"},{label:"Animation",path:"/",active:!0}]}triggerAnimation(){let o=document.getElementById("animationSandbox");null==o||o.classList.add("animate__"+this.animationType,"animate__animated"),null==o||o.addEventListener("animationend",()=>{null==o||o.classList.remove("animate__"+this.animationType,"animate__animated")})}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-extended-ui-animation"]],decls:229,vars:2,consts:[["title","Animation",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"header-title"],[1,"sub-header"],[1,"text-center"],["id","animationSandbox"],["src","../assets/images/macbook.png","alt","",1,"img-fluid","center-block"],[1,"mt-5"],[1,"row","justify-content-center"],[1,"col-sm-8"],[1,"input-group"],["name","animation",1,"form-select","js--animations",3,"ngModel","ngModelChange","change"],["label","Attention Seekers"],["value","bounce"],["value","flash"],["value","pulse"],["value","rubberBand"],["value","shakeX"],["value","shakeY"],["value","headShake"],["value","swing"],["value","tada"],["value","wobble"],["value","jello"],["value","heartBeat"],["label","Back entrances"],["value","backInDown"],["value","backInLeft"],["value","backInRight"],["value","backInUp"],["label","Back exits"],["value","backOutDown"],["value","backOutLeft"],["value","backOutRight"],["value","backOutUp"],["label","Bouncing entrances"],["value","bounceIn"],["value","bounceInDown"],["value","bounceInLeft"],["value","bounceInRight"],["value","bounceInUp"],["label","Bouncing exits"],["value","bounceOut"],["value","bounceOutDown"],["value","bounceOutLeft"],["value","bounceOutRight"],["value","bounceOutUp"],["label","Fading Entrances"],["value","fadeIn"],["value","fadeInDown"],["value","fadeInDownBig"],["value","fadeInLeft"],["value","fadeInLeftBig"],["value","fadeInRight"],["value","fadeInRightBig"],["value","fadeInUp"],["value","fadeInUpBig"],["value","fadeInTopLeft"],["value","fadeInTopRight"],["value","fadeInBottomLeft"],["value","fadeInBottomRight"],["label","Fading Exits"],["value","fadeOut"],["value","fadeOutDown"],["value","fadeOutDownBig"],["value","fadeOutLeft"],["value","fadeOutLeftBig"],["value","fadeOutRight"],["value","fadeOutRightBig"],["value","fadeOutUp"],["value","fadeOutUpBig"],["value","fadeOutTopLeft"],["value","fadeOutTopRight"],["value","fadeOutBottomRight"],["value","fadeOutBottomLeft"],["label","Flippers"],["value","flip"],["value","flipInX"],["value","flipInY"],["value","flipOutX"],["value","flipOutY"],["label","Lightspeed"],["value","lightSpeedInRight"],["value","lightSpeedInLeft"],["value","lightSpeedOutRight"],["value","lightSpeedOutLeft"],["label","Rotating Entrances"],["value","rotateIn"],["value","rotateInDownLeft"],["value","rotateInDownRight"],["value","rotateInUpLeft"],["value","rotateInUpRight"],["label","Rotating Exits"],["value","rotateOut"],["value","rotateOutDownLeft"],["value","rotateOutDownRight"],["value","rotateOutUpLeft"],["value","rotateOutUpRight"],["label","Specials"],["value","hinge"],["value","jackInTheBox"],["value","rollIn"],["value","rollOut"],["label","Sliding Entrances"],["value","slideInDown"],["value","slideInLeft"],["value","slideInRight"],["value","slideInUp"],["label","Sliding exits"],["value","slideOutDown"],["value","slideOutLeft"],["value","slideOutRight"],["value","slideOutUp"],["label","Zooming entrances"],["value","zoomIn"],["value","zoomInDown"],["value","zoomInLeft"],["value","zoomInRight"],["value","zoomInUp"],["label","Zooming exits"],["value","zoomOut"],["value","zoomOutDown"],["value","zoomOutLeft"],["value","zoomOutRight"],["value","zoomOutUp"],["type","button",1,"btn","input-group-text","btn-primary","waves-light","waves-effect","js--triggerAnimation",3,"click"]],template:function(o,f){1&o&&(e.\u0275\u0275element(0,"app-page-title",0),e.\u0275\u0275elementStart(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e.\u0275\u0275text(6,"CSS3 Animation"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"p",6),e.\u0275\u0275text(8," Just-add-water CSS animations. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",7)(10,"div",8),e.\u0275\u0275element(11,"img",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"form",10)(13,"div",11)(14,"div",12)(15,"div",13)(16,"select",14),e.\u0275\u0275listener("ngModelChange",function(S){return f.animationType=S})("change",function(){return f.triggerAnimation()}),e.\u0275\u0275elementStart(17,"optgroup",15)(18,"option",16),e.\u0275\u0275text(19,"bounce"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"option",17),e.\u0275\u0275text(21,"flash"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"option",18),e.\u0275\u0275text(23,"pulse"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"option",19),e.\u0275\u0275text(25,"rubberBand"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"option",20),e.\u0275\u0275text(27,"shakeX"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"option",21),e.\u0275\u0275text(29,"shakeY"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"option",22),e.\u0275\u0275text(31,"headShake"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"option",23),e.\u0275\u0275text(33,"swing"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"option",24),e.\u0275\u0275text(35,"tada"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"option",25),e.\u0275\u0275text(37,"wobble"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"option",26),e.\u0275\u0275text(39,"jello"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"option",27),e.\u0275\u0275text(41,"heartBeat"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(42,"optgroup",28)(43,"option",29),e.\u0275\u0275text(44,"backInDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"option",30),e.\u0275\u0275text(46,"backInLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(47,"option",31),e.\u0275\u0275text(48,"backInRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(49,"option",32),e.\u0275\u0275text(50,"backInUp"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(51,"optgroup",33)(52,"option",34),e.\u0275\u0275text(53,"backOutDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"option",35),e.\u0275\u0275text(55,"backOutLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"option",36),e.\u0275\u0275text(57,"backOutRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"option",37),e.\u0275\u0275text(59,"backOutUp"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(60,"optgroup",38)(61,"option",39),e.\u0275\u0275text(62,"bounceIn"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(63,"option",40),e.\u0275\u0275text(64,"bounceInDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(65,"option",41),e.\u0275\u0275text(66,"bounceInLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(67,"option",42),e.\u0275\u0275text(68,"bounceInRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"option",43),e.\u0275\u0275text(70,"bounceInUp"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(71,"optgroup",44)(72,"option",45),e.\u0275\u0275text(73,"bounceOut"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(74,"option",46),e.\u0275\u0275text(75,"bounceOutDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(76,"option",47),e.\u0275\u0275text(77,"bounceOutLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(78,"option",48),e.\u0275\u0275text(79,"bounceOutRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(80,"option",49),e.\u0275\u0275text(81,"bounceOutUp"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(82,"optgroup",50)(83,"option",51),e.\u0275\u0275text(84,"fadeIn"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(85,"option",52),e.\u0275\u0275text(86,"fadeInDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(87,"option",53),e.\u0275\u0275text(88,"fadeInDownBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(89,"option",54),e.\u0275\u0275text(90,"fadeInLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(91,"option",55),e.\u0275\u0275text(92,"fadeInLeftBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(93,"option",56),e.\u0275\u0275text(94,"fadeInRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(95,"option",57),e.\u0275\u0275text(96,"fadeInRightBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(97,"option",58),e.\u0275\u0275text(98,"fadeInUp"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(99,"option",59),e.\u0275\u0275text(100,"fadeInUpBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(101,"option",60),e.\u0275\u0275text(102,"fadeInTopLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(103,"option",61),e.\u0275\u0275text(104,"fadeInTopRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(105,"option",62),e.\u0275\u0275text(106,"fadeInBottomLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(107,"option",63),e.\u0275\u0275text(108,"fadeInBottomRight"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(109,"optgroup",64)(110,"option",65),e.\u0275\u0275text(111,"fadeOut"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(112,"option",66),e.\u0275\u0275text(113,"fadeOutDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(114,"option",67),e.\u0275\u0275text(115,"fadeOutDownBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(116,"option",68),e.\u0275\u0275text(117,"fadeOutLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(118,"option",69),e.\u0275\u0275text(119,"fadeOutLeftBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(120,"option",70),e.\u0275\u0275text(121,"fadeOutRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(122,"option",71),e.\u0275\u0275text(123,"fadeOutRightBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(124,"option",72),e.\u0275\u0275text(125,"fadeOutUp"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(126,"option",73),e.\u0275\u0275text(127,"fadeOutUpBig"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(128,"option",74),e.\u0275\u0275text(129,"fadeOutTopLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(130,"option",75),e.\u0275\u0275text(131,"fadeOutTopRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(132,"option",76),e.\u0275\u0275text(133,"fadeOutBottomRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(134,"option",77),e.\u0275\u0275text(135,"fadeOutBottomLeft"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(136,"optgroup",78)(137,"option",79),e.\u0275\u0275text(138,"flip"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(139,"option",80),e.\u0275\u0275text(140,"flipInX"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(141,"option",81),e.\u0275\u0275text(142,"flipInY"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(143,"option",82),e.\u0275\u0275text(144,"flipOutX"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(145,"option",83),e.\u0275\u0275text(146,"flipOutY"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(147,"optgroup",84)(148,"option",85),e.\u0275\u0275text(149,"lightSpeedInRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(150,"option",86),e.\u0275\u0275text(151,"lightSpeedInLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(152,"option",87),e.\u0275\u0275text(153,"lightSpeedOutRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(154,"option",88),e.\u0275\u0275text(155,"lightSpeedOutLeft"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(156,"optgroup",89)(157,"option",90),e.\u0275\u0275text(158,"rotateIn"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(159,"option",91),e.\u0275\u0275text(160,"rotateInDownLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(161,"option",92),e.\u0275\u0275text(162,"rotateInDownRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(163,"option",93),e.\u0275\u0275text(164,"rotateInUpLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(165,"option",94),e.\u0275\u0275text(166,"rotateInUpRight"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(167,"optgroup",95)(168,"option",96),e.\u0275\u0275text(169,"rotateOut"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(170,"option",97),e.\u0275\u0275text(171,"rotateOutDownLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(172,"option",98),e.\u0275\u0275text(173,"rotateOutDownRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(174,"option",99),e.\u0275\u0275text(175,"rotateOutUpLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(176,"option",100),e.\u0275\u0275text(177,"rotateOutUpRight"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(178,"optgroup",101)(179,"option",102),e.\u0275\u0275text(180,"hinge"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(181,"option",103),e.\u0275\u0275text(182,"jackInTheBox"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(183,"option",104),e.\u0275\u0275text(184,"rollIn"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(185,"option",105),e.\u0275\u0275text(186,"rollOut"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(187,"optgroup",106)(188,"option",107),e.\u0275\u0275text(189,"slideInDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(190,"option",108),e.\u0275\u0275text(191,"slideInLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(192,"option",109),e.\u0275\u0275text(193,"slideInRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(194,"option",110),e.\u0275\u0275text(195,"slideInUp"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(196,"optgroup",111)(197,"option",112),e.\u0275\u0275text(198,"slideOutUp"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(199,"option",113),e.\u0275\u0275text(200,"slideOutDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(201,"option",114),e.\u0275\u0275text(202,"slideOutLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(203,"option",115),e.\u0275\u0275text(204,"slideOutRight"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(205,"optgroup",116)(206,"option",117),e.\u0275\u0275text(207,"zoomIn"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(208,"option",118),e.\u0275\u0275text(209,"zoomInDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(210,"option",119),e.\u0275\u0275text(211,"zoomInLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(212,"option",120),e.\u0275\u0275text(213,"zoomInRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(214,"option",121),e.\u0275\u0275text(215,"zoomInUp"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(216,"optgroup",122)(217,"option",123),e.\u0275\u0275text(218,"zoomOut"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(219,"option",124),e.\u0275\u0275text(220,"zoomOutDown"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(221,"option",125),e.\u0275\u0275text(222,"zoomOutLeft"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(223,"option",126),e.\u0275\u0275text(224,"zoomOutRight"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(225,"option",127),e.\u0275\u0275text(226,"zoomOutUp"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(227,"button",128),e.\u0275\u0275listener("click",function(){return f.triggerAnimation()}),e.\u0275\u0275text(228,"Animate Me !"),e.\u0275\u0275elementEnd()()()()()()()()()),2&o&&(e.\u0275\u0275property("breadcrumbItems",f.pageTitle),e.\u0275\u0275advance(16),e.\u0275\u0275property("ngModel",f.animationType))},directives:[c.T,l._Y,l.JL,l.F,l.EJ,l.JJ,l.On,l.YN,l.Kr],styles:[""]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.Bz.forChild(d)],u.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[t.CommonModule,l.u5,g.p,m]]}),n})()},9475:(s,r,a)=>{a.d(r,{T:()=>c});var t=a(5e3),l=a(9808);function g(i,d){if(1&i&&(t.\u0275\u0275elementStart(0,"li",5)(1,"a",11),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd()()),2&i){const m=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(m.label)}}function u(i,d){if(1&i&&(t.\u0275\u0275elementStart(0,"li",12)(1,"a",13),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd()()),2&i){const m=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(m.label)}}function e(i,d){if(1&i&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,g,3,1,"li",9),t.\u0275\u0275template(2,u,3,1,"li",10),t.\u0275\u0275elementContainerEnd()),2&i){const m=d.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!m.active),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",m.active)}}let c=(()=>{class i{constructor(){this.breadcrumbItems=[],this.title=""}ngOnInit(){}}return i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(m,v){1&m&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),t.\u0275\u0275text(7,"UBold"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(8,e,3,2,"ng-container",7),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(9,"h4",8),t.\u0275\u0275text(10),t.\u0275\u0275elementEnd()()()()),2&m&&(t.\u0275\u0275advance(8),t.\u0275\u0275property("ngForOf",v.breadcrumbItems),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(v.title))},directives:[l.NgForOf,l.NgIf],styles:[""]}),i})()},9095:(s,r,a)=>{a.d(r,{p:()=>g});var t=a(9808),l=a(5e3);let g=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=l.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=l.\u0275\u0275defineInjector({imports:[[t.CommonModule]]}),u})()}}]);