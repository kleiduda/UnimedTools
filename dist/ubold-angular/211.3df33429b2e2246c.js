"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[211],{211:(v,u,o)=>{o.r(u),o.d(u,{DashboardTwoModule:()=>D});var e=o(9808),d=o(4202);const c=[{id:1,productName:"ASOS Ridley High Waist",price:79.49,quantity:82,amount:6518.18},{id:2,productName:"Marco Lightweight Shirt",price:128.5,quantity:37,amount:4754.5},{id:3,productName:"Half Sleeve Shirt",price:39.99,quantity:64,amount:2559.36},{id:4,productName:"Lightweight Jacket",price:20,quantity:184,amount:3680},{id:5,productName:"Marco Shoes",price:28.49,quantity:69,amount:1965.81},{id:6,productName:"ASOS Ridley High Waist",price:79.49,quantity:82,amount:6518.18},{id:7,productName:"Half Sleeve Shirt",price:39.99,quantity:64,amount:2559.36},{id:8,productName:"Lightweight Jacket",price:20,quantity:184,amount:3680}];var t=o(5e3),p=o(9475),m=o(846),r=o(7523),h=o(2115),l=o(5615),f=o(6919);function g(i,s){if(1&i&&(t.\u0275\u0275elementStart(0,"div",24),t.\u0275\u0275element(1,"app-widget-statistics-card2",25),t.\u0275\u0275elementEnd()),2&i){const a=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("variant",a.variant)("description",a.description)("stats",a.stats)("icon",a.icon)("progress",a.progress)("options",a.options)}}function C(i,s){if(1&i&&(t.\u0275\u0275elementStart(0,"div",26),t.\u0275\u0275element(1,"app-widget-chart-statistics",27),t.\u0275\u0275elementEnd()),2&i){const a=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("title",a.title)("icon",a.icon)("stats",a.stats)("variant",a.variant)}}function y(i,s){if(1&i&&(t.\u0275\u0275elementStart(0,"div",26),t.\u0275\u0275element(1,"app-widget-chart-statistics",27),t.\u0275\u0275elementEnd()),2&i){const a=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("title",a.title)("icon",a.icon)("stats",a.stats)("variant",a.variant)}}function S(i,s){if(1&i&&(t.\u0275\u0275elementStart(0,"div",26),t.\u0275\u0275element(1,"app-widget-chart-statistics",27),t.\u0275\u0275elementEnd()),2&i){const a=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("title",a.title)("icon",a.icon)("stats",a.stats)("variant",a.variant)}}function w(i,s){if(1&i&&(t.\u0275\u0275elementStart(0,"tr")(1,"td"),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"td"),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"currency"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"td"),t.\u0275\u0275text(7),t.\u0275\u0275pipe(8,"number"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"td"),t.\u0275\u0275text(10),t.\u0275\u0275pipe(11,"currency"),t.\u0275\u0275elementEnd()()),2&i){const a=s.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(a.productName),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,4,a.price)),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(8,6,a.quantity)),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(11,8,a.amount))}}const b=[{path:"",component:(()=>{class i{constructor(){this.pageTitle=[],this.statisticsData=[],this.salesChartStatistics=[],this.incomeChartStatistics=[],this.userChartStatistics=[],this.sellingProducts=[],this.worldMapConfig={}}ngOnInit(){this.pageTitle=[{label:"Dashboards",path:"/"},{label:"Dashboard 2",path:"/",active:!0}],this._fetchStatisticsData(),this._fetchTopSelllingProducts(),this.initCharts(),this.initMapConfig()}_fetchStatisticsData(){this.statisticsData=[{id:1,variant:"blue",description:"Total Revenue",icon:"fe-aperture",stats:12145,progress:60,options:{prefix:"$"}},{id:2,variant:"success",description:"January's Sales",icon:"fe-shopping-cart",stats:1576,progress:49},{id:3,variant:"warning",description:"Payouts",icon:"fe-bar-chart-2",stats:8947,progress:18,options:{prefix:"$"}},{id:4,variant:"info",description:"Available Stores",icon:"fe-cpu",stats:178,progress:74}]}initCharts(){this._fetchChartStatistics(),this.salesChart={series:[{type:"area",data:[0,23,43,35,44,45,56,37,40]},{type:"area",data:[25,23,26,24,25,32,30,24,19]}],chart:{type:"line",height:240,width:"100%",toolbar:{show:!1}},stroke:{curve:"straight",width:1},fill:{type:"solid",opacity:[.3,.3]},colors:["#00acc1","#f1556c"],xaxis:{labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1}},legend:{show:!1},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(a){return""}}},marker:{show:!1}}},this.incomeChart={series:[{data:[3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12]}],chart:{type:"bar",height:250,width:250,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"65%"}},xaxis:{crosshairs:{width:1}},stroke:{width:0,curve:"smooth"},colors:["#00acc1"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(a){return""}}},marker:{show:!1}}},this.usersChart={series:[20,40,30,10],chart:{type:"pie",height:270},colors:["#00acc1","#4b88e4","#e3eaef","#fd7e14"],legend:{show:!1},dataLabels:{enabled:!1},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(a){return""}}},marker:{show:!1}}}}initMapConfig(){this.worldMapConfig={markers:[{coords:[41.9,12.45],name:"Vatican City"},{coords:[43.73,7.41],name:"Monaco"},{coords:[-.52,166.93],name:"Nauru"},{coords:[-8.51,179.21],name:"Tuvalu"},{coords:[43.93,12.46],name:"San Marino"},{coords:[47.14,9.52],name:"Liechtenstein"},{coords:[7.11,171.06],name:"Marshall Islands"},{coords:[17.3,-62.73],name:"Saint Kitts and Nevis"},{coords:[3.2,73.22],name:"Maldives"},{coords:[35.88,14.5],name:"Malta"},{coords:[12.05,-61.75],name:"Grenada"},{coords:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{coords:[13.16,-59.55],name:"Barbados"},{coords:[17.11,-61.85],name:"Antigua and Barbuda"},{coords:[-4.61,55.45],name:"Seychelles"},{coords:[7.35,134.46],name:"Palau"},{coords:[42.5,1.51],name:"Andorra"},{coords:[14.01,-60.98],name:"Saint Lucia"},{coords:[6.91,158.18],name:"Federated States of Micronesia"},{coords:[1.3,103.8],name:"Singapore"},{coords:[.33,6.73],name:"S\xc3\xa3o Tom\xc3\xa9 and Pr\xc3\xadncipe"}],markerStyle:{initial:{r:9,fill:"#6658dd","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{fill:"#6658dd",stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},backgroundColor:"transparent",hoverOpacity:.7,hoverColor:!1,regionStyle:{initial:{fill:"#ced4da"}}}}_fetchChartStatistics(){this.salesChartStatistics=[{title:"Target",stats:"$7.8k",icon:"fe-arrow-down",variant:"danger"},{title:"Last week",stats:"$1.4k",icon:"fe-arrow-up",variant:"success"},{title:"Last Month",stats:"$9.8k",icon:"fe-arrow-down",variant:"danger"}],this.incomeChartStatistics=[{title:"Target",stats:"641",icon:"fe-arrow-up",variant:"success"},{title:"Last week",stats:"234",icon:"fe-arrow-down",variant:"danger"},{title:"Last Month",stats:"3201",icon:"fe-arrow-up",variant:"success"}],this.userChartStatistics=[{title:"Target",stats:"18k",icon:"fe-arrow-down",variant:"danger"},{title:"Last week",stats:"3.25k",icon:"fe-arrow-up",variant:"success"},{title:"Last Month",stats:"28k",icon:"fe-arrow-down",variant:"danger"}]}_fetchTopSelllingProducts(){this.sellingProducts=c}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["app-dashboard-two"]],decls:45,vars:29,consts:[["title","Dashboard 2",3,"breadcrumbItems"],[1,"row"],["class","col-md-6 col-xl-3",4,"ngFor","ngForOf"],[1,"col-xl-4","col-md-12"],["cardTitle","Lifetime Sales"],[1,"text-center"],["id","lifetime-sales"],[1,"apex-charts","mt-0",3,"series","chart","yaxis","legend","fill","colors","tooltip","xaxis","stroke"],[1,"row","mt-3"],["class","col-4",4,"ngFor","ngForOf"],[1,"col-xl-4","col-md-6"],["cardTitle","Income Amounts"],["id","income-amounts"],[1,"apex-charts",3,"series","chart","plotOptions","colors","tooltip","xaxis","stroke"],["cardTitle","Total Users"],["id","total-users"],[1,"apex-charts",3,"series","chart","legend","colors","dataLabels","tooltip"],[1,"col-xl-6"],["cardTitle","Revenue By Location"],["mapId","world-map-markers","height","433px","width","100%",3,"options"],["cardTitle","Top Selling Products"],[1,"table-responsive"],[1,"table","table-hover","table-centered","mb-0"],[4,"ngFor","ngForOf"],[1,"col-md-6","col-xl-3"],[3,"variant","description","stats","icon","progress","options"],[1,"col-4"],[3,"title","icon","stats","variant"]],template:function(a,n){1&a&&(t.\u0275\u0275element(0,"app-page-title",0),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275template(2,g,2,6,"div",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",1)(4,"div",3)(5,"app-ui-portlet-card",4)(6,"div",5)(7,"div",6),t.\u0275\u0275element(8,"apx-chart",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"div",8),t.\u0275\u0275template(10,C,2,4,"div",9),t.\u0275\u0275elementEnd()()()(),t.\u0275\u0275elementStart(11,"div",10)(12,"app-ui-portlet-card",11)(13,"div",5)(14,"div",12),t.\u0275\u0275element(15,"apx-chart",13),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(16,"div",8),t.\u0275\u0275template(17,y,2,4,"div",9),t.\u0275\u0275elementEnd()()()(),t.\u0275\u0275elementStart(18,"div",10)(19,"app-ui-portlet-card",14)(20,"div",5)(21,"div",15),t.\u0275\u0275element(22,"apx-chart",16),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(23,"div",8),t.\u0275\u0275template(24,S,2,4,"div",9),t.\u0275\u0275elementEnd()()()()(),t.\u0275\u0275elementStart(25,"div",1)(26,"div",17)(27,"app-ui-portlet-card",18),t.\u0275\u0275element(28,"app-widget-world-map",19),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(29,"div",17)(30,"app-ui-portlet-card",20)(31,"div",21)(32,"table",22)(33,"thead")(34,"tr")(35,"th"),t.\u0275\u0275text(36,"Product Name"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(37,"th"),t.\u0275\u0275text(38,"Price"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(39,"th"),t.\u0275\u0275text(40,"Quantity"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(41,"th"),t.\u0275\u0275text(42,"Amount"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(43,"tbody"),t.\u0275\u0275template(44,w,12,10,"tr",23),t.\u0275\u0275elementEnd()()()()()()),2&a&&(t.\u0275\u0275property("breadcrumbItems",n.pageTitle),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",n.statisticsData),t.\u0275\u0275advance(6),t.\u0275\u0275property("series",n.salesChart.series)("chart",n.salesChart.chart)("yaxis",n.salesChart.yaxis)("legend",n.salesChart.legend)("fill",n.salesChart.fill)("colors",n.salesChart.colors)("tooltip",n.salesChart.tooltip)("xaxis",n.salesChart.xaxis)("stroke",n.salesChart.stroke),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",n.salesChartStatistics),t.\u0275\u0275advance(5),t.\u0275\u0275property("series",n.incomeChart.series)("chart",n.incomeChart.chart)("plotOptions",n.incomeChart.plotOptions)("colors",n.incomeChart.colors)("tooltip",n.incomeChart.tooltip)("xaxis",n.incomeChart.xaxis)("stroke",n.incomeChart.stroke),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",n.incomeChartStatistics),t.\u0275\u0275advance(5),t.\u0275\u0275property("series",n.usersChart.series)("chart",n.usersChart.chart)("legend",n.usersChart.legend)("colors",n.usersChart.colors)("dataLabels",n.usersChart.dataLabels)("tooltip",n.usersChart.tooltip),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",n.userChartStatistics),t.\u0275\u0275advance(4),t.\u0275\u0275property("options",n.worldMapConfig),t.\u0275\u0275advance(16),t.\u0275\u0275property("ngForOf",n.sellingProducts))},directives:[p.T,e.NgForOf,m.T,r._,h.x,l.l,f.A],pipes:[e.CurrencyPipe,e.DecimalPipe],styles:[""]}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=t.\u0275\u0275defineInjector({imports:[[d.Bz.forChild(b)],d.Bz]}),i})();var E=o(1819),x=o(9095),M=o(9668);let D=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=t.\u0275\u0275defineInjector({imports:[[e.CommonModule,M.W,E.y,x.p,h.X,T]]}),i})()},9475:(v,u,o)=>{o.d(u,{T:()=>m});var e=o(5e3),d=o(9808);function c(r,h){if(1&r&&(e.\u0275\u0275elementStart(0,"li",5)(1,"a",11),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()),2&r){const l=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(l.label)}}function t(r,h){if(1&r&&(e.\u0275\u0275elementStart(0,"li",12)(1,"a",13),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()),2&r){const l=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(l.label)}}function p(r,h){if(1&r&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,c,3,1,"li",9),e.\u0275\u0275template(2,t,3,1,"li",10),e.\u0275\u0275elementContainerEnd()),2&r){const l=h.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!l.active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",l.active)}}let m=(()=>{class r{constructor(){this.breadcrumbItems=[],this.title=""}ngOnInit(){}}return r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(l,f){1&l&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),e.\u0275\u0275text(7,"UBold"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(8,p,3,2,"ng-container",7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"h4",8),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd()()()()),2&l&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("ngForOf",f.breadcrumbItems),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(f.title))},directives:[d.NgForOf,d.NgIf],styles:[""]}),r})()},9095:(v,u,o)=>{o.d(u,{p:()=>c});var e=o(9808),d=o(5e3);let c=(()=>{class t{}return t.\u0275fac=function(m){return new(m||t)},t.\u0275mod=d.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=d.\u0275\u0275defineInjector({imports:[[e.CommonModule]]}),t})()},5615:(v,u,o)=>{o.d(u,{l:()=>d});var e=o(5e3);let d=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["app-widget-chart-statistics"]],inputs:{title:"title",icon:"icon",stats:"stats",variant:"variant"},decls:5,vars:6,consts:[[1,"text-muted","font-15","mb-1","text-truncate"]],template:function(p,m){1&p&&(e.\u0275\u0275elementStart(0,"p",0),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"h4"),e.\u0275\u0275element(3,"i"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()),2&p&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(m.title),e.\u0275\u0275advance(2),e.\u0275\u0275classMapInterpolate2("",m.icon," text-",m.variant," me-1"),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(m.stats))},styles:[""]}),c})()}}]);