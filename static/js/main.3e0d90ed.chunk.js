(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/bg.b3595806.svg"},264:function(e,t,a){e.exports=a(399)},271:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var o,n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=a(35),s=(a(271),a(25)),m=a(46),u=a(47),d=a(44),p=a(56),f=a(57),h=a(37),g=a(16),b=a(4),v=a(50),y=a.n(v),C=function(e){return"@media (max-width:".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1399.98px"}[e],")")},E={colorBox:(o={position:"relative",width:"20%",height:function(e){return e.showMore?"25%":"50%"},margin:"0 auto",display:"inline-block",cursor:"pointer",marginBottom:"-5px","&:hover button":{opacity:1}},Object(b.a)(o,C("md"),{width:"50%",height:function(e){return e.showMore?"10%":"20%"}}),Object(b.a)(o,C("sm"),{width:"100%",height:function(e){return e.showMore?"7%":"10%"}}),o),goLight:{color:function(e){return y()(e.background).luminance()<=.1?"#c3cad6":"#121212"}},goDark:{color:function(e){return y()(e.background).luminance()>=.3?"#121212":"#c3cad6"}},copyButton:{color:function(e){return y()(e.background).luminance()>=.3?"#121212":"#dde2eb"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255,255,255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",textDecoration:"none",border:"none",opacity:"0"},seeMore:{color:function(e){return y()(e.background).luminance()>=.3?"#121212":"#dde2eb"},background:"rgba(255,255,255, 0.3)",position:"absolute",border:"none",right:"0",bottom:"0",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.65s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:" 1",transform:"scale(50)",zIndex:" 10",position:"absolute"},copyMsg:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h2":Object(b.a)({fontWeight:"400",textShadow:"1px 2px black",width:"100%",backgroundColor:"rgba(255, 255, 255, 0.3)",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},C("sm"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMsg:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:" 0.3s"}},x=a(217),k=a(483);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(f.a)(this,a)}}var O=function(e){Object(p.a)(a,e);var t=j(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(d.a)(o)),o}return Object(u.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.background,o=e.toMono,n=e.showMore,l=e.classes,c=this.state.copied;return r.a.createElement(x.CopyToClipboard,{text:a,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:a},className:l.colorBox},r.a.createElement("div",{style:{background:a},className:"".concat(l.copyOverlay," ").concat(c&&l.showOverlay)}),r.a.createElement("div",{className:"".concat(l.copyMsg," ").concat(c&&l.showMsg)},r.a.createElement("h2",{className:l.goDark},"Copied!"),r.a.createElement("p",{className:l.goDark},this.props.background),r.a.createElement("p",{className:l.goDark},this.props.name)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.goLight}," ",t," ")),r.a.createElement("button",{className:l.copyButton}," COPY ")),n&&r.a.createElement(i.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"More"))))}}]),a}(n.Component),w=Object(k.a)(E)(O),S=a(236),B=a(482),N=a(486),P=a(487),F=a(499),D=a(224),R=a.n(D),I=a(222),A=a.n(I),M=(a(278),{navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(b.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"'Roboto', sans-serif",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},C("sm"),{display:"none"}),slider:Object(b.a)({width:"340px",margin:"0 10px",display:"inline-block","& rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"16px",height:"16px",marginLeft:"-7px",marginRight:"-3px"},"& rc-slider-track":{backgroundColor:"transparent"}},C("xs"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"},goBack:Object(b.a)({display:"none",marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#c6d1cd",height:"100%"},C("sm"),{display:"inline-block"})});function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(f.a)(this,a)}}var L=function(e){Object(p.a)(a,e);var t=T(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).state={format:"hex",snbarstats:!1},o.formatHandler=o.formatHandler.bind(Object(d.a)(o)),o.closeSnackBar=o.closeSnackBar.bind(Object(d.a)(o)),o}return Object(u.a)(a,[{key:"formatHandler",value:function(e){this.setState({format:e.target.value,snbarstats:!0}),this.props.changeHandler(e.target.value)}},{key:"closeSnackBar",value:function(){this.setState({snbarstats:!1})}},{key:"render",value:function(){var e=this.props,t=e.leveler,a=e.changeLeveler,o=e.showLeveler,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(i.b,{to:"/"},"ReactColorPicker")),r.a.createElement("div",{className:n.goBack},r.a.createElement(i.b,{to:"/"},r.a.createElement(A.a,null))),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",t," "),r.a.createElement("div",{className:n.slider},r.a.createElement(S.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:a}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(B.a,{value:l,onChange:this.formatHandler},r.a.createElement(N.a,{value:"hex"},"Hex - #ffffff"),r.a.createElement(N.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(N.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),r.a.createElement(P.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:this.state.snbarstats,autoHideDuration:3e3,message:r.a.createElement("span",{id:"format-msg"},"Changed to ",l.toUpperCase()),ContentProps:{"aria-describedby":"format-msg"},onClose:this.closeSnackBar,action:[r.a.createElement(F.a,{onClick:this.closeSnackBar},r.a.createElement(R.a,{color:"inherit",key:"close","aria-label":"close"}))]}))}}]),a}(n.Component),G=Object(k.a)(M)(L);var H=Object(k.a)({paletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},paletteEmoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var t=e.paletteName,a=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.paletteFooter},t,r.a.createElement("span",{className:o.paletteEmoji},a))});function z(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return V(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return V(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(c)throw r}}}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var U=[50,100,200,300,400,500,600,700,800,900];function W(e){var t,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=z(U);try{for(o.s();!(t=o.n()).done;){var n=t.value;a.colors[n]=[]}}catch(d){o.e(d)}finally{o.f()}var r,l,c,i=z(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,y.a.scale(function(e){return[y()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var u in m)a.colors[U[u]].push({name:"".concat(s.name," ").concat(U[u]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[u],rgb:y()(m[u]).css(),rgba:y()(m[u]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(d){i.e(d)}finally{i.f()}return a}var q=a(18);var J=Object(k.a)({paletteStyle:{height:"100vh",display:"flex",flexDirection:"column"},paletteColorStyle:{height:"90%"},paletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",aligItems:"center",fontWeight:"bold"},paletteEmoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var t,a=e.classes,o=e.palettes,l=Object(q.g)().paletteID,c=W((t=l,o.find(function(e){return e.id===t}))),i=Object(n.useState)(500),s=Object(g.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)("hex"),p=Object(g.a)(d,2),f=p[0],h=p[1],b=c.colors[m].map(function(e){return r.a.createElement(w,{key:e.id,background:e[f],name:e.name,toMono:"/palette/".concat(l,"/").concat(e.id),showMore:!0})});return r.a.createElement("div",{className:a.paletteStyle},r.a.createElement(G,{leveler:m,changeLeveler:function(e){u(e)},changeHandler:function(e){h(e)},showLeveler:!0}),r.a.createElement("div",{className:a.paletteColorStyle},b),r.a.createElement(H,{paletteName:c.paletteName,emoji:c.emoji}))}),Z=a(138),Y=a.n(Z);var K,$,Q=r.a.memo(Object(k.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.25rem",paddingBottom:"0.25rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-6.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"30px",height:"25px",position:"absolute",top:"0px",right:"0px",zIndex:"10",opacity:"0"}})(function(e){var t=e.classes,a=e.paletteName,o=e.emoji,n=e.colors,l=e.gotoHandler,c=e.id,i=e.triggerDialog,s=n.map(function(e){return r.a.createElement("div",{className:t.miniColor,style:{backgroundColor:e.color},key:e.name})});return r.a.createElement("div",{className:t.root,onClick:function(){return l(c)}},r.a.createElement(Y.a,{className:t.deleteIcon,style:{transition:"all 500ms ease-in-out"},onClick:function(e){e.stopPropagation(),i(c)}}),r.a.createElement("div",{className:t.colors},s),r.a.createElement("h5",{className:t.title},a," ",r.a.createElement("span",{className:t.emoji},o)))}),function(){return!0}),X=a(140),_=a.n(X),ee={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:.01,transition:"opacity 500ms ease-out"}},root:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#A94F00",backgroundImage:"url(".concat(_.a,")"),backgroundAttachment:"fixed",backgroundSize:"cover"},container:(K={width:"50%",display:"flex",alignItems:"flext-start",flexDirection:"column",flexWrap:"wrap"},Object(b.a)(K,C("lg"),{width:"80%"}),Object(b.a)(K,C("xs"),{width:"70%"}),K),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:($={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"1rem"},Object(b.a)($,C("md"),{gridTemplateColumns:"repeat(2, 50%)",gridGap:"2rem"}),Object(b.a)($,C("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"2rem"}),$)},te=a(493),ae=a(489),oe=a(471),ne=a(500),re=a(488),le=a(501),ce=a(492),ie=n.forwardRef(function(e,t){return n.createElement(oe.a,Object.assign({direction:"up",ref:t},e))});var se=Object(k.a)(ee)(function(e){var t=e.palettes,a=e.classes,o=e.deletePalette,r=n.useState(!1),l=Object(g.a)(r,2),c=l[0],s=l[1],m=n.useState(""),u=Object(g.a)(m,2),d=u[0],p=u[1],f=Object(q.f)(),h=function(e){s(!0),p(e)},b=function(){s(!1),p("")},v=function(e){return f("/palette/".concat(e))};return n.createElement("div",{className:a.root},n.createElement("div",{className:a.container},n.createElement("nav",{className:a.nav},n.createElement("h1",null," Color Palettes "),n.createElement(i.b,{to:"/palette/new"}," Create Custom Palette ")),n.createElement(te.a,{className:a.palettes},t.map(function(e){return n.createElement(ae.a,{key:e.id,classNames:"fade",timeout:500},n.createElement(Q,Object.assign({},e,{key:e.id,gotoHandler:v,triggerDialog:h,id:e.id})))}))),n.createElement(ne.a,{open:c,TransitionComponent:ie,keepMounted:!0,onClose:b,"aria-describedby":"alert-dialog-slide-description"},n.createElement(re.a,null,"Do you want to delete this palette?"),n.createElement(le.a,null,n.createElement(ce.a,{onClick:function(){o(d),b()}},"Agree"),n.createElement(ce.a,{variant:"contained",color:"error",onClick:b},"Disagree"))))}),me=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],ue=a(43),de=a.n(ue),pe=a(19),fe=a(235),he=(a(283),a(472)),ge=a(473),be=a(474),ve=a(475),ye=a(476),Ce=a(73);function Ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(f.a)(this,a)}}var xe=function(e){Object(p.a)(a,e);var t=Ee(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).handleClose=function(){o.setState({open:!1})},o.showEmojiPicker=function(){o.setState({stage:"emoji"})},o.savePalette=function(e){var t={paletteName:o.state.newPaletteName,emoji:e.native};o.props.paletteSaver(t),o.setState({stage:""})},o.state={stage:"form",newPaletteName:""},o.handleTextValidator=o.handleTextValidator.bind(Object(d.a)(o)),o}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ce.ValidatorForm.addValidationRule("doesPaletteExist",function(t){return e.props.paletteInfo.every(function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()})})}},{key:"handleTextValidator",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props.handleClickClose,t=this.state.newPaletteName;return r.a.createElement("div",null,r.a.createElement(he.a,{open:"emoji"===this.state.stage,onClose:e},r.a.createElement(ge.a,{id:"form-dialog-title"},"Pick your emoji"),r.a.createElement(fe.a,{onSelect:this.savePalette}),r.a.createElement(be.a,{onClick:e,color:"primary"},"Close")),r.a.createElement(he.a,{open:"form"===this.state.stage,onClose:e,"aria-labelledby":"form-dial  og-title"},r.a.createElement(ge.a,{id:"form-dialog-title"},"Save your palette"),r.a.createElement(Ce.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(ve.a,null,r.a.createElement(Ce.TextValidator,{label:"Palette Name",value:t,name:"newPaletteName",onChange:this.handleTextValidator,validators:["required","doesPaletteExist"],errorMessages:["Please enter palette name.","Palette already exist!"]})),r.a.createElement(ye.a,null,r.a.createElement(be.a,{type:"submit",color:"primary"},"Save Palette"),r.a.createElement(be.a,{onClick:e,color:"primary"},"Close")))))}}]),a}(r.a.Component),ke=a(477),je=a(478),Oe=a(479),we=a(480),Se=a(408),Be=a(226),Ne=a.n(Be);function Pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(f.a)(this,a)}}var Fe=function(e){Object(p.a)(a,e);var t=Pe(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).handleClickOpen=function(){o.setState({formShowing:!0})},o.handleClickClose=function(){o.setState({formShowing:!1})},o.state={newPaletteName:"",formShowing:!1},o}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,o=e.paletteSaver,n=e.handleDrawerOpen,l=e.paletteInfo;return r.a.createElement("div",null,r.a.createElement(ke.a,null),r.a.createElement(je.a,{position:"fixed",color:"default",className:de()(t.appBar,Object(b.a)({},t.appBarShift,a))},r.a.createElement(Oe.a,{disableGutters:!a},r.a.createElement(we.a,{color:"inherit","aria-label":"Open drawer",onClick:n,className:de()(t.menuButton,a&&t.hide)},r.a.createElement(Ne.a,null)),r.a.createElement(Se.a,{variant:"h6",color:"inherit",noWrap:!0},"Create your Palette")),r.a.createElement("div",{className:t.navBtns},r.a.createElement(be.a,{className:t.saveBtns,variant:"contained",color:"primary",onClick:this.handleClickOpen},"Save"),r.a.createElement(i.b,{to:"/"},r.a.createElement(be.a,{className:t.saveBtns,variant:"contained",color:"secondary"}," Go Back")))),this.state.formShowing&&r.a.createElement(xe,{paletteSaver:o,paletteInfo:l,handleClickClose:this.handleClickClose}))}}]),a}(n.Component),De=a(234),Re=a(231),Ie=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",height:"69px"},appBarShift:{width:"calc(100% - ".concat(350,"px)"),marginLeft:350,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:350,flexShrink:0},drawerPaper:{width:350,display:"flex",alignItems:"center"},drawerHeader:Object(Re.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-350},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},chrContainer:{width:"90%",marginRight:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"},chrPicker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorName:{width:"100%",height:"69px"},buttons:{width:"100%"},button:{width:"50%"},navBtns:Object(b.a)({"& a":{textDecoration:"none"}},C("xs"),{marginRight:"0.75rem"}),saveBtns:Object(b.a)({margin:".5rem 0.5rem"},C("xs"),{margin:"0 0.25rem",marginTop:"0.5rem"})}};function Ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(f.a)(this,a)}}var Me,Te=function(e){Object(p.a)(a,e);var t=Ae(a);function a(e){var o;return Object(m.a)(this,a),(o=t.call(this,e)).state={colorSet:o.props.colors[0].colors,currentColor:"teal",colorName:""},o.handleTextValidator=o.handleTextValidator.bind(Object(d.a)(o)),o.updateCurrentColor=o.updateCurrentColor.bind(Object(d.a)(o)),o.colorHandler=o.colorHandler.bind(Object(d.a)(o)),o}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ce.ValidatorForm.addValidationRule("isColorNameUnique",function(t){return e.props.colors.every(function(e){return e.name.toLowerCase()!==t.toLowerCase()})}),Ce.ValidatorForm.addValidationRule("isColorUnique",function(t){return e.props.colors.every(function(t){return t.color!==e.state.currentColor})})}},{key:"handleTextValidator",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"colorHandler",value:function(){var e=this.state,t={color:e.currentColor,name:e.colorName};this.props.enlistColor(t),this.setState({colorName:""})}},{key:"render",value:function(){var e=this.state,t=e.currentColor,a=e.colorName,o=this.props,n=o.paletteIsFull,l=o.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.a,{color:t,onChangeComplete:this.updateCurrentColor,className:l.chrPicker}),r.a.createElement(Ce.ValidatorForm,{onSubmit:this.colorHandler,instantValidate:!1},r.a.createElement(Ce.TextValidator,{value:a,className:l.colorName,name:"colorName",onChange:this.handleTextValidator,margin:"normal",variant:"filled",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Please type a color name.","Sorry, color's name taken.","Color is already on the palette!"]}),r.a.createElement(be.a,{variant:"contained",color:"primary",className:l.addColor,type:"submit",disabled:n,style:{backgroundColor:n?"grey":t,color:y()(t).luminance()<=.1?"#c3cad6":"#121212"}},n?"Palette is Full":"Add Color")))}}]),a}(n.Component),Le=Object(pe.a)(Ie)(Te),Ge=a(502),He=a(481),ze=a(232),Ve=a.n(ze),Ue=a(233),We=a.n(Ue),qe=a(97),Je={root:(Me={position:"relative",width:"20%",height:"25%",margin:"0 auto",display:"inline-block",cursor:"pointer",marginBottom:"-3.5px","&:hover $deleteIcon":{color:"white",transform:"scale(1.5)"}},Object(b.a)(Me,C("lg"),{width:"25%",height:"20%"}),Object(b.a)(Me,C("md"),{width:"50%",height:"20%"}),Object(b.a)(Me,C("sm"),{width:"50%",height:"10%"}),Object(b.a)(Me,C("xs"),{width:"100%",height:"10%"}),Me),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return y()(e.shade.color).luminance()>=.3?"#121212":"#c3cad6"},letterSpacing:"1px",textTransform:"uppercase",display:"flex",justifyContent:"space-between","& span":{overflowWrap:"break-word",width:"80%"}},deleteIcon:{transition:"all .3s ease-in-out"}},Ze=Object(qe.b)(function(e){var t=e.classes,a=e.shade,o=e.click2Delete;return r.a.createElement("div",{className:t.root,style:{backgroundColor:a.color}},r.a.createElement("div",{className:t.boxContent},r.a.createElement("span",null,a.name),r.a.createElement(Y.a,{className:t.deleteIcon,onClick:o})))}),Ye=Object(pe.a)(Je)(Ze),Ke=Object(qe.a)(function(e){var t=e.colors,a=e.colorDelete;return r.a.createElement("div",{style:{height:"100%"}},t.map(function(e,t){return r.a.createElement(Ye,{index:t,key:e.name,shade:e,click2Delete:function(){return a(e.name)}})}))});var $e,Qe=Object(pe.a)(Ie,{withTheme:!0})(function(e){var t=Object(q.f)(),a=e.classes,o=e.theme,l=e.handlePaletteSaver,c=e.paletteInfo,i=e.maxColors,m=void 0===i?20:i,u=Object(n.useState)(!1),d=Object(g.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(me[0].colors),v=Object(g.a)(h,2),y=v[0],C=v[1],E=y.length>=m;return r.a.createElement("div",{className:a.root},r.a.createElement(Fe,{open:p,classes:a,paletteInfo:c,handleDrawerOpen:function(){f(!0)},paletteSaver:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=y,console.log(l(e)),t("/")}}),r.a.createElement(Ge.a,{className:a.drawer,variant:"persistent",anchor:"left",open:p,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(we.a,{onClick:function(){f(!1)}},"ltr"===o.direction?r.a.createElement(Ve.a,null):r.a.createElement(We.a,null))),r.a.createElement(He.a,null),r.a.createElement("div",{className:a.chrContainer},r.a.createElement(Se.a,{variant:"h4",gutterBottom:!0}," Pick Your Colors "),r.a.createElement("div",{className:a.buttons},r.a.createElement(be.a,{variant:"contained",color:"secondary",onClick:function(){C([])},className:a.button}," Clear Palette"),r.a.createElement(be.a,{variant:"contained",color:"primary",disabled:E,onClick:function(){for(var e,t,a=c.map(function(e){return e.colors}).flat(),o=!0;o;)e=Math.floor(Math.random()*a.length),t=a[e],o=y.some(function(e){return e.name===t.name});C([].concat(Object(s.a)(y),[t]))},className:a.button},"Random Color")),r.a.createElement(Le,{colors:y,enlistColor:function(e){C([].concat(Object(s.a)(y),[e]))},paletteIsFull:E}))),r.a.createElement("main",{className:de()(a.content,Object(b.a)({},a.contentShift,p))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Ke,{colors:y,colorDelete:function(e){C(y.filter(function(t){return t.name!==e}))},axis:"xy",onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;C(Object(qe.c)(y,t,a))}})))}),Xe={paletteStyle:{height:"100vh",display:"flex",flexDirection:"column"},paletteColorStyle:{height:"90%"},goBack:($e={position:"relative",width:"20%",height:"50%",margin:"0 auto",display:"inline-block",cursor:"pointer",marginBottom:"-5px",backgroundColor:"#121212","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255,255,255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",textDecoration:"none",border:"none"}},Object(b.a)($e,C("md"),{width:"100%",height:"15%"}),Object(b.a)($e,C("xs"),{width:"100%",height:"10%"}),$e)};var _e=Object(k.a)(Xe)(function(e){var t=e.classes,a=e.palettes,o=Object(q.g)(),l=o.paletteID,c=o.colorID,s=Object(n.useState)("hex"),m=Object(g.a)(s,2),u=m[0],d=m[1],p=W(function(e){return a.find(function(t){return t.id===e})}(l)),f=p.paletteName,h=p.emoji,b=p.id,v=function(e,t){var a=[],o=e.colors;for(var n in o)a=a.concat(o[n].filter(function(e){return e.id===t}));return a.slice(1)}(p,c),y=v.map(function(e){return r.a.createElement(w,{key:e.name,name:e.name,background:e[u],showMore:!1})});return r.a.createElement("div",{className:t.paletteStyle},r.a.createElement(G,{changeHandler:function(e){d(e)},showLeveler:!1}),r.a.createElement("h1",null,"".concat(v[0].name.slice(-20,-4)," Color Palette")),r.a.createElement("div",{className:t.paletteColorStyle},y,r.a.createElement("div",{className:t.goBack},r.a.createElement(i.b,{to:"/palette/".concat(b),className:t.backButton},"GO BACK"))),r.a.createElement(H,{paletteName:f,emoji:h}))}),et={root:{backgroundColor:"#A94F00",backgroundImage:"url(".concat(_.a,")"),backgroundAttachment:"fixed",backgroundSize:"cover",height:"100vh"},page:{height:"100%",position:"absolute",width:"100%"}};var tt=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry the path you have taken does not exist! Lets go ",r.a.createElement(i.b,{to:"/"},"back home"),"."))};function at(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(f.a)(this,a)}}function ot(e){var t=e.palettes,a=e.saveZePalette,o=e.deletePalette,n=e.classes,l=Object(q.e)();return r.a.createElement(te.a,{className:n.root},r.a.createElement(ae.a,{classNames:"fade",timeout:500,key:l.key},r.a.createElement("div",{className:n.page},r.a.createElement(q.c,{location:l},r.a.createElement(q.a,{path:"/",element:r.a.createElement(se,{palettes:t,deletePalette:o})}),r.a.createElement(q.a,{path:"/palette/new",element:r.a.createElement(Qe,{handlePaletteSaver:a,paletteInfo:t})}),r.a.createElement(q.a,{path:"/palette/:paletteID",element:r.a.createElement(J,{palettes:t})}),r.a.createElement(q.a,{path:"/palette/:paletteID/:colorID",element:r.a.createElement(_e,{palettes:t})}),r.a.createElement(q.a,{path:"*",element:r.a.createElement(tt,null)})))))}var nt=function(e){Object(p.a)(a,e);var t=at(a);function a(e){var o;Object(m.a)(this,a),(o=t.call(this,e)).syncToLocalStorage=function(){window.localStorage.setItem("palettes",JSON.stringify(o.state.palettes))},o.deletePalette=function(e){o.setState(function(t){return{palettes:t.palettes.filter(function(t){return t.id!==e})}},o.syncToLocalStorage)};var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||me},o.saveZePalette=o.saveZePalette.bind(Object(d.a)(o)),o}return Object(u.a)(a,[{key:"paletteFinder",value:function(e){return this.state.palettes.find(function(t){return t.id===e})}},{key:"saveZePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncToLocalStorage)}},{key:"render",value:function(){var e=this.state.palettes,t=this.props.classes;return r.a.createElement(ot,{palettes:e,saveZePalette:this.saveZePalette,deletePalette:this.deletePalette,classes:t})}}]),a}(n.Component),rt=Object(k.a)(et)(nt);var lt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(rt,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(lt,null))),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.3e0d90ed.chunk.js.map