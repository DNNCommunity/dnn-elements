import{Host,h}from"@stencil/core";export class DnnVerticalOverflowMenu{constructor(){this.previousMenuWidth=0,this.showDropdownButton=!1,this.showDropdownMenu=!1}componentDidRender(){requestAnimationFrame((()=>{this.moveItemsToDropDownIfNecessery(),this.resizeObserver=new ResizeObserver((entries=>{for(let entry of entries)entry.contentRect.width<this.previousMenuWidth&&this.moveItemsToDropDownIfNecessery(),this.previousMenuWidth>0&&entry.contentRect.width>this.previousMenuWidth&&this.moveItemsToMenuIfPossible(),this.previousMenuWidth=entry.contentRect.width})),this.resizeObserver.observe(this.element)}))}moveItemsToDropDownIfNecessery(){const menuItems=Array.from(this.menu.querySelector("slot").assignedElements()),availableWidth=this.menu.getBoundingClientRect().width;let neededWidth=2*parseFloat(getComputedStyle(this.element).fontSize);if(menuItems.forEach((item=>neededWidth+=this.getFullWidth(item))),neededWidth+=(menuItems.length-1)*parseFloat(getComputedStyle(this.element).fontSize),neededWidth>availableWidth){this.showDropdownButton=!0;var lastItem=menuItems[menuItems.length-1];if(null==this.dropdown)return;lastItem.slot="dropdown",this.moveItemsToDropDownIfNecessery()}}moveItemsToMenuIfPossible(){if(null==this.dropdown||!this.dropdown.hasChildNodes())return;const menuItems=Array.from(this.menu.querySelector("slot").assignedElements()),availableWidth=this.menu.getBoundingClientRect().width;let neededWidth=2*parseFloat(getComputedStyle(this.element).fontSize);neededWidth+=(menuItems.length-1)*parseFloat(getComputedStyle(this.element).fontSize),menuItems.forEach((item=>neededWidth+=this.getFullWidth(item)));const firstItem=this.dropdown.querySelector("slot").assignedElements()[0];null!=firstItem&&(neededWidth+=this.getFullWidth(firstItem)),neededWidth<availableWidth&&(null!=firstItem&&(firstItem.slot=""),null==firstItem&&(this.dropdown.classList.remove("visible"),this.showDropdownMenu=!1,this.showDropdownButton=!1))}getFullWidth(item){var width=item.getBoundingClientRect().width,styles=getComputedStyle(item);return width+=parseFloat(styles.marginLeft),width+=parseFloat(styles.marginRight),width+=parseFloat(styles.paddingLeft),width+=parseFloat(styles.paddingRight)}toggleOverflowMenu(){if(this.showDropdownMenu=!this.showDropdownMenu,this.showDropdownMenu){this.dropdown.classList.add("visible");let contentHeight=0;Array.from(this.dropdown.querySelector("slot").assignedElements()).forEach((item=>contentHeight+=item.getBoundingClientRect().height));const emHeight=parseFloat(getComputedStyle(this.dropdown).fontSize),gapsHeight=emHeight*(this.dropdown.children.length-1)/2;contentHeight+=gapsHeight;contentHeight+=2*emHeight,this.dropdown.style.height=`${contentHeight}px`;const dismissMenu=e=>{const buttonRect=this.button.getBoundingClientRect();(e.clientX<buttonRect.left||e.clientX>buttonRect.right||e.clientY<buttonRect.top||e.clientY>buttonRect.bottom)&&this.toggleOverflowMenu(),document.removeEventListener("click",dismissMenu)};setTimeout((()=>{document.addEventListener("click",dismissMenu,!1)}),100)}else this.dropdown.classList.remove("visible"),this.dropdown.style.height="0px"}render(){return h(Host,null,h("div",{class:"menu-container"},h("div",{class:"menu",ref:el=>this.menu=el},h("slot",null)),this.showDropdownButton&&h("div",{class:"overflow"},h("button",{ref:el=>this.button=el,class:"icon",onClick:()=>this.toggleOverflowMenu()},h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))),h("div",{class:"dropdown",ref:el=>this.dropdown=el},h("slot",{name:"dropdown"})))))}static get is(){return"dnn-vertical-overflow-menu"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["dnn-vertical-overflow-menu.scss"]}}static get styleUrls(){return{$:["dnn-vertical-overflow-menu.css"]}}static get states(){return{showDropdownButton:{},showDropdownMenu:{}}}static get elementRef(){return"element"}}