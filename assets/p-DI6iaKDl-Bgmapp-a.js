function a(n=500){return function(i,l,e){let u=e.value,t;e.value=function(...o){return clearTimeout(t),new Promise(r=>{t=setTimeout(()=>{r(u.apply(this,o))},n)})}}}export{a as t};
