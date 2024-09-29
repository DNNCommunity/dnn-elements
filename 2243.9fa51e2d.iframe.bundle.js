"use strict";(self.webpackChunk_dnncommunity_dnn_elements=self.webpackChunk_dnncommunity_dnn_elements||[]).push([[2243],{"./dist/esm/dnn-collapsible.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{dnn_collapsible:()=>DnnCollapsible});var _index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-9dbb7028.js");const DnnCollapsible=class{constructor(hostRef){(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.dnnCollapsibleHeightChanged=(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"dnnCollapsibleHeightChanged",7),this.expanded=!1,this.transitionDuration=150}handleHeightChanged(){requestAnimationFrame((()=>{this.updateSize()}))}async updateSize(){this.expanded&&(requestAnimationFrame((()=>{this.container.style.maxHeight=`${this.container.scrollHeight}px`})),setTimeout((()=>{this.container.style.maxHeight="none"}),this.transitionDuration))}handledExpandedChanged(expanded){expanded?this.updateSize():requestAnimationFrame((()=>{this.container.style.maxHeight=`${this.container.scrollHeight}px`,requestAnimationFrame((()=>{this.container.style.maxHeight="0px"}))})),setTimeout((()=>{requestAnimationFrame((()=>{this.dnnCollapsibleHeightChanged.emit()}))}),this.transitionDuration)}componentDidLoad(){this.container.style.transition=`max-height ${this.transitionDuration}ms ease-in-out`}render(){return(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"cfc99de9b30d157279893315946fa8b789f7dfb4"},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"879c465670e98b5e3ce8dbc911c31e07f45a3087",id:"container",class:this.expanded&&"expanded",ref:el=>this.container=el,style:{transition:`max-height ${this.transitionDuration}ms ease-in-out`}},(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"9cf1aa532dc647037f0b1f8014c5567db11863b0"})))}get el(){return(0,_index_9dbb7028_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{expanded:["handledExpandedChanged"]}}};DnnCollapsible.style=":host{display:block}#container{max-height:0;overflow:hidden;transition:max-height 300ms ease-in-out}"}}]);