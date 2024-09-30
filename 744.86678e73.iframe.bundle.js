"use strict";(self.webpackChunk_dnncommunity_dnn_elements=self.webpackChunk_dnncommunity_dnn_elements||[]).push([[744],{"./dist/esm/dnn-example-form.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{dnn_example_form:()=>DnnExampleForm});var _index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-9dbb7028.js");const DnnExampleForm=class{constructor(hostRef){(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.users=[{value:"1",label:"Daniel Valadas : @valadas"},{value:"2",label:"Brian Dukes : @bdukes"},{value:"3",label:"David Poindexter : @david-poindexter"},{value:"4",label:"Mitchel Sellers : @mitchelsellers"}],this.characters=[],this.lastFetchedPage=0,this.searchCharacters=async(search,page)=>{null!=this.charactersAbortController&&this.charactersAbortController.abort(),this.charactersAbortController=new AbortController;try{const response=await fetch(`https://rickandmortyapi.com/api/character?name=${encodeURIComponent(search)}&page=${page}`,{signal:this.charactersAbortController.signal});if(response.ok)return await response.json()}catch(error){"AbortError"!=error.name&&console.error(error)}},this.resume=void 0,this.profilePicData=void 0,this.profilePicConfirmed=!1,this.filteredUsers=[]}handleCharacterSearchChanged(search){if(null==search||""==search)return this.characterPicker.suggestions=[],void(this.characterPicker.totalSuggestions=0);this.searchCharacters(search,1).then((result=>{this.characters=result.results;var suggestions=result.results.map((r=>({value:r.id,label:r.name})));this.characterPicker.suggestions=suggestions,this.characterPicker.totalSuggestions=result.info.count,this.lastFetchedPage=1}))}loadMoreCharacters(searchTerm){this.lastFetchedPage++,this.searchCharacters(searchTerm,this.lastFetchedPage).then((result=>{this.characters=[...this.characters,...result.results];var suggestions=this.characters.map((r=>({value:r.id,label:r.name})));this.characterPicker.suggestions=suggestions,this.characterPicker.totalSuggestions=result.info.count}))}resumeDropped(detail){var singleFile=detail[0];this.resume=singleFile}profilePicCropped(imageData){this.profilePicData=imageData}render(){return(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"167f4483571611b807cab9f598944cb10cfa5f7c"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-fieldset",{key:"627acc43e5f7d6eb2da21f0fa773691bf216c909",class:"full-form-width",ref:el=>this.fieldset=el,label:"Sample Form",helpText:"This is some help text."},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"199f383878b4dc9bfb0a89724d0399d21ee3f25e",slot:"label-prefix"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"baa0c0d1c670320347c8c931c21e90bd7735ca1d",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"b7a164efa4e2b07afe8bdaa0029a73766c2ad522",d:"m120-200 180-280-180-280h480q20 0 37.5 9t28.5 25l174 246-174 246q-11 16-28.5 25t-37.5 9H120Zm146-80h334l142-200-142-200H266l130 200-130 200Zm130-200L266-680l130 200-130 200 130-200Z"}))),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"04e0eb69f987dc612bc20a47d8e7abad1793c9d7",slot:"label-suffix"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{key:"307ec3f13221bf80c5a4f01149c4797cd86a37b2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",{key:"8d2184a7a5bb74a06d59fb6b97660f1f7588d5a3",d:"M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm0-80 321-321-321-321-321 321 321 321Zm-40-281h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0-160Z"}))),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",{key:"de405a7dc88a35f2eaab34def8e9e7e1f004008b"},"This is a sample form"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{key:"95b205a6ad7523ccc5633ab5aa1685390736ef3e"},"It includes dnn elements commonly used in forms."),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"fcd930278c25e8ea4eb7b0e79c034048c1fbe759",onClick:()=>this.fieldset.setFocused()},"Focus"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"6d09cfda6eb339c5fc686dc4ae89ae00bee655a2",onClick:()=>this.fieldset.setBlurred()},"Blur"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"6fd25c11ddc127fbe769fa1aae26af7425131c59",onClick:()=>this.fieldset.disable()},"Disable"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"a82b9887a4487445908ad39d2366dda4c000a0f1",onClick:()=>this.fieldset.enable()},"Enable"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"1b56a18d639b838df32171993980366ff2d04c45",onClick:()=>this.fieldset.setValidity(!1,"Field is not valid!")},"Set Invalid"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"369822bbedee7d70c62552cb858b6d5899a6be3d",onClick:()=>this.fieldset.setValidity(!0)},"Set Valid"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"cb2c298aaf8911d2a150b52de55c019472845deb",onClick:()=>this.fieldset.pinLabel()},"Pin Label"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"0829ec953b6722e0120a6c2a26418b598110b5d1",onClick:()=>this.fieldset.unpinLabel()},"Unpin Label")),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("form",{key:"e6ec48119cb8de6af829b991dcf3f3abae068c62",onSubmit:e=>{e.preventDefault(),console.group("Form submitted"),console.log(e),console.groupEnd(),console.group("Form data");new FormData(e.target).forEach(((value,key)=>{console.log(key,value)})),console.groupEnd()}},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-fieldset",{key:"bc949be7b80dc17793c4e45874e7e9728402c969",label:"User Information"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"28b4ec1584c9dfd794f7aed935b30035320adf49",class:"fields"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"fc522007811273a0443915c0e8e16ce927f77f42",label:"First Name",type:"text",required:!0,name:"firstName"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"4ede673e9f9b4cbe8a5de5b3f532610c40a3b6b4",label:"Last Name",type:"text",required:!0,name:"lastName"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"bfe1486baef2c596544b9664be870f966ec31293",label:"Email",type:"email",required:!0,helpText:"We will never share your email with anyone else.",name:"email"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"58c89239c4ffc39c8441d700552467242d9a5ed0",label:"Gmail",type:"email",helpText:"Please enter your Gmail address.",name:"gmail",pattern:".+@gmail\\.com"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"229edbacc319f54750fc5e7154fbc5b2ef6423a7",label:"Password",type:"password",required:!0,minlength:8,allowShowPassword:!0,helpText:"Your password must be at least 8 characters long.",name:"password"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"9107ad7526e82834951e2a1f73580f3cf23edaaf",label:"Confirm Password",type:"password",required:!0,minlength:8,allowShowPassword:!0,helpText:"Please confirm your password.",name:"confirmPassword"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"1de88d885e0c3bf01ebf7467d1837cc2e9d678dd",label:"Phone",type:"tel",pattern:"\\d{3}[\\-]\\d{3}[\\-]\\d{4}",required:!0,helpText:"Please enter your phone number in the format 123-456-7890.",name:"phone"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"adaf7b42c58cf1f93a438a69587918cf574dd175",label:"Date of Birth",type:"date",required:!0,name:"dateOfBirth"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"db71dab0e954e1dba2691377ada60db617e1cfe7",label:"Date and Time of Birth",type:"datetime-local",helpText:"If you have such a good memory... (optional)",name:"dateTimeOfBirth"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"abfc213af8f67554bcc7dd94d00753da7f41474e",type:"number",label:"Age",min:0,max:115,name:"age"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"ee45a27d955668c444620c56af531cc4fa9d2780",label:"Notification Time",type:"time",helpText:"Optionaly indicate your preferred time for notifications.",name:"notificationTime"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-input",{key:"951d5a1b2d833ec29e189d6c0b9583438f843f53",label:"Website",type:"url",helpText:"Please enter the URL of your website.",name:"website"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-checkbox",{key:"05f80166b67dd61b01465f5312ca9397c1745186",name:"rememberMe",value:"true"},"Remember me"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-color-input",{key:"b247437c4927ff7a44ff110acaaf4bb050680d52",label:"Favorite Color",name:"favoriteColor",helpText:"If you have any..."}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-select",{key:"1d489bdc45bb570b99f724581a28abd83c100b9a",label:"Gender",name:"gender",required:!0},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{key:"e6d6b99ab2bb6a1452493ae28b02feb7e86742fa",value:""},"--- Select ---"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{key:"e0a6023dfbaf7d96256fbe02c291c3ca596cd1e0",value:"male"},"Male"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{key:"ffd1bd4cff23ea87fa07d1094ee0dfabe9f3e6b9",value:"female"},"Female"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{key:"aee96e6ddc003381067f743f67f1906127b73458",value:"other"},"Prefer not to say")),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-textarea",{key:"4cd152c861d9cf0dbdfd8427c0756dd81e0f73da",label:"Review",name:"review",value:"This is a review.",helpText:"Please enter your review.",required:!0}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"f0b2a0aad8a29bd76818761c874dd8e3fe1a0065"},"Subscribe to our newsletter",(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-toggle",{key:"66e536cdc9351269dba014388994fa8a7c3062ae",name:"subscribe"})),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-autocomplete",{key:"b9549fe07f269037768fb3909b5e54dcb5b8ae80",label:"User",helpText:"Select a user",required:!0,suggestions:this.filteredUsers,onSearchQueryChanged:e=>{const search=(e.detail||"").toLowerCase();this.filteredUsers=this.users.filter((u=>u.label.toLowerCase().includes(search)))},renderSuggestion:suggestion=>(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:"flex",gap:"0.5rem"}},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{style:{width:"3rem",height:"3rem",borderRadius:"50%",padding:"0.25rem"},src:`https://avatars.githubusercontent.com/${suggestion.label.split("@").pop()}`,alt:suggestion.label}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,suggestion.label.split(":")[0]),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,suggestion.label.split(":").pop().trim())))}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-autocomplete",{key:"7add87aa3ea3c00e63b0c0c03fc259482ae921d3",ref:el=>this.characterPicker=el,label:"Favorite Character",helpText:"Select your favorite Rick and Morty character",renderSuggestion:suggestion=>{const character=this.characters.find((r=>r.id===suggestion.value));return(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:"flex"}},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{style:{width:"5rem",height:"5rem",borderRadius:"50%",padding:"0.25rem"},src:character.image,alt:character.name}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",margin:"0.5em 0"}},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong",null,character.name),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,character.species," / ",character.gender," / ",character.status," "),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"Location: ",character.location.name),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"Origin: ",character.origin.name)))},onSearchQueryChanged:e=>{this.handleCharacterSearchChanged(e.detail)},onNeedMoreItems:e=>this.loadMoreCharacters(e.detail.searchTerm)}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-fieldset",{key:"356dbdc59e578846eb73566b687dedd3629a1009",label:"Your Resume"},void 0===this.resume&&(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-dropzone",{key:"89e3c11ea88885fa72088df4b660dbbf71bb0022",name:"resume",onFilesSelected:e=>this.resumeDropped(e.detail)}),this.resume&&(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{key:"e8815ec7068d23b0767b4cd788ed02e1e2e3358f",class:"filename"},"File: ",this.resume.name,(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-button",{key:"103e65fea9fcd3d45fee2b81bf71b04bd45b841f",appearance:"danger",onClick:()=>this.resume=void 0},"Remove"))),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-fieldset",{key:"6a0356aa592666e7b85bc35b95090f5c9764b398",label:"Your profile Picture"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b420362e8b913cb27b96fe2d558be79a8767f0fd",class:"profile-pic"},!1===this.profilePicConfirmed&&(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-image-cropper",{key:"94b1597d0a21c96c4dadf1bda833bbb17a14f12c",name:"profilePic",onImageCropChanged:e=>this.profilePicCropped(e.detail)}),!1===this.profilePicConfirmed&&null!=this.profilePicData&&(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-button",{key:"965756ce9c9eb1558591ff7b714ec20e9ce876b2",onClick:()=>this.profilePicConfirmed=!0},"Confirm Crop"),this.profilePicConfirmed&&[(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{key:"e331ab0e97c48f397f651bd7c4aa1b690adf5b9d",src:this.profilePicData,alt:"Profile Picture"}),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-button",{key:"a870a2bdac79c77df43689f64f1fe482b85656b4",appearance:"danger",onClick:()=>{this.profilePicData=void 0,this.profilePicConfirmed=!1}},"Remove")])),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"0ca64544a44af1937b14484a6f951b976326af93",class:"vertical"},"Some code",(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-monaco-editor",{key:"463684d57a383e1b5bfd787a2f57373a50dddca7",name:"code",value:"<p>Some html</p>"})),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"d71b6f2f0a34474bc2319a2b404c5587dfe170ea",class:"vertical"},"Biography",(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-richtext",{key:"ab818698e6c47a077ee96564135fbe633cb4e165",name:"biography",value:"<p>Some html</p>"})))),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"d5e1908236d0318a4d2c5b3e39224f3bc6c6df3e",class:"controls"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-button",{key:"9840707334dfad8cfa32eaff2246dffc7db56155",reversed:!0,formButtonType:"reset"},"Reset"),(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("dnn-button",{key:"7b1edd837ebb2f697eccffce6621c00e7ecbcb83",formButtonType:"submit"},"Submit"))))}};DnnExampleForm.style=":host{display:block}dnn-fieldset>.fields{display:grid;grid-template-columns:1fr;gap:1rem}@media (min-width: 768px){dnn-fieldset>.fields{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 1024px){dnn-fieldset>.fields{grid-template-columns:repeat(3, 1fr)}}dnn-fieldset>.fields label{display:flex;flex-direction:row;align-items:center;gap:0.5rem}dnn-fieldset>.fields label.vertical{flex-direction:column;justify-content:flex-start;align-items:stretch}svg{width:1em;height:1em}.controls{display:flex;gap:1rem;margin-top:1rem}.controls *:first-child{margin-left:auto}.full-form-width{grid-column:1/-1}.filename{display:flex;gap:1rem;align-items:center}.profile-pic{display:flex;flex-direction:column;gap:1rem}.profile-pic dnn-button{margin:0 auto}.profile-pic img{max-width:100%}"}}]);