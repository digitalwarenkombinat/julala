"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{1606:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var o=a(7462),r=a(5987),n=a(7294),c=(a(5697),a(6010)),i=a(4670),l=n.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.row,d=void 0!==l&&l,s=(0,r.Z)(e,["classes","className","row"]);return n.createElement("div",(0,o.Z)({className:(0,c.Z)(a.root,i,d&&a.row),ref:t},s))})),d=(0,i.Z)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l),s=a(1749),p=a(9693),u=a(3871),h=a(885),m=a(2775),g=n.createContext();var k=g;var b=a(7812),f=n.forwardRef((function(e,t){var a=e.autoFocus,i=e.checked,l=e.checkedIcon,d=e.classes,s=e.className,p=e.defaultChecked,u=e.disabled,g=e.icon,f=e.id,y=e.inputProps,x=e.inputRef,v=e.name,w=e.onBlur,Z=e.onChange,C=e.onFocus,$=e.readOnly,N=e.required,B=e.tabIndex,I=e.type,E=e.value,F=(0,r.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),S=(0,m.Z)({controlled:i,default:Boolean(p),name:"SwitchBase",state:"checked"}),j=(0,h.Z)(S,2),z=j[0],R=j[1],P=n.useContext(k),q=u;P&&"undefined"===typeof q&&(q=P.disabled);var M="checkbox"===I||"radio"===I;return n.createElement(b.Z,(0,o.Z)({component:"span",className:(0,c.Z)(d.root,s,z&&d.checked,q&&d.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),P&&P.onFocus&&P.onFocus(e)},onBlur:function(e){w&&w(e),P&&P.onBlur&&P.onBlur(e)},ref:t},F),n.createElement("input",(0,o.Z)({autoFocus:a,checked:i,defaultChecked:p,className:d.input,disabled:q,id:M&&f,name:v,onChange:function(e){var t=e.target.checked;R(t),Z&&Z(e,t)},readOnly:$,ref:x,required:N,tabIndex:B,type:I,value:E},y)),z?l:g)})),y=(0,i.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(f),x=n.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.color,d=void 0===l?"secondary":l,s=e.edge,p=void 0!==s&&s,h=e.size,m=void 0===h?"medium":h,g=(0,r.Z)(e,["classes","className","color","edge","size"]),k=n.createElement("span",{className:a.thumb});return n.createElement("span",{className:(0,c.Z)(a.root,i,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===m&&a["size".concat((0,u.Z)(m))])},n.createElement(y,(0,o.Z)({type:"checkbox",icon:k,checkedIcon:k,classes:{root:(0,c.Z)(a.switchBase,a["color".concat((0,u.Z)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),n.createElement("span",{className:a.track}))})),v=(0,i.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(x),w=a(2318),Z=a(8743),C=a(5893);function $(){var e=(0,Z.ZP)((function(e){return e.invertColorMode}));return(0,C.jsx)(d,{children:(0,C.jsx)(w.Z,{component:"div",paragraph:!0,children:(0,C.jsxs)(s.Z,{component:"label",container:!0,alignItems:"center",justifyContent:"center",spacing:1,children:[(0,C.jsx)(s.Z,{item:!0,children:"S/W"}),(0,C.jsx)(s.Z,{item:!0,children:(0,C.jsx)(v,{checked:(0,Z.ZP)((function(e){return e.colorMode})),onChange:e,name:"colorMode",color:"primary"})}),(0,C.jsx)(s.Z,{item:!0,children:"Bunt"})]})})})}}}]);