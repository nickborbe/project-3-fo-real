(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(63)},39:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},41:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),o=n.n(i),l=(n(39),n(8)),s=n(1),c=n(2),u=n(4),h=n(3),p=n(5),g=(n(40),n(41),n(13)),m=n(7),d=n.n(m),f=n(14),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=new FormData;t.append("theImageParameter",n.state.newImage),t.append("theTitle",n.state.newTitle),t.append("theDescription",n.state.newDescription),d.a.post("".concat("/api","/projects"),t,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then(function(){n.props.getData(),n.setState({newTitle:"",newDescription:""})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(l.a)({},a,r))},n.updateFileInState=function(e){n.setState({newImage:e.target.files[0]})},n.state={newTitle:"",newDescription:"",newImage:null},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"add-project"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"newTitle",value:this.state.newTitle,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"newDescription",value:this.state.newDescription,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("legend",{style:{marginTop:"100px"}},"Choose a Picture"),r.a.createElement("input",{type:"file",onChange:this.updateFileInState}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).updateFileInState=function(e){n.setState({image:e.target.files[0]})},n.handleFormSubmit=function(e){var t=n.state.title,a=n.state.description,r=new FormData;r.append("theTitle",t),r.append("theDescription",a),r.append("theImageParameter",n.state.image),e.preventDefault(),d.a.post("http://localhost:5000/api/projects/update/".concat(n.props.theProject._id),r).then(function(){n.props.getAllTheProjectsInAppJS(),n.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},n.handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.state={title:n.props.theProject.title,description:n.props.theProject.description,image:null},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("=====",this.state),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("input",{style:{padding:"5px",fontSize:"20px",margin:"5px"},type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("input",{name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{type:"file",onChange:this.updateFileInState}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).changeEditing=function(e){n.setState({editing:e})},n.resetEdit=function(){n.setState({editing:!1})},n.deleteProject=function(e){d.a.delete("http://localhost:5000/api/projects/".concat(e)).then(function(){n.props.getData()}).catch(function(e){console.log(e)})},n.showProjects=function(){return n.props.allTheProjects.filter(function(e){return e.owner===n.props.theUser._id}).map(function(e,t){return n.state.editing!==t?r.a.createElement("div",{key:e._id},r.a.createElement(f.b,{to:"/projects/".concat(e._id)},r.a.createElement("h3",null,e.title)),r.a.createElement("p",{style:{maxWidth:"400px"}},e.description," "),r.a.createElement("button",{onClick:function(){n.changeEditing(t)}},"Edit This Project"),r.a.createElement("button",{onClick:function(){n.deleteProject(e._id)}},"Delete This Project")):r.a.createElement(b,{resetEditingSituation:n.resetEdit,theProject:e,getAllTheProjectsInAppJS:n.props.getData})})},n.state={editing:!1,bufferFinished:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({bufferFinished:!0})},1e3)}},{key:"render",value:function(){return this.props.theUser&&this.props.allTheProjects?r.a.createElement("div",null,r.a.createElement("div",{style:{width:"60%",float:"left"}},this.showProjects()),r.a.createElement("div",{style:{width:"40%",float:"right"}},r.a.createElement(E,{getData:this.props.getData}))):this.state.bufferFinished?r.a.createElement(g.a,{to:"/"}):r.a.createElement("h2",null,"loading...")}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),d.a.post("http://localhost:5000/api/tasks",{theTitle:n.state.newTitle,theDescription:n.state.newDescription,theProject:n.props.theProjectToAddTasksTo}).then(function(){n.props.getData(),n.setState({newTitle:"",newDescription:""})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(l.a)({},a,r))},n.state={newTitle:"",newDescription:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"newTitle",value:this.state.newTitle,onChange:this.handleChange}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"newDescription",value:this.state.newDescription,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){var t=n.state.title,a=n.state.description;e.preventDefault(),d.a.post("http://localhost:5000/api/tasks/update/".concat(n.props.theTask._id),{theTitle:t,theDescription:a}).then(function(){n.props.getAllTheProjectsInAppJS(),n.props.resetEditingSituation()}).catch(function(e){return console.log(e)})},n.handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.state={title:n.props.theTask.title,description:n.props.theTask.description},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("input",{style:{padding:"5px",fontSize:"20px",margin:"5px"},type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("input",{name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).resetEdit=function(){n.setState({editing:!1})},n.edit=function(e){n.setState({editing:e})},n.deleteTask=function(e){d.a.delete("http://localhost:5000/api/tasks/"+e).then(function(){n.props.getData()}).catch(function(e){console.log(e)})},n.state={editing:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.allTheProjects,n=this.props.match.params.theID,a=t.find(function(e){return e._id===n});return this.props.ready?r.a.createElement("div",{style:{paddingTop:"100px"}},r.a.createElement("div",{style:{float:"left"}},r.a.createElement("h2",null,a.title),r.a.createElement("h3",null,a.description),r.a.createElement("img",{style:{width:"400px"},src:a.image}),a.tasks.length>0&&r.a.createElement("ul",null,r.a.createElement("h3",null,"Tasks For This Project"),r.a.createElement("hr",null),a.tasks.map(function(t,n){return e.state.editing!==n?r.a.createElement("li",{key:t._id},r.a.createElement("h4",null,t.title),r.a.createElement("h6",null,t.description),r.a.createElement("button",{onClick:function(){e.edit(n)}},"Edit This Task"),r.a.createElement("button",{onClick:function(){e.deleteTask(t._id)}},"Delete This Task")):r.a.createElement(w,{theTask:t,getAllTheProjectsInAppJS:e.props.getData,resetEditingSituation:e.resetEdit})}))),r.a.createElement("div",{className:"right-side-column",style:{float:"right"}},r.a.createElement(v,{theProjectToAddTasksTo:a._id,getData:this.props.getData}))):r.a.createElement("h3",null,"Loading...")}}]),t}(a.Component),S=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.currentUser=function(){return t.service.get("/getcurrentuser").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var n=d.a.create({baseURL:"/api/auth",withCredentials:!0});this.service=n},y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.tryToSignUp=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.signup(t,a).then(function(){n.props.toggleForm("signup"),n.props.getUser()})},n.state={usernameInput:"",passwordInput:""},n.service=new S,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.tryToSignUp},r.a.createElement("h3",null,"Signup For An Account"),r.a.createElement("legend",null,"Username"),r.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("legend",null,"Password"),r.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.tryToLogin=function(e){e.preventDefault();var t=n.state.usernameInput,a=n.state.passwordInput;n.service.login(t,a).then(function(){n.props.toggleForm("login"),n.props.getUser()})},n.state={usernameInput:"",passwordInput:""},n.service=new S,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.tryToLogin},r.a.createElement("h3",null,"Login"),r.a.createElement("legend",null,"Username"),r.a.createElement("input",{value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("legend",null,"Password"),r.a.createElement("input",{value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("button",null,"Submit"))}}]),t}(a.Component);var T=function(e){return r.a.createElement("nav",null,r.a.createElement(f.b,{to:"/projects",style:{textDecoration:"none",margin:"10px"}},"Projects"),!e.theUser&&r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){return e.toggleForm("login")}}," Login "),r.a.createElement("button",{onClick:function(){return e.toggleForm("signup")}},"Sign Up")),e.theUser&&r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){e.pleaseLogOut().then(function(){e.getUser()})}},"Log Out "),r.a.createElement("span",null,"Hello, ",e.theUser.username)))},I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).getAllProjects=function(){d.a.get("".concat("/api","/projects"),{withCredentials:!0}).then(function(e){n.setState({listOfProjects:e.data,ready:!0})})},n.getCurrentlyLoggedInUser=function(){n.service.currentUser().then(function(e){n.setState({currentlyLoggedIn:e,ready:!0})}).catch(function(){n.setState({currentlyLoggedIn:null})})},n.toggleForm=function(e){var t;t="signup"===e?"signupShowing":"loginShowing",n.setState(Object(l.a)({},t,!n.state[t]))},n.state={listOfProjects:[],currentlyLoggedIn:null,ready:!1,signupShowing:!1,loginShowing:!1},n.service=new S,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllProjects(),this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return console.log("=-=-=-=-=-=-=-",this.state),r.a.createElement("div",null,r.a.createElement(T,{theUser:this.state.currentlyLoggedIn,pleaseLogOut:function(){return e.service.logout()},toggleForm:this.toggleForm,getUser:this.getCurrentlyLoggedInUser}),this.state.signupShowing&&r.a.createElement(y,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),this.state.loginShowing&&r.a.createElement(C,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/projects",render:function(t){return r.a.createElement(j,Object.assign({},t,Object(l.a)({theUser:e.state.currentlyLoggedIn,allTheProjects:e.state.listOfProjects,getData:e.getAllProjects,ready:e.state.ready},"theUser",e.state.currentlyLoggedIn)))}}),r.a.createElement(g.b,{exact:!0,path:"/projects/:theID",render:function(t){return e.state.currentlyLoggedIn?r.a.createElement(O,Object.assign({},t,{allTheProjects:e.state.listOfProjects,ready:e.state.ready,getData:e.getAllProjects,theUser:e.state.currentlyLoggedIn})):r.a.createElement(g.a,{to:"/"})}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.b62b1381.chunk.js.map