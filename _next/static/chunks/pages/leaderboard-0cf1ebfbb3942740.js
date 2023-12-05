(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2268],{705:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leaderboard",function(){return l(7645)}])},5097:function(e,a,l){"use strict";l.d(a,{e:function(){return DisplayPicture}});var s=l(4817),r=l(8735),i=l.n(r),d=l(1389),t=l(5834);let DisplayPicture=e=>{let{displayName:a,profileImageUrl:l,size:r="regular"}=e;return(0,s.jsx)("div",{className:(0,d.m)("typography-brand-body flex items-center justify-center rounded-full bg-camo-500 text-camo-200","regular"===r&&"min-h-[32px] min-w-[32px]","large"===r&&"min-h-[48px] min-w-[48px] text-lg"),children:null===a?(0,s.jsx)(t.JO,{name:"user-outline"}):null!==l?(0,s.jsx)(i(),{alt:a,className:"h-full w-full rounded-full bg-camo-500",height:48,src:l,width:48}):a.charAt(0)})}},7645:function(e,a,l){"use strict";l.r(a),l.d(a,{__N_SSP:function(){return N}});var s=l(4817),r=l(8851),i=l(7833),d=l(1248),t=l(7622),n=l(6179),o=l(5834),c=l(6529),m=l(6359),x=l(9752),p=l(5097),h=l(5644),u=l(6897),f=l(3338),y=l(5130);let b=(0,u.fz)(e=>{var a,l;let{t:r}=(0,i.Z)("leaderboard"),{me:o}=(0,f.Hi)(e.me),{data:c,isLoading:p}=(0,t.ZP)((0,n.FP)("/leaderboard/top"),n.U2),{data:h}=(0,t.ZP)((0,n.FP)("/leaderboard/recent"),n.U2,{refreshInterval:1e4}),{data:u,error:y}=(0,t.ZP)((0,n.FP)("/user/leaderboard-position"),n.i3),b=null!==(a=null==c?void 0:c.users)&&void 0!==a?a:[],N=null!==(l=null==h?void 0:h.users)&&void 0!==l?l:[];return(0,s.jsxs)(d.Fragment,{children:[(0,s.jsx)(m.Jp,{children:(0,s.jsx)(m.h4,{underlined:!0,children:(0,s.jsx)(x.JL,{navPoints:!0,navProfile:!0,me:o})})}),(0,s.jsx)(m.or,{children:(0,s.jsx)(m.M9,{className:"mt-0 w-full xs:mt-8 lg:mt-0",position:"top",children:(0,s.jsx)(m.M9,{className:"h-full animate-enter-fade",position:"center-x",children:(0,s.jsxs)("div",{className:"flex h-full w-full animate-appear-slide-up flex-col-reverse gap-8 sm:flex-row",children:[(0,s.jsx)("div",{className:"flex flex-1 flex-col",children:(0,s.jsxs)("div",{className:"mr-0 flex min-h-0 flex-1 flex-col sm:mr-8 sm:flex-[1px]",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-between xs:flex-row xs:items-center",children:[(0,s.jsx)("h1",{className:"typography-brand-heading-2 text-yellow-100",children:r("h1")}),(0,s.jsx)("aside",{className:"typography-brand-body-l text-camo-200",children:r("aside")})]}),(0,s.jsx)("div",{className:"mt-8 max-h-[70vh] overflow-auto border-t border-camo-400 xs:max-h-max",children:!p&&(0,s.jsxs)("table",{className:"w-full animate-enter-fade",children:[(0,s.jsx)("thead",{className:"typography-brand-body-l-caps sticky top-0 text-camo-400 backdrop-blur-lg",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"p-0",children:(0,s.jsx)("div",{className:"border-b border-camo-400 px-4 py-2 text-start",children:r("table.th_0")})}),(0,s.jsx)("th",{className:"p-0",children:(0,s.jsx)("div",{className:"border-b border-camo-400 px-4 py-2 text-start",children:r("table.th_1")})}),(0,s.jsx)("th",{className:"p-0",children:(0,s.jsx)("div",{className:"min-w-[150px] border-b border-camo-400 px-4 py-2 text-start",children:r("table.th_2")})}),(0,s.jsx)("th",{className:"p-0",children:(0,s.jsx)("div",{className:"border-b border-camo-400 px-4 py-2 text-end",children:r("table.th_3")})})]})}),(0,s.jsxs)("tbody",{children:[u&&!y&&(0,s.jsx)(LeaderboardRow,{isYou:!0,user:u.user}),b.map((e,a)=>(0,s.jsx)(LeaderboardRow,{user:e},"".concat(e.displayName,"-").concat(a)))]})]})})]})}),(0,s.jsx)(m.iz,{axis:"y",className:"hidden sm:block"}),(0,s.jsxs)("div",{className:"flex min-h-0 w-full flex-col sm:h-full sm:w-72",children:[(0,s.jsx)("h2",{className:"typography-brand-heading-2 sm:typography-brand-heading-3 text-yellow-100 sm:mb-[22px] sm:mt-2 sm:h-[50px] lg:h-[54px]",children:r("h2")}),(0,s.jsx)(m.iz,{axis:"x",className:"hidden sm:block"}),(0,s.jsx)("div",{className:"flex flex-1 flex-row gap-4 overflow-auto py-6 sm:flex-col",children:N.map((e,a)=>(0,s.jsx)(j,{index:a,user:e},e.displayName))})]})]})})})})]})});b.getLayout=e=>(0,s.jsx)(m.RQ,{height:"responsive",children:e});var N=!0;function LeaderboardRow(e){var a,l,r,d;let{isYou:t,user:n}=e,c=(0,h.U)(),{lang:m}=(0,i.Z)();return(0,s.jsxs)("tr",{className:"typography-brand-heading-3 text-camo-200",children:[(0,s.jsx)("td",{className:"p-0",children:(0,s.jsx)("div",{className:"px-0 py-2 pr-4 text-start",children:(0,s.jsx)("div",{className:"bg-camo-700 px-4 py-2 text-center",children:null!==(a=n.rank)&&void 0!==a?a:"-"})})}),(0,s.jsx)("td",{className:"p-0",children:(0,s.jsxs)("div",{className:"flex min-w-[250px] max-w-[350px] items-center gap-8 px-4 py-2",children:[(0,s.jsx)(p.e,{displayName:null!==(l=n.displayName)&&void 0!==l?l:null,profileImageUrl:null!==(r=n.twitter.profileImageUrl)&&void 0!==r?r:null}),t?(0,s.jsx)(o.hU,{"aria-label":n.displayName,ariaLabelCase:"unmodified",name:"edit",onClick:c.open,renderAriaLabel:"before"}):(0,s.jsx)("div",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:n.displayName})]})}),(0,s.jsx)("td",{className:"p-0",children:(0,s.jsx)("div",{className:"typography-brand-body-l-bold max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap px-4 py-2 text-start",children:null!==(d=n.referrerDisplayName)&&void 0!==d?d:"-"})}),(0,s.jsx)("td",{className:"p-0",children:(0,s.jsx)("div",{className:"px-4 py-2 text-end",children:(0,y.HA)(n.points,m,{maximumFractionDigits:0,useGrouping:"min2"})})})]})}a.default=b;let j=d.memo(e=>{var a,l;let{index:d,user:t}=e,{t:n}=(0,i.Z)("leaderboard");return(0,s.jsxs)("div",{className:"flex min-w-fit animate-enter-fade items-center gap-4",style:{animationDelay:"".concat(50*d,"ms"),animationFillMode:"forwards",animationName:d>30?"none":"enter-fade",opacity:d>30?1:0},children:[(0,s.jsx)(p.e,{displayName:null!==(a=null==t?void 0:t.displayName)&&void 0!==a?a:null,profileImageUrl:null!==(l=null==t?void 0:t.twitter.profileImageUrl)&&void 0!==l?l:null,size:"large"}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col sm:overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)("div",{className:"typography-brand-body-l-bold flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap text-yellow-100",children:t.displayName}),(0,s.jsx)("time",{className:"typography-brand-body hidden text-camo-200 sm:block",children:(0,s.jsx)(r.Z,{i18nKey:"leaderboard:time_ago",components:{0:(0,s.jsx)(c.fZ,{ms:Date.now()-Date.parse(t.registeredOn),options:{largest:1}})}})})]}),t.referrerDisplayName&&(0,s.jsx)("div",{className:"typography-brand-body overflow-hidden overflow-ellipsis whitespace-nowrap text-camo-200",children:n("invited_by",{inviter:t.referrerDisplayName})}),(0,s.jsx)("time",{className:"typography-brand-body text-camo-200 sm:hidden",children:(0,s.jsx)(r.Z,{i18nKey:"leaderboard:time_ago",components:{0:(0,s.jsx)(c.fZ,{ms:Date.now()-Date.parse(t.registeredOn),options:{largest:1}})}})})]})]},"".concat(t.displayName,"-").concat(d))},(e,a)=>e.user.displayName===a.user.displayName);j.displayName="RecentUserRow"}},function(e){e.O(0,[3714,9728,4049,2811,9774,2888,179],function(){return e(e.s=705)}),_N_E=e.O()}]);