"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[9837],{9837:(L,v,n)=>{n.r(v),n.d(v,{ListModule:()=>w});var a=n(9808),u=n(3075),b=n(1413),c=n(9095),g=n(1819),m=n(4202),r=n(2631),t=n(5e3),d=n(2313),h=n(9475),_=n(6086),S=n(9699);const I=["advancedTable"],E=[{path:"",component:(()=>{class s{constructor(e,i,o){this.router=e,this.route=i,this.sanitizer=o,this.pageTitle=[],this.columns=[],this.pageSizeOptions=[5,10,20],this.ticketList=[]}ngOnInit(){this.pageTitle=[{label:"Tickets",path:"/"},{label:"Ticket List",path:"/",active:!0}],this._fetchData(),this.initAdvancedTableData()}_fetchData(){this.ticketList=r.S}initAdvancedTableData(){this.columns=[{name:"id",label:"ID",formatter:this.ticketIdFormatter.bind(this)},{name:"requested_by",label:"Requested By",formatter:this.ticketRequestedFormatter.bind(this)},{name:"subject",label:"Subject",formatter:e=>e.subject},{name:"assignee",label:"Assignee",formatter:this.ticketAssigneeFormatter.bind(this),sort:!1},{name:"priority",label:"Priority",formatter:this.ticketPriorityFormatter.bind(this)},{name:"status",label:"Status",formatter:this.ticketStatusFormatter.bind(this)},{name:"created_date",label:"Created Date",formatter:e=>e.created_date},{name:"due_date",label:"Due Date",formatter:e=>e.due_date},{name:"Action",label:"Action",width:75,formatter:this.customerActionFormatter.bind(this),sort:!1}]}handleTableLoad(e){document.querySelectorAll(".ticket").forEach(i=>{i.addEventListener("click",()=>{this.router.navigate(["../details"],{relativeTo:this.route,queryParams:{id:i.id}})})})}ticketIdFormatter(e){return this.sanitizer.bypassSecurityTrustHtml(`<b>${e.id}</b>`)}ticketRequestedFormatter(e){return this.sanitizer.bypassSecurityTrustHtml(`<a href="javascript: void(0);" class="text-body ticket" id="${e.id}">\n        <img src="${e.requested_by.image}" alt="contact-img" title="contact-img" class="rounded-circle avatar-xs" />\n        <span class="ms-2">${e.requested_by.name}</span>\n         </a>`)}ticketAssigneeFormatter(e){return this.sanitizer.bypassSecurityTrustHtml(`  <a href="javascript: void(0);">\n        <img src="${e.assignee}" alt="contact-img" title="contact-img" class="rounded-circle avatar-xs" />\n        </a>`)}ticketPriorityFormatter(e){return this.sanitizer.bypassSecurityTrustHtml("Low"==e.priority?' <span class="badge bg-soft-secondary text-secondary">Low</span>':"Medium"==e.priority?' <span class="badge bg-soft-warning text-warning">Medium</span>':' <span class="badge bg-soft-danger text-danger">High</span>')}ticketStatusFormatter(e){return this.sanitizer.bypassSecurityTrustHtml("Open"==e.status?'<span class="badge bg-success">Open</span>':'<span class="badge  bg-secondary text-light">Closed</span>')}customerActionFormatter(){return this.sanitizer.bypassSecurityTrustHtml(' <div class="btn-group dropdown" >\n       <a href="javascript: void(0);" class="table-action-btn arrow-none btn btn-light btn-sm" ><i class="mdi mdi-dots-horizontal"></i></a>\n       <div class="dropdown-menu dropdown-menu-end" >\n        <a class="dropdown-item" href="javascript:void(0)"><i class="mdi mdi-pencil me-2 text-muted font-18 vertical-middle"></i>Edit Ticket</a>\n        <a class="dropdown-item" href="javascript:void(0)"><i class="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>Close</a>\n        <a class="dropdown-item" href="javascript:void(0)"><i class="mdi mdi-delete me-2 text-muted font-18 vertical-middle"></i>Remove</a>\n        <a class="dropdown-item" href="javascript:void(0)"><i class="mdi mdi-star me-2 font-18 text-muted vertical-middle"></i>Mark as Unread</a>\n        </div>\n        </div>')}compare(e,i){return e<i?-1:e>i?1:0}sort(e){this.ticketList=""===e.direction?r.S:[...this.ticketList].sort((i,o)=>{let l;return l="requested_by"===e.column?this.compare(i.requested_by.name,o.requested_by.name):this.compare(i[e.column],o[e.column]),"asc"===e.direction?l:-l})}matches(e,i){var o,l,f,y,T,C;return(null===(o=e.requested_by.name)||void 0===o?void 0:o.toLowerCase().includes(i))||(null===(l=e.subject)||void 0===l?void 0:l.toLowerCase().includes(i))||(null===(f=e.priority)||void 0===f?void 0:f.toLowerCase().includes(i))||(null===(y=e.created_date)||void 0===y?void 0:y.toLowerCase().includes(i))||(null===(T=e.due_date)||void 0===T?void 0:T.toLowerCase().includes(i))||(null===(C=e.status)||void 0===C?void 0:C.toLocaleLowerCase().includes(i))}searchData(e){if(""===e)this._fetchData();else{let i=r.S;i=i.filter(o=>this.matches(o,e)),this.ticketList=i}}}return s.\u0275fac=function(e){return new(e||s)(t.\u0275\u0275directiveInject(m.F0),t.\u0275\u0275directiveInject(m.gz),t.\u0275\u0275directiveInject(d.DomSanitizer))},s.\u0275cmp=t.\u0275\u0275defineComponent({type:s,selectors:[["app-tickets-list"]],viewQuery:function(e,i){if(1&e&&t.\u0275\u0275viewQuery(I,5),2&e){let o;t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(i.advancedTable=o.first)}},decls:21,vars:12,consts:[["title","Ticket List",3,"breadcrumbItems"],[1,"row"],[1,"col-md-6","col-xl-3"],["variant","white","iconContainerClass","rounded-circle bg-primary","description","Total Tickets","icon","fe-tag",3,"stats"],["variant","white","iconContainerClass","rounded-circle bg-warning","description","Pending Tickets","icon","fe-clock",3,"stats"],["variant","white","iconContainerClass","rounded-circle bg-success","description","Closed Tickets","icon","fe-check-circle",3,"stats"],["variant","white","iconContainerClass","rounded-circle bg-danger","description","Deleted Tickets","icon","fe-trash-2",3,"stats"],[1,"col-12"],[1,"card"],[1,"card-body"],["type","button",1,"btn","btn-sm","btn-blue","waves-effect","waves-light","float-end"],[1,"mdi","mdi-plus-circle"],[1,"header-title","mb-4"],["tableClasses","table-centered",3,"tableData","columns","hasRowSelection","pagination","isSearchable","pageSizeOptions","isSortable","handleTableLoad","search","sort"],["advancedTable",""]],template:function(e,i){1&e&&(t.\u0275\u0275element(0,"app-page-title",0),t.\u0275\u0275elementStart(1,"div",1)(2,"div",2),t.\u0275\u0275element(3,"app-widget-statistics-card4",3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",2),t.\u0275\u0275element(5,"app-widget-statistics-card4",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"div",2),t.\u0275\u0275element(7,"app-widget-statistics-card4",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"div",2),t.\u0275\u0275element(9,"app-widget-statistics-card4",6),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(10,"div",1)(11,"div",7)(12,"div",8)(13,"div",9)(14,"button",10),t.\u0275\u0275element(15,"i",11),t.\u0275\u0275text(16," Add Ticket "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(17,"h4",12),t.\u0275\u0275text(18,"Manage Tickets"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(19,"app-advanced-table",13,14),t.\u0275\u0275listener("handleTableLoad",function(l){return i.handleTableLoad(l)})("search",function(l){return i.searchData(l)})("sort",function(l){return i.sort(l)}),t.\u0275\u0275elementEnd()()()()()),2&e&&(t.\u0275\u0275property("breadcrumbItems",i.pageTitle),t.\u0275\u0275advance(3),t.\u0275\u0275property("stats",3947),t.\u0275\u0275advance(2),t.\u0275\u0275property("stats",624),t.\u0275\u0275advance(2),t.\u0275\u0275property("stats",3195),t.\u0275\u0275advance(2),t.\u0275\u0275property("stats",128),t.\u0275\u0275advance(10),t.\u0275\u0275property("tableData",i.ticketList)("columns",i.columns)("hasRowSelection",!1)("pagination",!0)("isSearchable",!0)("pageSizeOptions",i.pageSizeOptions)("isSortable",!0))},directives:[h.T,_.F,S.j],styles:[""]}),s})()}];let M=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=t.\u0275\u0275defineInjector({imports:[[m.Bz.forChild(E)],m.Bz]}),s})(),w=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=t.\u0275\u0275defineInjector({imports:[[a.CommonModule,u.u5,c.p,b.$,g.y,M]]}),s})()},9475:(L,v,n)=>{n.d(v,{T:()=>m});var a=n(5e3),u=n(9808);function b(r,t){if(1&r&&(a.\u0275\u0275elementStart(0,"li",5)(1,"a",11),a.\u0275\u0275text(2),a.\u0275\u0275elementEnd()()),2&r){const d=a.\u0275\u0275nextContext().$implicit;a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(d.label)}}function c(r,t){if(1&r&&(a.\u0275\u0275elementStart(0,"li",12)(1,"a",13),a.\u0275\u0275text(2),a.\u0275\u0275elementEnd()()),2&r){const d=a.\u0275\u0275nextContext().$implicit;a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(d.label)}}function g(r,t){if(1&r&&(a.\u0275\u0275elementContainerStart(0),a.\u0275\u0275template(1,b,3,1,"li",9),a.\u0275\u0275template(2,c,3,1,"li",10),a.\u0275\u0275elementContainerEnd()),2&r){const d=t.$implicit;a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",!d.active),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",d.active)}}let m=(()=>{class r{constructor(){this.breadcrumbItems=[],this.title=""}ngOnInit(){}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=a.\u0275\u0275defineComponent({type:r,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(d,h){1&d&&(a.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),a.\u0275\u0275text(7,"UBold"),a.\u0275\u0275elementEnd()(),a.\u0275\u0275template(8,g,3,2,"ng-container",7),a.\u0275\u0275elementEnd()(),a.\u0275\u0275elementStart(9,"h4",8),a.\u0275\u0275text(10),a.\u0275\u0275elementEnd()()()()),2&d&&(a.\u0275\u0275advance(8),a.\u0275\u0275property("ngForOf",h.breadcrumbItems),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(h.title))},directives:[u.NgForOf,u.NgIf],styles:[""]}),r})()},9095:(L,v,n)=>{n.d(v,{p:()=>b});var a=n(9808),u=n(5e3);let b=(()=>{class c{}return c.\u0275fac=function(m){return new(m||c)},c.\u0275mod=u.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=u.\u0275\u0275defineInjector({imports:[[a.CommonModule]]}),c})()}}]);