(this["webpackJsonpgithub-pages-portfolio"]=this["webpackJsonpgithub-pages-portfolio"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),i=a.n(l),c=(a(79),a(4)),o=a(17),s=a(18),m=a(21),d=a(20),g=(a(80),a(24)),h=a(7),E=a(11),y=a(9),b=a(36),u=a(12),p=a(73),f=a(63),v=a.n(f),j=a(22),w=a(113),O=a(72).a.div({visible:{opacity:1},hidden:{opacity:0}}),k=/[^@]+@[^@]+\.[^@]+/,C={center:{display:"flex",justifyContent:"center",alignItems:"center"}},R={name:"",email:"",message:"",error:null,submitted:!1,sending:!1,sent:!1},x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){if(n.setState({submitted:!0}),!(!n.state.name||!k.test(n.state.email)||!n.state.message)){var t=n.state;n.setState({sending:!0}),v.a.post("https://formspree.io/f/xnqonepp",{data:t}).then((function(e){n.setState(Object(c.a)(Object(c.a)({},R),{},{sent:!n.state.sent})),setTimeout((function(){n.setState({sent:!n.state.sent})}),3200)})).catch((function(e){n.setState({error:e,sending:!1})}))}},n.onChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.state=Object(c.a)({},R),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:C.center},r.a.createElement(u.a,{style:{maxWidth:600,width:"70%"}},r.a.createElement(u.a.Group,{controlId:"name"},r.a.createElement(u.a.Label,null,"Your Name"),r.a.createElement(u.a.Control,{name:"name",placeholder:"Name",value:this.state.name,isInvalid:!this.state.name&&this.state.submitted,onChange:this.onChange}),r.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please enter a name.")),r.a.createElement(u.a.Group,{controlId:"email"},r.a.createElement(u.a.Label,null,"Your Email"),r.a.createElement(u.a.Control,{name:"email",type:"email",isInvalid:!k.test(this.state.email)&&this.state.submitted,placeholder:"Email",value:this.state.email,onChange:this.onChange}),r.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please enter a valid email.")),r.a.createElement(u.a.Group,{controlId:"message"},r.a.createElement(u.a.Label,null,"Message"),r.a.createElement(u.a.Control,{name:"message",as:"textarea",placeholder:"Message",isInvalid:this.state.submitted&&!this.state.message,value:this.state.message,onChange:this.onChange}),r.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Password must be at least 6 letters.")),r.a.createElement(j.a,{onClick:this.onSubmit,style:{width:90}},this.state.sending?r.a.createElement(w.a,{animation:"border",role:"status",size:"sm"}):r.a.createElement("div",null,"Send")),this.state.error&&r.a.createElement(p.a,{variant:"danger",style:{margin:15}},this.state.error.message),r.a.createElement(O,{style:C.center,pose:this.state.sent?"visible":"hidden"},r.a.createElement("h3",{style:Object(c.a)({textAlign:"center"},C.center)},"Thanks, I'll be in touch shortly!"))))}}]),a}(n.Component),z={center:{display:"flex",justifyContent:"center",alignItems:"center"},socialButton:{display:"flex",justifyContent:"center",alignItems:"center",padding:3,width:30,height:30,marginLeft:10,marginRight:10,borderRadius:100}},S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:z.center},r.a.createElement(j.a,{variant:"primary",style:z.socialButton,target:"_blank",href:"https://www.linkedin.com/in/winton-nathan-roberts/"},r.a.createElement(h.a,{color:"white",icon:y.i,size:"lg",style:{margin:0,padding:0}})),r.a.createElement(j.a,{variant:"primary",style:z.socialButton,target:"_blank",href:"https://www.facebook.com/crypticdeluge/"},r.a.createElement(h.a,{color:"white",icon:y.c,size:"lg",style:{margin:0,padding:0}})),r.a.createElement(j.a,{variant:"primary",style:z.socialButton,target:"_blank",href:"https://www.instagram.com/sydneyhandsanitiser/"},r.a.createElement(h.a,{color:"white",icon:y.f,size:"lg",style:{margin:0,padding:0}})))}}]),a}(n.Component),T=a(25),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(T.a.Link,this.props,this.props.children)}}]),a}(r.a.Component),P=g.ScrollLink(B),N=a(69),I=a.n(N),A=a(70),L=a.n(A),W=a(71),H=a.n(W),_=a(31),D=a(8),F=a(48),J={center:{display:"flex",justifyContent:"center",alignItems:"center"},card:{margin:20,width:500},background:{backgroundColor:"purple"},navbar:{backgroundColor:"#7D3C98"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:7},footerText:{display:"flex",justifyContent:"center",alignItems:"center",color:"white",margin:5,marginTop:60,textAlign:"center"}},Z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){g.scrollSpy.update()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_.a,{style:Object(c.a)({},J.navbar),variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(_.a.Brand,{href:"#home"},r.a.createElement("strong",{style:{fontWeight:700}},"Winton Nathan-Roberts")),r.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement(T.a.Link,{href:"tel:+61 434 674 369"},r.a.createElement("div",{style:J.center},r.a.createElement(h.a,{color:"white",icon:E.m,size:"lg",style:{width:40}}),r.a.createElement("div",{style:{fontWeight:500,color:"white"}},"0478741332"))),r.a.createElement(T.a.Link,{href:"mailto:winton.nathan.roberts@gmail.com"},r.a.createElement("div",{style:J.center},r.a.createElement(h.a,{color:"white",icon:E.a,size:"lg",style:{width:40}}),r.a.createElement("div",{style:{fontWeight:500,color:"white"}},"winton.nathan.roberts@gmail.com")))),r.a.createElement(T.a,{className:"ml-auto",variant:"pills"},r.a.createElement(P,{activeClass:"active",to:"aboutme",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"ABOUT")),r.a.createElement(P,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"PORTFOLIO")),r.a.createElement(P,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"CONTACT"))))),r.a.createElement(g.Element,{name:"aboutme",className:"element",style:{padding:20,paddingBottom:0}},r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},J.center),{},{textAlign:"center"})},"Frontend, Backend & Data Engineer"),r.a.createElement("div",{style:J.center},r.a.createElement("div",{style:{height:250,width:250,borderRadius:1e3,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",margin:20}},r.a.createElement("img",{alt:"Avatar",src:I.a,style:{height:240,borderRadius:1e3}}))),r.a.createElement("hr",{style:{height:2,width:260,backgroundColor:"grey"}}),r.a.createElement("div",{style:J.center},r.a.createElement("small",{style:{fontSize:18,textAlign:"center"}},"Over a year of commercial experience in software development with first class honours in Computer Science.")),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{margin:30})},r.a.createElement(j.a,{href:"/Winton Nathan-Roberts_CV.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{style:J.center},r.a.createElement(h.a,{icon:E.i,size:"2x",style:{marginRight:10}}),r.a.createElement("h5",{style:{padding:0,margin:0}},"View Resume")))),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{bottom:0})},r.a.createElement("img",{alt:"Hero",src:L.a,style:{width:550,maxWidth:"100%"}})))),r.a.createElement(g.Element,{name:"portfolio",className:"element"},r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.background),{},{padding:10})},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},J.center),{},{textAlign:"center",color:"white"})},"Personal Projects"),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(D.a,{style:J.card,className:"mb-2"},r.a.createElement(D.a.Header,{style:J.cardHeader},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.l,size:"lg"})),"React.js"),r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.j,size:"lg"})),"Node.js"),r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.e,size:"lg"})),"Keras"),r.a.createElement("div",null,r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.h,size:"lg"})),"Firebase")),r.a.createElement(h.a,{icon:E.b,color:"grey",size:"2x"})),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null," NLP Beverage Classifier "),r.a.createElement(D.a.Text,null,"React app that maintains a list of messages for each user account which allows for Create, Update & Delete (CRUD) operations with the help of Firebase. Each message is classified by requests to a RESTful Node.js API with a Keras built NLP Deep Learning classifier as either: Wine, Beer, Liquor, Non-Alcoholic, Dunnage or Kegs.")),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{margin:5,marginBottom:20})},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://git.sr.ht/~winton-nathan-roberts/dnn-todo-list",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement(h.a,{icon:F.a,color:"black",size:"lg",style:{marginRight:5}}),"Source Code"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dnn-todo-list.herokuapp.com/",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement("img",{alt:"Heroku icon",src:H.a,style:{height:20,marginRight:5}}),"Heroku Demo"))),r.a.createElement(D.a,{style:J.card,className:"mb-2"},r.a.createElement(D.a.Header,{style:J.cardHeader},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.g,size:"lg"})),"Java"),r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.l,size:"lg"})),"TCP/IP"),r.a.createElement("div",null,r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.l,size:"lg"})),"Threads")),r.a.createElement(h.a,{icon:y.b,color:"#fabb01",size:"2x"})),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null," Peer-Peer Blockchain "),r.a.createElement(D.a.Text,null,"Peer to Peer Blockchain that implements a consensus algorithm to ensure peers maintain a blockchain that's synchronised with all other peers. Clients and peers communicate over TCP/IP, and transactions take the form of a simple message with a client identifier. Peers maintain a list of known peers which they periodically update according to the HeartBeat protocol.")),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{margin:5,marginBottom:20})},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://git.sr.ht/~winton-nathan-roberts/P2P-Blockchain",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement(h.a,{icon:F.a,color:"black",size:"lg",style:{marginRight:5}}),"Source Code")))),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(D.a,{style:J.card,className:"mb-2"},r.a.createElement(D.a.Header,{style:J.cardHeader},r.a.createElement("div",{style:J.center},r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.k,size:"lg"})),"Python"),r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.f,size:"lg"})),"Pandas"),r.a.createElement("div",null,r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.j,size:"lg"})),"SciPy")),r.a.createElement(h.a,{icon:E.g,color:"tomato",size:"2x",style:{width:40}})),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,"Covid-19 Data Analysis and Modelling"),r.a.createElement("ul",null,r.a.createElement("li",null,"Estimates the basic reproduction number (R0) for each country in the early onset of the COVID-19 outbreak by fitting a logistic model to case data provided by the World Health Organisation."),r.a.createElement("li",null,"Proposes an extension of the classic SIR model to model the effect of migration on the susceptible (S), infected (I) and recovered (R) populations of different regions."))),r.a.createElement("div",null,r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{margin:5,marginBottom:20})},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://colab.research.google.com/drive/1mtowIrHnZpYHrevp5QrgoWoNIzNEjioa#scrollTo=ZpxJh8DAUN13",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement(h.a,{icon:E.d,color:"tomato",size:"lg",style:{marginRight:5}}),"Jupyter Notebook"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/file/d/12kjj0S9Qc87gKBDwIs5KEpcwWFhm_PAb/view?usp=sharing",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement(h.a,{icon:y.d,size:"lg",color:"#00abbf",style:{marginRight:5}}),"Paper")))),r.a.createElement(D.a,{style:J.card,className:"mb-2"},r.a.createElement(D.a.Header,{style:J.cardHeader},r.a.createElement("div",{style:J.center},r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.l,size:"lg"})),r.a.createElement("div",{style:{textAlign:"center"}},"React Native")),r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:E.h,size:"lg"})),"GraphQL"),r.a.createElement("div",null,r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.h,size:"lg"})),"JavaScript")),r.a.createElement(h.a,{icon:E.c,color:"black",size:"2x",style:{width:40}})),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null," BikeRadar: Share Bike Aggregator "),r.a.createElement(D.a.Text,null,"Aggregates nearby share bikes from popular providers like Lime into a map view which can be filtered by bike attributes through an intuitive and elegant UI. Populates the map with JSON data provided by requests to a RESTful API.")),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{margin:5,marginBottom:20})},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://apps.apple.com/app/bikeradar/id1493046821",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement(h.a,{icon:y.a,size:"lg",color:"#00abff",style:{marginRight:5}}),"iOS App Store"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://play.google.com/store/apps/details?id=com.moltenreact.bikeradar",style:Object(c.a)({marginRight:5,marginLeft:5},J.center)},r.a.createElement(h.a,{icon:y.e,size:"lg",color:"#00abbf",style:{marginRight:5}}),"Play Store")))),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(D.a,{style:J.card,className:"mb-2"},r.a.createElement(D.a.Header,{style:J.cardHeader},r.a.createElement("div",{style:J.center},r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.m,size:"lg"})),"Unity"),r.a.createElement("div",{style:{marginRight:8}},r.a.createElement("div",{style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.n,size:"lg"})),".NET C#")),r.a.createElement(h.a,{icon:E.k,color:"#55b9da",size:"2x",style:{width:40}})),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null," Wild West Zombie Mobile Game "),r.a.createElement(D.a.Text,null,"A 3D mobile game that's a cross between Red Dead Redemption and Plants vs Zombies, that's the product of collaboration with some of my talented friends over a few weeks with communication facilitated by Zoom.")),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.center),{},{margin:5,marginBottom:20})},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=yZam23yNTZY",style:Object(c.a)({},J.center)},r.a.createElement(h.a,{icon:y.o,size:"lg",color:"red",style:{marginRight:5}}),"YouTube")))))),r.a.createElement(g.Element,{name:"contact",className:"element"},r.a.createElement("div",{style:{backgroundColor:"white",paddingTop:20}},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},J.center),{},{textAlign:"center",color:"black"})},"Get In Touch"),r.a.createElement(x,null))),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},J.navbar),{},{padding:20})},r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{style:J.footerText},"Copyright \xa9 Winton Nathan-Roberts 2020"),r.a.createElement("div",{style:J.footerText},"Built with React.js")),r.a.createElement("div",{style:{height:"40vh"}})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(109);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a.p+"static/media/avatar.5fd88976.svg"},70:function(e,t,a){e.exports=a.p+"static/media/hero.ae74261d.svg"},71:function(e,t,a){e.exports=a.p+"static/media/heroku_clean.2914c334.svg"},74:function(e,t,a){e.exports=a(110)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.82715809.chunk.js.map