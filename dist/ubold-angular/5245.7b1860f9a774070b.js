"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[5245],{5245:(f,p,r)=>{r.r(p),r.d(p,{DashboardFourModule:()=>I});var a=r(9808),m=r(2115),c=r(7114),l=r(9668),u=r(1819),g=r(9095),i=r(4202);const d=[{id:1,name:"App design and development",startDate:"Jan 03, 2015",dueDate:"Oct 12, 2018",teamMembers:[{image:"assets/images/users/user-1.jpg",name:"Mat Helme"},{image:"assets/images/users/user-2.jpg",name:"Michael Zenaty"},{image:"assets/images/users/user-3.jpg",name:"James Anderson"},{image:"assets/images/users/user-5.jpg",name:"Username"}],status:"Work in Progress",clients:"Halette Boivin"},{id:2,name:"Coffee detail page - Main Page",startDate:"Sep 21, 2016",dueDate:"May 05, 2018",teamMembers:[{image:"assets/images/users/user-3.jpg",name:"Mat Helme"},{image:"assets/images/users/user-4.jpg",name:"Michael Zenaty"},{image:"assets/images/users/user-5.jpg",name:"Username"}],status:"Pending",clients:"Durandana Jolicoeur"},{id:3,name:"Poster illustation design",startDate:"Mar 08, 2018",dueDate:"Sep 22, 2018",teamMembers:[{image:"assets/images/users/user-2.jpg",name:"Mat Helme"},{image:"assets/images/users/user-6.jpg",name:"Michael Zenaty"},{image:"assets/images/users/user-7.jpg",name:"Username"}],status:"Completed",clients:"Lucas Sabourin"},{id:4,name:"Drinking bottle graphics",startDate:"Oct 10, 2017",dueDate:"May 07, 2018",teamMembers:[{image:"assets/images/users/user-9.jpg",name:"Mat Helme"},{image:"assets/images/users/user-10.jpg",name:"Michael Zenaty"},{image:"assets/images/users/user-1.jpg",name:"Username"}],status:"Work in Progress",clients:"Donatien Brunelle"},{id:5,name:"Landing page design - Home",startDate:"Coming Soon",dueDate:"May 25, 2021",teamMembers:[{image:"assets/images/users/user-5.jpg",name:"Mat Helme"},{image:"assets/images/users/user-8.jpg",name:"Michael Zenaty"},{image:"assets/images/users/user-2.jpg",name:"James Anderson"},{image:"assets/images/users/user-7.jpg",name:"Username"}],status:"Coming Soon",clients:"Karel Auberjo"}];var e=r(5e3),h=r(9475),v=r(7523),b=r(5269),C=r(9570);function x(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"div",28),e.\u0275\u0275element(1,"app-widget-user-card",29),e.\u0275\u0275elementEnd()),2&t){const s=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("user",s)}}function y(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"a",37),e.\u0275\u0275element(1,"img",38),e.\u0275\u0275elementEnd()),2&t){const s=o.$implicit;e.\u0275\u0275property("ngbTooltip",s.name),e.\u0275\u0275advance(1),e.\u0275\u0275property("src",s.image,e.\u0275\u0275sanitizeUrl)}}function D(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"span",39),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const s=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(s.status)}}function S(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"span",40),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const s=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(s.status)}}function E(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"span",41),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const s=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(s.status)}}function M(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"span",42),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const s=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(s.status)}}function T(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"tr")(1,"td"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td",30)(8,"div",31),e.\u0275\u0275template(9,y,2,2,"a",32),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"td"),e.\u0275\u0275template(11,D,2,1,"span",33),e.\u0275\u0275template(12,S,2,1,"span",34),e.\u0275\u0275template(13,E,2,1,"span",35),e.\u0275\u0275template(14,M,2,1,"span",36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"td"),e.\u0275\u0275text(16),e.\u0275\u0275elementEnd()()),2&t){const s=o.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.startDate),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.dueDate),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",s.teamMembers),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf","Work in Progress"===s.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","Pending"===s.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","Completed"===s.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","Coming Soon"===s.status),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.clients)}}const j=[{path:"",component:(()=>{class t{constructor(){this.pageTitle=[],this.users=[],this.projectsData=[]}ngOnInit(){this.pageTitle=[{label:"Dashboards",path:"/"},{label:"Dashboard 4",path:"/",active:!0}],this.initChart(),this._fetchUsers(),this._fetchProjects()}initChart(){this.salesChart={series:[12,30,20],chart:{type:"donut",height:273},plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!0,formatter:function(s){return s}},value:{show:!0,formatter:function(s){return s}}}}}},states:{hover:{filter:{type:"darken",value:.7}}},dataLabels:{enabled:!1},colors:["#6658dd","#4fc6e1","#ebeff2"],legend:{show:!1},labels:["Total Sales","Campaign Send","Daily Sales"],tooltip:{enabled:!1}},this.statisticsChart={series:[{name:"Statistics",data:[87,75,50,75,50,38,72]}],chart:{type:"bar",height:273,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"20%"}},dataLabels:{enabled:!1},xaxis:{categories:["2012","2013","2014","2015","2016","2017","2018"],axisBorder:{show:!1},axisTicks:{show:!1}},colors:["#00acc1"]},this.incomeChart={series:[{name:"Litecoin",type:"area",data:[20,65,40,65,40,65,60]},{name:"Bitcoin",type:"line",data:[20,95,60,95,70,95,110]}],chart:{height:273,type:"line",toolbar:{show:!1},stacked:!1},stroke:{width:[1,2]},dataLabels:{enabled:!1},legend:{show:!1},fill:{type:"solid",opacity:[.3,.7]},colors:["#4a81d4","#e8ebed"],xaxis:{categories:["2012","2013","2014","2015","2016","2017","2018"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{tickAmount:4,min:0,max:200}}}_fetchUsers(){this.users=[{id:1,name:"Thelma Fridley",title:"Admin User",avatar:"assets/images/users/user-3.jpg"},{id:2,name:"Chandler Hervieux",title:"Manager",avatar:"assets/images/users/user-4.jpg"},{id:3,name:"Percy Demers",title:"Director",avatar:"assets/images/users/user-5.jpg"},{id:4,name:"Antoine Masson",title:"Premium User",avatar:"assets/images/users/user-6.jpg",premiumUser:!0}]}_fetchProjects(){this.projectsData=d}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-dashboard-four"]],decls:62,vars:35,consts:[["title","Dashboard 4",3,"breadcrumbItems"],[1,"row"],[1,"col-xl-4","col-md-6"],["cardTitle","Lifetime Sales"],[1,"text-center"],[1,"row","mt-2"],[1,"col-4"],["label","Total Sales","labelCssClasses","font-13 text-truncate",3,"stats"],["label","Open Campaign","labelCssClasses","font-13 text-truncate",3,"stats"],["label","Daily Sales","labelCssClasses","font-13 text-truncate",3,"stats"],["dir","ltr"],["id","lifetime-sales",1,"mt-4"],[1,"apex-charts",3,"series","chart","plotOptions","colors","labels","legend","states","dataLabels","tooltip"],["cardTitle","Statistics"],[1,"col-6"],["id","statistics"],[1,"apex-charts",3,"series","chart","plotOptions","colors","xaxis","dataLabels"],[1,"col-xl-4","col-md-12"],["cardTitle","Income Amounts"],["id","income-amounts"],[1,"apex-charts",3,"series","chart","stroke","colors","fill","legend","dataLabels","xaxis","yaxis"],["class","col-md-6 col-xl-3",4,"ngFor","ngForOf"],[1,"col-12"],["cardTitle","Projects"],[1,"table-responsive"],[1,"table","table-centered","table-nowrap","table-borderless","mb-0"],[1,"table-light"],[4,"ngFor","ngForOf"],[1,"col-md-6","col-xl-3"],[3,"user"],["id","tooltip-container"],[1,"avatar-group"],["href","javascript: void(0);","class","avatar-group-item me-1","placement","top",3,"ngbTooltip",4,"ngFor","ngForOf"],["class","badge bg-soft-info text-info p-1",4,"ngIf"],["class","badge bg-soft-warning text-warning p-1",4,"ngIf"],["class","badge bg-soft-success text-success p-1",4,"ngIf"],["class","badge bg-soft-dark text-dark p-1",4,"ngIf"],["href","javascript: void(0);","placement","top",1,"avatar-group-item","me-1",3,"ngbTooltip"],["alt","friend",1,"rounded-circle","avatar-xs",3,"src"],[1,"badge","bg-soft-info","text-info","p-1"],[1,"badge","bg-soft-warning","text-warning","p-1"],[1,"badge","bg-soft-success","text-success","p-1"],[1,"badge","bg-soft-dark","text-dark","p-1"]],template:function(s,n){1&s&&(e.\u0275\u0275element(0,"app-page-title",0),e.\u0275\u0275elementStart(1,"div",1)(2,"div",2)(3,"app-ui-portlet-card",3)(4,"div",4)(5,"div",5)(6,"div",6),e.\u0275\u0275element(7,"app-widget-statistics",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",6),e.\u0275\u0275element(9,"app-widget-statistics",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",6),e.\u0275\u0275element(11,"app-widget-statistics",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",10)(13,"div",11),e.\u0275\u0275element(14,"apx-chart",12),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(15,"div",2)(16,"app-ui-portlet-card",13)(17,"div",4)(18,"div",5)(19,"div",14),e.\u0275\u0275element(20,"app-widget-statistics",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",14),e.\u0275\u0275element(22,"app-widget-statistics",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(23,"div",10)(24,"div",15),e.\u0275\u0275element(25,"apx-chart",16),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(26,"div",17)(27,"app-ui-portlet-card",18)(28,"div",4)(29,"div",5)(30,"div",6),e.\u0275\u0275element(31,"app-widget-statistics",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"div",6),e.\u0275\u0275element(33,"app-widget-statistics",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"div",6),e.\u0275\u0275element(35,"app-widget-statistics",9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(36,"div",10)(37,"div",19),e.\u0275\u0275element(38,"apx-chart",20),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(39,"div",1),e.\u0275\u0275template(40,x,2,1,"div",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"div",1)(42,"div",22)(43,"app-ui-portlet-card",23)(44,"div",24)(45,"table",25)(46,"thead",26)(47,"tr")(48,"th"),e.\u0275\u0275text(49,"Project Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"th"),e.\u0275\u0275text(51,"Start Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(52,"th"),e.\u0275\u0275text(53,"Due Date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"th"),e.\u0275\u0275text(55,"Team"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"th"),e.\u0275\u0275text(57,"Status"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"th"),e.\u0275\u0275text(59,"Clients"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(60,"tbody"),e.\u0275\u0275template(61,T,17,9,"tr",27),e.\u0275\u0275elementEnd()()()()()()),2&s&&(e.\u0275\u0275property("breadcrumbItems",n.pageTitle),e.\u0275\u0275advance(7),e.\u0275\u0275property("stats",3487),e.\u0275\u0275advance(2),e.\u0275\u0275property("stats",814),e.\u0275\u0275advance(2),e.\u0275\u0275property("stats",5324),e.\u0275\u0275advance(3),e.\u0275\u0275property("series",n.salesChart.series)("chart",n.salesChart.chart)("plotOptions",n.salesChart.plotOptions)("colors",n.salesChart.colors)("labels",n.salesChart.labels)("legend",n.salesChart.legend)("states",n.salesChart.states)("dataLabels",n.salesChart.dataLabels)("tooltip",n.salesChart.tooltip),e.\u0275\u0275advance(6),e.\u0275\u0275property("stats",1284),e.\u0275\u0275advance(2),e.\u0275\u0275property("stats",7841),e.\u0275\u0275advance(3),e.\u0275\u0275property("series",n.statisticsChart.series)("chart",n.statisticsChart.chart)("plotOptions",n.statisticsChart.plotOptions)("colors",n.statisticsChart.colors)("xaxis",n.statisticsChart.xaxis)("dataLabels",n.statisticsChart.dataLabels),e.\u0275\u0275advance(6),e.\u0275\u0275property("stats",2845),e.\u0275\u0275advance(2),e.\u0275\u0275property("stats",6487),e.\u0275\u0275advance(2),e.\u0275\u0275property("stats",201),e.\u0275\u0275advance(3),e.\u0275\u0275property("series",n.incomeChart.series)("chart",n.incomeChart.chart)("stroke",n.incomeChart.stroke)("colors",n.incomeChart.colors)("fill",n.incomeChart.fill)("legend",n.incomeChart.legend)("dataLabels",n.incomeChart.dataLabels)("xaxis",n.incomeChart.xaxis)("yaxis",n.incomeChart.yaxis),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",n.users),e.\u0275\u0275advance(21),e.\u0275\u0275property("ngForOf",n.projectsData))},directives:[h.T,v._,b.$,m.x,a.NgForOf,C.r,c._L,a.NgIf],styles:[""]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[i.Bz.forChild(j)],i.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[a.CommonModule,m.X,c.HK,g.p,l.W,u.y,_]]}),t})()},9475:(f,p,r)=>{r.d(p,{T:()=>g});var a=r(5e3),m=r(9808);function c(i,d){if(1&i&&(a.\u0275\u0275elementStart(0,"li",5)(1,"a",11),a.\u0275\u0275text(2),a.\u0275\u0275elementEnd()()),2&i){const e=a.\u0275\u0275nextContext().$implicit;a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(e.label)}}function l(i,d){if(1&i&&(a.\u0275\u0275elementStart(0,"li",12)(1,"a",13),a.\u0275\u0275text(2),a.\u0275\u0275elementEnd()()),2&i){const e=a.\u0275\u0275nextContext().$implicit;a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(e.label)}}function u(i,d){if(1&i&&(a.\u0275\u0275elementContainerStart(0),a.\u0275\u0275template(1,c,3,1,"li",9),a.\u0275\u0275template(2,l,3,1,"li",10),a.\u0275\u0275elementContainerEnd()),2&i){const e=d.$implicit;a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",!e.active),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",e.active)}}let g=(()=>{class i{constructor(){this.breadcrumbItems=[],this.title=""}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.\u0275\u0275defineComponent({type:i,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(e,h){1&e&&(a.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),a.\u0275\u0275text(7,"UBold"),a.\u0275\u0275elementEnd()(),a.\u0275\u0275template(8,u,3,2,"ng-container",7),a.\u0275\u0275elementEnd()(),a.\u0275\u0275elementStart(9,"h4",8),a.\u0275\u0275text(10),a.\u0275\u0275elementEnd()()()()),2&e&&(a.\u0275\u0275advance(8),a.\u0275\u0275property("ngForOf",h.breadcrumbItems),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(h.title))},directives:[m.NgForOf,m.NgIf],styles:[""]}),i})()},9095:(f,p,r)=>{r.d(p,{p:()=>c});var a=r(9808),m=r(5e3);let c=(()=>{class l{}return l.\u0275fac=function(g){return new(g||l)},l.\u0275mod=m.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=m.\u0275\u0275defineInjector({imports:[[a.CommonModule]]}),l})()}}]);