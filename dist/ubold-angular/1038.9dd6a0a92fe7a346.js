"use strict";(self.webpackChunkubold_angular=self.webpackChunkubold_angular||[]).push([[1038],{7103:(f,d,i)=>{i.r(d),i.d(d,{PricingModule:()=>h});var e=i(9808),m=i(9095),p=i(1819),r=i(4202);const u=[{id:1,name:"Professional Pack",icon:"fe-user",price:19,features:["10 GB Storage","500 GB Bandwidth","No Domain","1 User","Email Support","24x7 Support"],recommended:!1},{id:2,name:"Business Pack",icon:"fe-award",price:29,features:["50 GB Storage","900 GB Bandwidth","2 Domain","10 User","Email Support","24x7 Support"],recommended:!0},{id:3,name:"Professional Pack",icon:"fe-aperture",price:39,features:["100 GB Storage","Unlimited Bandwidth","10 Domain","Unlimited User","Email Support","24x7 Support"],recommended:!1}];var t=i(5e3),a=i(9475),l=i(6819);const g=[{path:"",component:(()=>{class n{constructor(){this.pageTitle=[],this.pricingPlans=[]}ngOnInit(){this.pageTitle=[{label:"Extra Pages",path:"/"},{label:"Pricing",path:"/",active:!0}],this._fetchData()}_fetchData(){this.pricingPlans=u}}return n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-pricing"]],decls:11,vars:2,consts:[["title","Pricing",3,"breadcrumbItems"],[1,"row","justify-content-center"],[1,"col-xl-10"],[1,"text-center"],[1,"mb-2"],[1,"text-muted","w-50","m-auto"],["containerClass","my-3",3,"pricingPlans"]],template:function(c,P){1&c&&(t.\u0275\u0275element(0,"app-page-title",0),t.\u0275\u0275elementStart(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t.\u0275\u0275text(5,"Our "),t.\u0275\u0275elementStart(6,"b"),t.\u0275\u0275text(7,"Plans"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(8,"p",5),t.\u0275\u0275text(9," We have plans and prices that fit your business perfectly. Make your client site a success with our products. "),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(10,"app-widget-pricing-cards",6),t.\u0275\u0275elementEnd()()),2&c&&(t.\u0275\u0275property("breadcrumbItems",P.pageTitle),t.\u0275\u0275advance(10),t.\u0275\u0275property("pricingPlans",P.pricingPlans))},directives:[a.T,l.K],styles:[""]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[r.Bz.forChild(g)],r.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[e.CommonModule,p.y,m.p,v]]}),n})()},9475:(f,d,i)=>{i.d(d,{T:()=>t});var e=i(5e3),m=i(9808);function p(a,l){if(1&a&&(e.\u0275\u0275elementStart(0,"li",5)(1,"a",11),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()),2&a){const o=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(o.label)}}function r(a,l){if(1&a&&(e.\u0275\u0275elementStart(0,"li",12)(1,"a",13),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()),2&a){const o=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(o.label)}}function u(a,l){if(1&a&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,p,3,1,"li",9),e.\u0275\u0275template(2,r,3,1,"li",10),e.\u0275\u0275elementContainerEnd()),2&a){const o=l.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.active),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.active)}}let t=(()=>{class a{constructor(){this.breadcrumbItems=[],this.title=""}ngOnInit(){}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],[1,"page-title"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(o,g){1&o&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"ol",4)(5,"li",5)(6,"a",6),e.\u0275\u0275text(7,"UBold"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(8,u,3,2,"ng-container",7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"h4",8),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd()()()()),2&o&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("ngForOf",g.breadcrumbItems),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(g.title))},directives:[m.NgForOf,m.NgIf],styles:[""]}),a})()},9095:(f,d,i)=>{i.d(d,{p:()=>p});var e=i(9808),m=i(5e3);let p=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=m.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=m.\u0275\u0275defineInjector({imports:[[e.CommonModule]]}),r})()}}]);