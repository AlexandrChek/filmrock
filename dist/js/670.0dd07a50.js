"use strict";(self["webpackChunkfilmrock"]=self["webpackChunkfilmrock"]||[]).push([[670],{2973:function(e,t,s){s.d(t,{Z:function(){return c}});var i=s(3396);function l(e,t,s,l,a,r){return(0,i.wg)(),(0,i.iD)("p",null,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var a={name:"AdaptiveParagraf"},r=s(89);const n=(0,r.Z)(a,[["render",l],["__scopeId","data-v-159b1725"]]);var c=n},1597:function(e,t,s){s.d(t,{Z:function(){return p}});var i=s(3396),l=s(7139);const a={class:"row d-flex justify-content-center my-3"},r={class:"col-xl-3 col-lg-4 col-sm-4 col-5 text-center img-wrapper"},n=["src","alt"],c={class:"col-xl-8 col-lg-7 col-sm-8 col-7 px-xl-4"};function o(e,t,s,o,u,d){const g=(0,i.up)("FilmTitle"),h=(0,i.up)("AdaptiveParagraf");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",r,[(0,i._)("img",{src:s.film.src,alt:s.film.title,class:"img-fluid"},null,8,n)]),(0,i._)("div",c,[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(s.film.title),1)])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Year:  "+(0,l.zw)(s.film.year),1)])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Genres:  "+(0,l.zw)(s.film.genre)+", "+(0,l.zw)(s.film.genre2),1)])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Country:  "+(0,l.zw)(s.film.country),1)])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Director:  "+(0,l.zw)(s.film.director),1)])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Actors:  "+(0,l.zw)(s.film.actors)+" and others... ",1)])),_:1}),(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Lasting:  "+(0,l.zw)(s.film.lasting),1)])),_:1}),(0,i.Wm)(h,{class:"m-0 ratings"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Rating:  "+(0,l.zw)(s.film.rating||0),1)])),_:1}),(0,i.Wm)(h,{class:"ratings"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Number of ratings:  "+(0,l.zw)(s.film.numberOfRatings||0),1)])),_:1}),(0,i.WI)(e.$slots,"default",{},void 0,!0)])])}function u(e,t,s,l,a,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var d={name:"FilmTitle"},g=s(89);const h=(0,g.Z)(d,[["render",u],["__scopeId","data-v-41af438c"]]);var m=h,f=s(2973),v={name:"SmallCard",props:["film"],components:{FilmTitle:m,AdaptiveParagraf:f.Z}};const P=(0,g.Z)(v,[["render",o],["__scopeId","data-v-53210491"]]);var p=P},7631:function(e,t,s){s.r(t),s.d(t,{default:function(){return M}});var i=s(3396);const l={class:"d-flex flex-column big-wrapper"},a={key:0,class:"d-flex justify-content-center w-100"},r={class:"d-inline-flex justify-content-center"};function n(e,t,s,n,c,o){const u=(0,i.up)("SmallCard"),d=(0,i.up)("router-link"),g=(0,i.up)("SimplArrowBtn"),h=(0,i.up)("PageNumbers");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.searchedMovies,(e=>((0,i.wg)(),(0,i.j4)(d,{to:"/"+e.id,key:e.id,class:"movie-item"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{film:e},null,8,["film"])])),_:2},1032,["to"])))),128))]),c.pagination?((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",r,[c.currentPage>1?((0,i.wg)(),(0,i.j4)(g,{key:0,onClick:o.scrollLeft},{default:(0,i.w5)((()=>[(0,i.Uk)("   «   ")])),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(h,{pages:c.pages,currentPage:c.currentPage,onNumberClicked:o.changePage},null,8,["pages","currentPage","onNumberClicked"]),c.currentPage<c.numberOfPages?((0,i.wg)(),(0,i.j4)(g,{key:1,onClick:o.scrollRight},{default:(0,i.w5)((()=>[(0,i.Uk)("   »   ")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])])):(0,i.kq)("",!0)],64)}s(7658);var c=s(1597),o=s(7139);const u=["onClick"],d={key:0,id:"arrow-up"},g={key:1,id:"void"};function h(e,t,s,l,a,r){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.pages,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"number-wrapper",key:e,onClick:t=>r.transmitPage(e)},[(0,i._)("div",null,[e===s.currentPage?((0,i.wg)(),(0,i.iD)("div",d,"▲")):((0,i.wg)(),(0,i.iD)("div",g,"."))]),(0,i._)("div",{class:(0,o.C_)({"current-number":e===s.currentPage})},(0,o.zw)(e),3)],8,u)))),128)}var m={name:"PageNumbers",props:["pages","currentPage"],emits:["numberClicked"],methods:{transmitPage(e){this.$emit("numberClicked",e)}}},f=s(89);const v=(0,f.Z)(m,[["render",h],["__scopeId","data-v-5e6c78e1"]]);var P=v;function p(e,t,s,l,a,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var w={name:"SimplArrowBtn"};const k=(0,f.Z)(w,[["render",p],["__scopeId","data-v-767cb1e9"]]);var _=k,S={name:"SearchResults",components:{SmallCard:c.Z,PageNumbers:P,SimplArrowBtn:_},data(){return{allSearchedMovies:[],searchedMovies:[],pagination:!1,firstFilm:0,lastFilm:10,numberOfPages:2,allPages:[],pages:[],firstPage:0,lastPage:5,currentPage:1}},mounted(){if(this.allSearchedMovies=JSON.parse(sessionStorage.getItem("allSearchedMovies")),this.allSearchedMovies.length<=10)this.searchedMovies=[...this.allSearchedMovies];else{this.pagination=!0,this.selectSearchedMovies(),this.numberOfPages=Math.ceil(this.allSearchedMovies.length/10);let e=1;while(e<=this.numberOfPages)this.allPages.push(e),e++;this.numberOfPages<=5?this.pages=[...this.allPages]:this.selectPages()}},methods:{selectSearchedMovies(){this.allSearchedMovies.length-this.firstFilm>10?this.searchedMovies=this.allSearchedMovies.slice(this.firstFilm,this.lastFilm):this.searchedMovies=this.allSearchedMovies.slice(this.firstFilm)},selectPages(){this.allPages.length-this.firstPage>5?this.pages=this.allPages.slice(this.firstPage,this.lastPage):this.pages=this.allPages.slice(this.firstPage)},changePage(e){this.currentPage=e,this.firstFilm=10*(e-1),this.lastFilm=this.firstFilm+10,this.selectSearchedMovies()},scrollLeft(){this.currentPage--,this.lastFilm=this.firstFilm-1,this.firstFilm-=10,this.selectSearchedMovies(),this.currentPage<=this.firstPage&&(this.firstPage--,this.lastPage--,this.selectPages())},scrollRight(){this.currentPage++,this.firstFilm+=10,this.allSearchedMovies.length-this.firstFilm>=10?this.lastFilm+=10:this.lastFilm+=this.allSearchedMovies.length-this.firstFilm-1,this.selectSearchedMovies(),this.currentPage>this.lastPage&&(this.firstPage++,this.lastPage++,this.selectPages())}}};const b=(0,f.Z)(S,[["render",n],["__scopeId","data-v-7beddbd7"]]);var M=b}}]);
//# sourceMappingURL=670.0dd07a50.js.map