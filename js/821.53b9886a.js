"use strict";(self["webpackChunkfilmrock"]=self["webpackChunkfilmrock"]||[]).push([[821],{1821:function(s,e,r){r.r(e),r.d(e,{default:function(){return P}});var o=r(3396),t=r(9242);const n=s=>((0,o.dD)("data-v-48e97ba2"),s=s(),(0,o.Cn)(),s),a={class:"d-flex justify-content-center"},l={class:"mb-3"},d=n((()=>(0,o._)("label",{for:"userName"},"User name",-1))),u={class:"mb-3"},i=n((()=>(0,o._)("label",{for:"password"},"Password",-1))),c={class:"d-flex justify-content-center m-2"},m={class:"d-flex go-to-reg"},p=n((()=>(0,o._)("p",null,"If you have no an account, you should register.",-1))),g={class:"d-flex justify-content-center mt-5 mb-3"};function w(s,e,r,n,w,f){const h=(0,o.up)("InputReg"),v=(0,o.up)("ModalInfo"),U=(0,o.up)("AdvertPlace");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o._)("form",null,[(0,o._)("div",l,[d,(0,o.Wm)(h,{type:"text",id:"userName",onEnterValue:f.saveUserName},null,8,["onEnterValue"])]),(0,o._)("div",u,[i,(0,o.Wm)(h,{type:"password",id:"password",onEnterValue:f.savePassword},null,8,["onEnterValue"])]),(0,o._)("button",{class:"btn btn-primary mt-2",onClick:e[0]||(e[0]=(0,t.iM)(((...s)=>f.logInUser&&f.logInUser(...s)),["prevent"]))},"Log In")])]),w.noUserOrPasswordMod?((0,o.wg)(),(0,o.j4)(v,{key:0,onPressclose:f.closeNoUserPassMod},{default:(0,o.w5)((()=>[(0,o.Uk)(" Enter both username and password, please! ")])),_:1},8,["onPressclose"])):(0,o.kq)("",!0),w.wrongUserMod?((0,o.wg)(),(0,o.j4)(v,{key:1,onPressclose:f.closeWrongUserMod},{default:(0,o.w5)((()=>[(0,o.Uk)(" Wrong username or password. Correct them or register, please! ")])),_:1},8,["onPressclose"])):(0,o.kq)("",!0),(0,o._)("div",c,[(0,o._)("div",m,[p,(0,o._)("button",{class:"btn btn-primary mx-3",id:"btn-2",onClick:e[1]||(e[1]=(...s)=>f.registration&&f.registration(...s))},"Registration")])]),(0,o._)("div",g,[(0,o.Wm)(U)])],64)}r(7658);var f=r(8815),h=r(6314),v=r(148),U=r(1178),b={name:"LogIn",components:{InputReg:f.Z,ModalInfo:h.Z,AdvertPlace:v.Z},data(){return{userName:"",password:"",noUserOrPasswordMod:!1,wrongUserMod:!1}},methods:{saveUserName(s){this.userName=s},savePassword(s){this.password=s},closeNoUserPassMod(){this.noUserOrPasswordMod=!1},closeWrongUserMod(){this.wrongUserMod=!1},logInUser(){let s=this.userName,e=this.password;if(s&&e){const r=(0,U.N8)(),o=(0,U.iH)(r,"users/");(0,U.jM)(o,(r=>{let o=r.val(),t=Object.values(o);for(let n=0;n<t.length;n++)t[n].userName===s&&t[n].password===e?(localStorage.setItem("user",s),this.$store.state.user=s,this.$router.push("/")):this.wrongUserMod=!0}))}else this.noUserOrPasswordMod=!0},registration(){this.$router.push("/registration")}}},M=r(89);const _=(0,M.Z)(b,[["render",w],["__scopeId","data-v-48e97ba2"]]);var P=_}}]);
//# sourceMappingURL=821.53b9886a.js.map