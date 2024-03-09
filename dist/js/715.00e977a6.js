"use strict";(self["webpackChunkfilmrock"]=self["webpackChunkfilmrock"]||[]).push([[715],{2973:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(3396);function r(e,t,i,r,s,l){return(0,n.wg)(),(0,n.iD)("p",null,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var s={name:"AdaptiveParagraf"},l=i(89);const a=(0,l.Z)(s,[["render",r],["__scopeId","data-v-159b1725"]]);var o=a},8647:function(e,t,i){i.d(t,{Z:function(){return k}});var n=i(3396),r=i(7139);const s={class:"row d-flex justify-content-center my-3"},l={class:"col-xl-3 col-lg-4 col-sm-4 col-5 text-center img-wrapper"},a=["src","alt"],o={class:"col-xl-8 col-lg-7 col-sm-8 col-7 px-xl-4"};function c(e,t,i,c,u,d){const g=(0,n.up)("FilmTitle"),h=(0,n.up)("AdaptiveParagraf");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",l,[(0,n._)("img",{src:i.film.src,alt:i.film.title,class:"img-fluid"},null,8,a)]),(0,n._)("div",o,[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(i.film.title),1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Year:  "+(0,r.zw)(i.film.year),1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Genres:  "+(0,r.zw)(i.film.genre)+", "+(0,r.zw)(i.film.genre2),1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Country:  "+(0,r.zw)(i.film.country),1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Director:  "+(0,r.zw)(i.film.director),1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Actors:  "+(0,r.zw)(i.film.actors)+" and others... ",1)])),_:1}),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Lasting:  "+(0,r.zw)(i.film.lasting),1)])),_:1}),(0,n.Wm)(h,{class:"m-0 ratings"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Rating:  "+(0,r.zw)(u.rating),1)])),_:1}),(0,n.Wm)(h,{class:"ratings"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Number of ratings:  "+(0,r.zw)(i.film.numberOfRatings||0),1)])),_:1}),(0,n.WI)(e.$slots,"default",{},void 0,!0)])])}function u(e,t,i,r,s,l){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var d={name:"FilmTitle"},g=i(89);const h=(0,g.Z)(d,[["render",u],["__scopeId","data-v-41af438c"]]);var w=h,m=i(2973),v={name:"SmallCard",props:["film"],components:{FilmTitle:w,AdaptiveParagraf:m.Z},data(){return{rating:0}},mounted(){const e=setInterval((()=>{this.film.rating&&(this.rating=this.film.rating.toFixed(1),clearInterval(e))}),10)}};const f=(0,g.Z)(v,[["render",c],["__scopeId","data-v-3b81956b"]]);var k=f},9715:function(e,t,i){i.r(t),i.d(t,{default:function(){return ve}});var n=i(3396),r=i(7139);const s=e=>((0,n.dD)("data-v-63f813f1"),e=e(),(0,n.Cn)(),e),l={class:"container-fluid"},a={class:"row d-flex justify-content-center"},o=s((()=>(0,n._)("b",null,"Description:",-1))),c={class:"row d-flex justify-content-center my-3"},u={class:"col-lg-11 col-12"},d={class:"row d-flex justify-content-center mb-2"},g={class:"col-lg-11 col-12"},h={class:"row d-flex justify-content-center"},w={class:"col-lg-11 col-12 mb-4"};function m(e,t,i,s,m,v){const f=(0,n.up)("MyButton"),k=(0,n.up)("AdaptiveParagraf"),p=(0,n.up)("SmallCard"),R=(0,n.up)("ModalRegWarning"),_=(0,n.up)("ModalRate"),b=(0,n.up)("VideoBlock"),y=(0,n.up)("LineHeader"),C=(0,n.up)("MovieLine"),W=(0,n.up)("ReviewForm"),M=(0,n.up)("ReviewsList");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(p,{film:m.currentFilm},{default:(0,n.w5)((()=>[m.notRated?((0,n.wg)(),(0,n.j4)(f,{key:0,onClick:v.rateFilm},{default:(0,n.w5)((()=>[(0,n.Uk)(" Rate the film ")])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(k,{key:1,class:"rated"},{default:(0,n.w5)((()=>[(0,n.Uk)(" You have rated this film. Thank you! ")])),_:1}))])),_:1},8,["film"]),m.regWarning?((0,n.wg)(),(0,n.j4)(R,{key:0,onClosewarning:v.closeRegWarning},{default:(0,n.w5)((()=>[(0,n.Uk)(" To rate films you have to log into your account ore register. ")])),_:1},8,["onClosewarning"])):(0,n.kq)("",!0),m.showModalRate?((0,n.wg)(),(0,n.j4)(_,{key:1,onRatingReceived:v.setRating,onRatingClosed:v.closeModalRate},null,8,["onRatingReceived","onRatingClosed"])):(0,n.kq)("",!0),(0,n._)("div",a,[(0,n.Wm)(k,{class:"col-lg-11 col-12"},{default:(0,n.w5)((()=>[o,(0,n.Uk)("  "+(0,r.zw)(m.currentFilm.description),1)])),_:1})]),(0,n._)("div",c,[(0,n._)("div",u,[(0,n.Wm)(b,{trailerUrl:m.currentFilm.trailer,filmUrl:m.currentFilm.url,altUrl:m.currentFilm.url_alt},null,8,["trailerUrl","filmUrl","altUrl"])])]),(0,n._)("div",d,[(0,n._)("div",g,[(0,n.Wm)(y,{left:!0},{default:(0,n.w5)((()=>[(0,n.Uk)("This might interest you:")])),_:1}),(0,n.Wm)(C,{list:m.suitableMovies,shortListLength:m.shortListLength},null,8,["list","shortListLength"])])]),(0,n._)("div",h,[(0,n._)("div",w,[(0,n.Wm)(y,{left:!0,class:"mb-1"},{default:(0,n.w5)((()=>[(0,n.Uk)("Reviews")])),_:1}),(0,n.Wm)(W,{onReviewSent:v.updateReviews},null,8,["onReviewSent"]),m.reviewsLength?((0,n.wg)(),(0,n.j4)(M,{key:0,reviewsLength:m.reviewsLength,allReviews:m.allReviews},null,8,["reviewsLength","allReviews"])):(0,n.kq)("",!0)])])])}i(7658);var v=i(8647);const f={key:1},k={key:1},p={key:0},R=["href"];function _(e,t,i,s,l,a){const o=(0,n.up)("ColoredBtns"),c=(0,n.up)("VideoFrame");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o,{onMovieClicked:a.onMovie,onTrailerClicked:a.onTrailer},null,8,["onMovieClicked","onTrailerClicked"]),(0,n._)("div",{class:(0,r.C_)(["p-1",{"back-orange":l.orangeBack,"back-burgundy":!l.orangeBack}])},[l.orangeBack?((0,n.wg)(),(0,n.j4)(c,{key:0,url:i.trailerUrl},null,8,["url"])):((0,n.wg)(),(0,n.iD)("div",f,[i.filmUrl?((0,n.wg)(),(0,n.j4)(c,{key:0,url:i.filmUrl},null,8,["url"])):((0,n.wg)(),(0,n.iD)("p",k,[(0,n.Uk)(" There is no such film on YouTube. We suggest using an "),l.mw575?((0,n.wg)(),(0,n.iD)("br",p)):(0,n.kq)("",!0),(0,n._)("a",{href:i.altUrl,target:"_blank"},"alternative source",8,R)]))]))],2)],64)}const b={class:"d-inline-flex"};function y(e,t,i,r,s,l){return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",{class:"trailer-button",onClick:t[0]||(t[0]=(...e)=>l.onTrailer&&l.onTrailer(...e))},"Trailer"),(0,n._)("div",{class:"movie-button",onClick:t[1]||(t[1]=(...e)=>l.onMovie&&l.onMovie(...e))},"Movie")])}var C={name:"ColoredBtns",methods:{onMovie(){this.$emit("movieClicked")},onTrailer(){this.$emit("trailerClicked")}}},W=i(89);const M=(0,W.Z)(C,[["render",y],["__scopeId","data-v-567d896b"]]);var U=M;const F={class:"ratio ratio-16x9"},L=["src"];function B(e,t,i,r,s,l){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("iframe",{src:i.url,allowfullscreen:""},null,8,L)])}var I={name:"VideoFrame",props:["url"]};const j=(0,W.Z)(I,[["render",B]]);var S=j,$={name:"VideoBlock",components:{ColoredBtns:U,VideoFrame:S},props:["trailerUrl","filmUrl","altUrl"],data(){return{orangeBack:!0,mw575:!1}},mounted(){this.linkWidthControl(),window.onresize=()=>{this.linkWidthControl()}},methods:{onMovie(){this.orangeBack=!1,this.url=this.filmUrl},onTrailer(){this.orangeBack=!0,this.url=this.trailerUrl},linkWidthControl(){window.matchMedia("(max-width: 575px)").matches?this.mw575=!0:this.mw575=!1}}};const D=(0,W.Z)($,[["render",_],["__scopeId","data-v-cc6067fe"]]);var Z=D,x=i(453),T=i(2973);const z={class:"modal-warning rounded"},H={class:"d-flex justify-content-around"};function A(e,t,i,r,s,l){return(0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("p",null,[(0,n.WI)(e.$slots,"default",{},void 0,!0)]),(0,n._)("div",H,[(0,n._)("button",{class:"btn btn-danger",onClick:t[0]||(t[0]=(...e)=>l.logIn&&l.logIn(...e))},"Log in"),(0,n._)("button",{class:"btn btn-danger",onClick:t[1]||(t[1]=(...e)=>l.register&&l.register(...e))},"Register"),(0,n._)("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=(...e)=>l.close&&l.close(...e))},"Cancel")])])}var q={name:"ModalRegWarning",methods:{logIn(){this.$router.push("/logIn")},register(){this.$router.push("/registration")},close(){this.$emit("closewarning")}}};const V=(0,W.Z)(q,[["render",A],["__scopeId","data-v-385e1452"]]);var Y=V,P=i(9242);const N=e=>((0,n.dD)("data-v-250f01ed"),e=e(),(0,n.Cn)(),e),O={class:"modal-rating rounded"},G=N((()=>(0,n._)("p",null,"Rate the film (from 0 to 10):",-1))),E={class:"rate-wrapper"},K={class:"rating-value"},J={class:"d-flex justify-content-around"};function Q(e,t,i,s,l,a){return(0,n.wg)(),(0,n.iD)("div",O,[G,(0,n._)("div",E,[(0,n.Uk)(" 0 "),(0,n.wy)((0,n._)("input",{type:"range",min:"0",max:"10",step:"0.5","onUpdate:modelValue":t[0]||(t[0]=e=>l.rating=e)},null,512),[[P.nr,l.rating]]),(0,n.Uk)(" 10 ")]),(0,n._)("div",K,(0,r.zw)(l.rating),1),(0,n._)("div",J,[(0,n._)("button",{class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>a.sendRating&&a.sendRating(...e))},"Rate"),(0,n._)("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=(...e)=>a.close&&a.close(...e))},"Cancel")])])}var X={name:"ModalRate",data(){return{rating:0}},methods:{sendRating(){this.$emit("ratingReceived",this.rating)},close(){this.$emit("ratingClosed")}}};const ee=(0,W.Z)(X,[["render",Q],["__scopeId","data-v-250f01ed"]]);var te=ee,ie=i(5645),ne=i(2117);const re=["placeholder"];function se(e,t,i,r,s,l){const a=(0,n.up)("MyButton"),o=(0,n.up)("ModalRegWarning");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("form",null,[(0,n.wy)((0,n._)("textarea",{placeholder:s.proposition,class:"mb-2","onUpdate:modelValue":t[0]||(t[0]=e=>s.review=e),onFocus:t[1]||(t[1]=(...e)=>l.checkReg&&l.checkReg(...e))},null,40,re),[[P.nr,s.review]]),(0,n.Wm)(a,{class:"send-btn",onClick:(0,P.iM)(l.send,["prevent"])},{default:(0,n.w5)((()=>[(0,n.Uk)("Send")])),_:1},8,["onClick"])]),s.regWarning?((0,n.wg)(),(0,n.j4)(o,{key:0,onClosewarning:l.closeRegWarning},{default:(0,n.w5)((()=>[(0,n.Uk)(" To make comments you have to log into your account or to register. ")])),_:1},8,["onClosewarning"])):(0,n.kq)("",!0)],64)}var le=i(1178),ae={name:"ReviewForm",components:{MyButton:x.Z,ModalRegWarning:Y},data(){return{proposition:"Enter your review here",review:"",regWarning:!1}},emits:["reviewSent"],methods:{send(){if(this.$store.state.user){const e=(0,le.N8)(),t=this.$route.params.id,i=this.$store.state.user,n=this.review,r=new Date,s=String(r.getFullYear());let l={month:String(r.getMonth()+1),day:String(r.getDate()),hours:String(r.getHours()),minutes:String(r.getMinutes()),seconds:String(r.getSeconds())};for(let w in l)""===l[w]&&(l[w]="00"),1===l[w].length&&(l[w]="0"+l[w]);const a=l.month,o=l.day,c=l.hours,u=l.minutes,d=l.seconds;let g=Number(s+a+o+c+u+d),h=s+"-"+a+"-"+o+"_"+c+":"+u+":"+d;(0,le.t8)((0,le.iH)(e,"films/"+t+"/reviews/"+g),{revId:g,user:i,date:h,body:n}),this.review="",this.$emit("reviewSent")}else this.regWarning=!0},checkReg(){this.$store.state.user||(this.regWarning=!0,document.querySelector("textarea").blur())},closeRegWarning(){this.regWarning=!1}}};const oe=(0,W.Z)(ae,[["render",se],["__scopeId","data-v-346db5c7"]]);var ce=oe;function ue(e,t,i,s,l,a){const o=(0,n.up)("AdaptiveParagraf"),c=(0,n.up)("MyButton");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.reviews,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"mt-3"},[(0,n.Wm)(o,{class:"m-0 review-head"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.user)+",  "+(0,r.zw)(e.date),1)])),_:2},1024),(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.body),1)])),_:2},1024)])))),128)),l.allReviewsBtn?((0,n.wg)(),(0,n.j4)(c,{key:0,onClick:a.showAllReviews},{default:(0,n.w5)((()=>[(0,n.Uk)(" Show all reviews ")])),_:1},8,["onClick"])):(0,n.kq)("",!0),l.collapseRewiewsBtn?((0,n.wg)(),(0,n.j4)(c,{key:1,onClick:a.collapseRewiews},{default:(0,n.w5)((()=>[(0,n.Uk)(" Collapse rewiews ")])),_:1},8,["onClick"])):(0,n.kq)("",!0)],64)}var de={name:"ReviewsList",props:["reviewsLength","allReviews"],components:{AdaptiveParagraf:T.Z,MyButton:x.Z},data(){return{reviews:[],allReviewsBtn:!1,collapseRewiewsBtn:!1}},mounted(){const e=setInterval((()=>{this.getReviews(),this.allReviews.length===this.reviewsLength&&clearInterval(e)}),10)},methods:{getReviews(){this.reviewsLength<=15?this.reviews=[...this.allReviews]:(this.reviews=this.allReviews.slice(0,15),this.allReviewsBtn=!0)},showAllReviews(){this.reviews=[...this.allReviews],this.allReviewsBtn=!1,this.collapseRewiewsBtn=!0},collapseRewiews(){this.reviews=this.allReviews.slice(0,15),this.collapseRewiewsBtn=!1,this.allReviewsBtn=!0}}};const ge=(0,W.Z)(de,[["render",ue],["__scopeId","data-v-ab739934"]]);var he=ge,we={name:"FilmCard",components:{SmallCard:v.Z,VideoBlock:Z,MyButton:x.Z,AdaptiveParagraf:T.Z,ModalRegWarning:Y,ModalRate:te,LineHeader:ie.Z,MovieLine:ne.Z,ReviewForm:ce,ReviewsList:he},data(){return{currentFilm:{},regWarning:!1,showModalRate:!1,notRated:!0,shortListLength:0,suitableMovies:[],id:this.$route.params.id,allReviews:[],reviewsLength:0}},mounted(){const e=(0,le.N8)(),t=(0,le.iH)(e,"films/"+this.id);(0,le.jM)(t,(e=>{this.currentFilm=e.val()})),this.$store.state.user&&this.findIsFilmRated(e);const i=(0,le.iH)(e,"films/");(0,le.jM)(i,(e=>{let t=e.val(),i=Object.values(t);while(this.suitableMovies.length<10)if(this.currentFilm.relatedTo){for(let e=0;e<i.length;e++)i[e].relatedTo===this.currentFilm.relatedTo&&i[e].id!=this.id&&this.suitableMovies.push(i[e]);this.getSuitablesByGenre(i)}else this.getSuitablesByGenre(i);if(this.currentFilm.reviews){let e=Object.values(this.currentFilm.reviews);this.allReviews=e.sort(((e,t)=>t.revId-e.revId)),this.reviewsLength=this.allReviews.length}})),this.getShortListLength(),window.onresize=()=>this.getShortListLength()},watch:{$route(){document.location.reload()}},methods:{findIsFilmRated(e){const t=this.$store.state.user,i=(0,le.iH)(e,"users/"+t);(0,le.jM)(i,(e=>{let t=e.val();if(t.ratings){let e=Object.keys(t.ratings);for(let t=0;t<e.length;t++)if(e[t]===this.id)return void(this.notRated=!1)}}))},getSuitablesByGenre(e){for(let t=0;t<e.length;t++)e[t].id!=this.id&&!this.suitableMovies.includes(e[t])&&(e[t].genre===this.currentFilm.genre&&e[t].genre2===this.currentFilm.genre2||e[t].genre===this.currentFilm.genre2&&e[t].genre2===this.currentFilm.genre)&&this.suitableMovies.push(e[t]);for(let t=0;t<e.length;t++)e[t].id==this.id||this.suitableMovies.includes(e[t])||e[t].genre!==this.currentFilm.genre&&e[t].genre2!==this.currentFilm.genre2&&e[t].genre!==this.currentFilm.genre2&&e[t].genre2!==this.currentFilm.genre||this.suitableMovies.push(e[t])},getShortListLength(){let e=window.innerWidth;this.shortListLength=e>=992?5:e<992&&e>=768?4:e<768&&e>=576?3:2},rateFilm(){this.$store.state.user?this.showModalRate=!0:this.regWarning=!0},closeRegWarning(){this.regWarning=!1},closeModalRate(){this.showModalRate=!1},setRating(e){const t=(0,le.N8)(),i=this.currentFilm.rating,n=this.currentFilm.numberOfRatings;let r=Number(e);const s=n+1,l=this.id,a=this.$store.state.user;n&&(r=(n*i+r)/s),(0,le.t8)((0,le.iH)(t,"films/"+l+"/rating"),r),(0,le.t8)((0,le.iH)(t,"films/"+l+"/numberOfRatings"),s),(0,le.t8)((0,le.iH)(t,"users/"+a+"/ratings/"+l),!0),this.showModalRate=!1,this.$router.push("/"+l)},updateReviews(){this.reviewsLength>1&&document.location.reload()}}};const me=(0,W.Z)(we,[["render",m],["__scopeId","data-v-63f813f1"]]);var ve=me}}]);
//# sourceMappingURL=715.00e977a6.js.map