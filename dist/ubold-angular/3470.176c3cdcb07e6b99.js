"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[3470],{3470:(L,b,n)=>{n.r(b),n.d(b,{OrdersModule:()=>F});var v=n(9808),l=n(3075),f=n(1413),g=n(9095),y=n(1819),u=n(4202),d=n(9591),e=n(5e3),S=n(2313),T=n(9475),O=n(3878),C=n(9699);const D=["advancedTable"],z=[{path:"",component:(()=>{class s{constructor(t,a,r){this.router=t,this.route=a,this.sanitizer=r,this.pageTitle=[],this.orderList=[],this.selectAll=!1,this.OrderStatusGroup="All",this.loading=!1,this.columns=[]}ngOnInit(){this.pageTitle=[{label:"Ecommerce",path:"/"},{label:"Orders",path:"/",active:!0}],this._fetchData(),this.initAdvancedTableData()}_fetchData(){this.orderList=d.Rb}ngAfterViewInit(){}initAdvancedTableData(){this.columns=[{name:"order_id",label:"Order ID",formatter:this.orderIDFormatter.bind(this)},{name:"products",label:"Products",formatter:this.productsFormatter.bind(this)},{name:"order_date",label:"Date",formatter:this.orderDateFormatter.bind(this)},{name:"payment_status",label:"Payment Status",formatter:this.ordePaymentStatusFormatter.bind(this)},{name:"total",label:"Total",formatter:t=>t.total},{name:"payment_method",label:"Payment Method",formatter:t=>t.payment_method},{name:"order_status",label:"Order Status",formatter:this.orderStatusFormatter.bind(this)},{name:"Action",label:"Action",sort:!1,formatter:this.orderActionFormatter.bind(this)}]}handleTableLoad(t){document.querySelectorAll(".order").forEach(a=>{a.addEventListener("click",()=>{this.router.navigate(["../order/details"],{relativeTo:this.route,queryParams:{id:a.id}})})})}orderIDFormatter(t){return this.sanitizer.bypassSecurityTrustHtml(`<a href="javascript:void(0)" class="order text-body fw-bold" id="${t.id}">#UB${t.order_id}</a> `)}productsFormatter(t){let a="";for(let r=0;r<t.products.length;r++)a+=`<a href="javascript:void(0)"><img src="${t.products[r]}" alt="product-img" height="32" /></a>`;return this.sanitizer.bypassSecurityTrustHtml(a)}orderDateFormatter(t){return this.sanitizer.bypassSecurityTrustHtml(`${t.order_date} <small class="text-muted">${t.order_time}</small>`)}ordePaymentStatusFormatter(t){return this.sanitizer.bypassSecurityTrustHtml("Paid"==t.payment_status?'<h5><span class="badge bg-soft-success text-success"><i class="mdi mdi-bitcoin"></i> Paid</span></h5>':"Awaiting Authorization"==t.payment_status?'<h5><span class="badge bg-soft-warning text-warning"><i class="mdi mdi-timer-sand"></i> Awaiting Authorization</span></h5>':"Payment Failed"==t.payment_status?' <h5><span class="badge bg-soft-danger text-danger"><i class="mdi mdi-cancel"></i> Payment Failed</span></h5>':'<h5><span class="badge bg-soft-info text-info"><i class="mdi mdi-cash"></i> Cash On Delivery</span></h5>')}orderStatusFormatter(t){return this.sanitizer.bypassSecurityTrustHtml("Processing"==t.order_status?'<h5><span class="badge bg-warning">Processing</span></h5>':"Delivered"==t.order_status?'<h5><span class="badge bg-success">Delivered</span></h5>':"Shipped"==t.order_status?'<h5><span class="badge bg-info">Shipped</span></h5>':'<h5><span class="badge bg-danger">Cancelled</span></h5>')}orderActionFormatter(t){return this.sanitizer.bypassSecurityTrustHtml('<a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>\n           <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>\n           <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>')}matches(t,a){var r,i,m,c,h,p;return(null===(r=t.order_id)||void 0===r?void 0:r.toLowerCase().includes(a))||(null===(i=t.order_date)||void 0===i?void 0:i.toLowerCase().includes(a))||(null===(m=t.total)||void 0===m?void 0:m.toLowerCase().includes(a))||(null===(c=t.payment_method)||void 0===c?void 0:c.toLowerCase().includes(a))||(null===(h=t.payment_status)||void 0===h?void 0:h.toLowerCase().includes(a))||(null===(p=t.order_status)||void 0===p?void 0:p.toLocaleLowerCase().includes(a))}searchData(t){if(""===t)this._fetchData();else{let a=d.Rb;a=a.filter(r=>this.matches(r,t)),this.orderList=a}}changeOrderStatusGroup(t){this.loading=!0;let a=d.Rb;a="All"===t?d.Rb:[...d.Rb].filter(r=>{var i;return null===(i=r.payment_status)||void 0===i?void 0:i.includes(t)}),this.orderList=a,setTimeout(()=>{this.loading=!1},400)}}return s.\u0275fac=function(t){return new(t||s)(e.\u0275\u0275directiveInject(u.F0),e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(S.DomSanitizer))},s.\u0275cmp=e.\u0275\u0275defineComponent({type:s,selectors:[["app-ecommerce-orders"]],viewQuery:function(t,a){if(1&t&&e.\u0275\u0275viewQuery(D,5),2&t){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(a.advancedTable=r.first)}},decls:32,vars:9,consts:[["title","Orders",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],[1,"col-lg-8"],[1,"d-flex","flex-wrap","align-items-center"],["for","status-select",1,"me-2"],[1,"me-sm-3"],["id","status-select","name","status",1,"form-select","form-select","my-1","my-lg-0",3,"ngModel","ngModelChange","change"],["value","All"],["value","Paid"],["value","Authorization"],["value","Failed"],["value","COD"],[1,"col-lg-4"],[1,"text-lg-end"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","mb-2","me-2"],[1,"mdi","mdi-basket","me-1"],["type","button",1,"btn","btn-light","waves-effect","mb-2"],[3,"display"],["tableClasses","table-centered","theadClasses","table-light",3,"tableData","columns","pagination","hasRowSelection","isSearchable","isSortable","handleTableLoad","search"],["advancedTable",""]],template:function(t,a){1&t&&(e.\u0275\u0275element(0,"app-page-title",0),e.\u0275\u0275elementStart(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"form",7)(8,"label",8),e.\u0275\u0275text(9,"Status"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",9)(11,"select",10),e.\u0275\u0275listener("ngModelChange",function(i){return a.OrderStatusGroup=i})("change",function(){return a.changeOrderStatusGroup(a.OrderStatusGroup)}),e.\u0275\u0275elementStart(12,"option",11),e.\u0275\u0275text(13,"All"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"option",12),e.\u0275\u0275text(15,"Paid"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"option",13),e.\u0275\u0275text(17,"Awaiting Authorization"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"option",14),e.\u0275\u0275text(19,"Payment failed"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"option",15),e.\u0275\u0275text(21,"Cash on Delivery"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(22,"div",16)(23,"div",17)(24,"button",18),e.\u0275\u0275element(25,"i",19),e.\u0275\u0275text(26," Add New Order"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"button",20),e.\u0275\u0275text(28,"Export"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275element(29,"app-ui-preloader",21),e.\u0275\u0275elementStart(30,"app-advanced-table",22,23),e.\u0275\u0275listener("handleTableLoad",function(i){return a.handleTableLoad(i)})("search",function(i){return a.searchData(i)}),e.\u0275\u0275elementEnd()()()()()),2&t&&(e.\u0275\u0275property("breadcrumbItems",a.pageTitle),e.\u0275\u0275advance(11),e.\u0275\u0275property("ngModel",a.OrderStatusGroup),e.\u0275\u0275advance(18),e.\u0275\u0275property("display",a.loading),e.\u0275\u0275advance(1),e.\u0275\u0275property("tableData",a.orderList)("columns",a.columns)("pagination",!0)("hasRowSelection",!0)("isSearchable",!0)("isSortable",!1))},directives:[T.T,l._Y,l.JL,l.F,l.EJ,l.JJ,l.On,l.YN,l.Kr,O.T,C.j],styles:[""]}),s})()}];let A=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.Bz.forChild(z)],u.Bz]}),s})(),F=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=e.\u0275\u0275defineInjector({imports:[[v.CommonModule,l.u5,f.$,y.y,g.p,A]]}),s})()}}]);