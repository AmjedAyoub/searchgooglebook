(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(56)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),r=a.n(o),c=a(58),s=a(60),i=a(59),u=a(6),m=a(7),h=a(8),d=a(11),f=a(9),E=a(12);a(28);var v=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};a(29);var b=function(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),"Save")};a(30);var p=function(e){var t=e.children;return l.a.createElement("div",{className:"jumbotron"},t)},k=a(4),g=a.n(k),N={getBooks:function(){return g.a.get("/api/books")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},saveBook:function(e){return g.a.post("/api/books",e)},saveNote:function(e,t){return g.a.put("/api/books/"+e,t)},searchBook:function(e){return g.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}};function w(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function y(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(49);function S(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function C(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function j(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}a(50);function O(e){var t=e.handleClose,a=e.show,n=e.children,o=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:o},l.a.createElement("section",{className:"modal-main"},l.a.createElement("button",{onClick:t},"close"),l.a.createElement("section",{className:"modal-main2"},n)))}var z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],search:"",show:!1},a.loadBooks=function(){N.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.saveBook=function(e){N.saveBook(e).then(function(e){return a.handleShow()}).catch(function(e){return console.log(e)})},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(u.a)({},n,l))},a.search=function(e){N.searchBook(e).then(function(e){for(var t,n,l=[],o=0;o<e.data.items.length;o++){t=e.data.items[o].volumeInfo.imageLinks?e.data.items[o].volumeInfo.imageLinks.smallThumbnail:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6",n=e.data.items[o].volumeInfo.authors?e.data.items[o].volumeInfo.authors[0]:e.data.items[o].volumeInfo.publisher;var r={id:e.data.items[o].volumeInfo.infoLink,title:e.data.items[o].volumeInfo.title,sub:e.data.items[o].volumeInfo.subtitle,des:e.data.items[o].volumeInfo.description,url:t,author:n};l.push(r)}a.setState({books:l})}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),a.search(a.state.search)},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(w,{fluid:!0},l.a.createElement(y,null,l.a.createElement(p,null,l.a.createElement("h1",null,"Search Google for Books!"),l.a.createElement("form",null,l.a.createElement(j,{value:this.state.search,onChange:this.handleInputChange,name:"search",placeholder:"Search books here!"}),l.a.createElement(I,{onClick:this.handleFormSubmit},"Search Book")))),l.a.createElement(y,null,this.state.books.length?l.a.createElement(S,null,this.state.books.map(function(t){return l.a.createElement(C,{key:t.id},l.a.createElement(y,null,l.a.createElement(B,{size:"md-8"},l.a.createElement("a",{href:t.id},l.a.createElement("strong",null,t.title),l.a.createElement("p",null,t.sub),l.a.createElement("p",null,"By: ",t.author))),l.a.createElement(B,{size:"md-4"},l.a.createElement(b,{onClick:function(){return e.saveBook({title:t.title,sub:t.sub,author:t.author,synopsis:t.des,img:t.url,link:t.id})}}))),l.a.createElement(y,null,l.a.createElement(B,{size:"md-4"},l.a.createElement("a",{href:t.id},l.a.createElement("img",{src:t.url}))),l.a.createElement(B,{size:"md-8"},l.a.createElement("p",null,t.des))))})):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(O,{show:this.state.show,handleClose:this.handleClose},l.a.createElement("strong",null,"************************************",l.a.createElement("br",null),"******* Your book has been *******",l.a.createElement("br",null),"******* saved successfully *********",l.a.createElement("br",null),"************************************")))}}]),t}(n.Component);a(51);function D(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container2"},l.a.createElement("ul",{className:"list-group"},t))}function x(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}a(52);function _(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn delbtn"}),"Delete")}var A=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],note:"",show:!1,bookId:"",notes:[]},a.loadBooks=function(){N.getBooks().then(function(e){a.setState({books:e.data,title:"",author:"",synopsis:"",img:"",link:""})}).catch(function(e){return console.log(e)})},a.loadNotes=function(e){N.getBook(e).then(function(t){a.setState({bookId:e}),a.setState({notes:t.data.notes}),a.handleShow()}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){N.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.saveNote=function(e,t){N.saveNote(e,t).then(function(e){a.setState({note:""}),a.handleClose()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(u.a)({},n,l))},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(w,{fluid:!0},this.state.books.length?l.a.createElement(D,null,this.state.books.map(function(t){return l.a.createElement(x,{key:t._id},l.a.createElement(y,null,l.a.createElement(B,{size:"md-8"},l.a.createElement("a",{href:t.link},l.a.createElement("strong",null,t.title),l.a.createElement("p",null,t.sub),l.a.createElement("p",null,"By: ",t.author))),l.a.createElement(B,{size:"md-4"},l.a.createElement(_,{onClick:function(){return e.deleteBook(t._id)}}),l.a.createElement(I,{variant:"primary",onClick:function(){return e.loadNotes(t._id)}},"View notes"))),l.a.createElement(y,null,l.a.createElement(B,{size:"md-4"},l.a.createElement("a",{href:t.link},l.a.createElement("img",{src:t.img}))),l.a.createElement(B,{size:"md-8"},l.a.createElement("p",null,t.synopsis))))})):l.a.createElement("h3",null,"No Results to Display"),l.a.createElement("div",null,l.a.createElement(O,{show:this.state.show,handleClose:this.handleClose},l.a.createElement(y,null,l.a.createElement(B,{size:"md-12"},l.a.createElement("strong",null,"Notes:"))),this.state.notes.length?l.a.createElement(y,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(D,null,this.state.notes.map(function(t){return l.a.createElement(x,{key:t._id},l.a.createElement("p",null,t.body),l.a.createElement(v,{onClick:function(){return e.saveNote(e.state.bookId,{noteID:t._id,todo:"delete"})}}))})))):l.a.createElement("h3",null,"No Notes to Display"),l.a.createElement(y,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(j,{value:this.state.note,onChange:this.handleInputChange,name:"note",placeholder:"Add new note here...."}),l.a.createElement(I,{onClick:function(){return e.saveNote(e.state.bookId,{body:e.state.note,todo:"save"})}},"Add note"))))))}}]),t}(n.Component);var F=function(){return l.a.createElement(w,{fluid:!0},l.a.createElement(y,null,l.a.createElement(B,{size:"md-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var L=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Search"),l.a.createElement("a",{className:"navbar-brand",href:"/saved"},"Saved books"))};var R=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:z}),l.a.createElement(i.a,{exact:!0,path:"/books",component:z}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:A}),l.a.createElement(i.a,{component:F}))))};r.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.635e508a.chunk.js.map