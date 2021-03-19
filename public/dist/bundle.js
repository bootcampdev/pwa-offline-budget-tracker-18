(()=>{let e,t=[];const n=window.indexedDB.open("budget-tracker",1);function o(){let e=t.reduce(((e,t)=>e+parseInt(t.value)),0);document.querySelector("#total").textContent=e}function a(){let e=document.querySelector("#tbody");e.innerHTML="",t.forEach((t=>{let n=document.createElement("tr");n.innerHTML=`\n      <td>${t.name}</td>\n      <td>${t.value}</td>\n    `,e.appendChild(n)}))}function r(){let n=t.slice().reverse(),o=0,a=n.map((e=>{let t=new Date(e.date);return`${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()}`})),r=n.map((e=>(o+=parseInt(e.value),o)));e&&e.destroy();let l=document.getElementById("myChart").getContext("2d");e=new Chart(l,{type:"line",data:{labels:a,datasets:[{label:"Total Over Time",fill:!0,backgroundColor:"#6666ff",data:r}]}})}function l(e){let n=document.querySelector("#t-name"),l=document.querySelector("#t-amount"),c=document.querySelector(".form .error");if(""===n.value||""===l.value)return void(c.textContent="Missing Information");c.textContent="";let u={name:n.value,value:l.value,date:(new Date).toISOString()};e||(u.value*=-1),t.unshift(u),r(),a(),o(),fetch("/api/transaction",{method:"POST",body:JSON.stringify(u),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.errors?c.textContent="Missing Information":(n.value="",l.value="")})).catch((e=>{saveRecord(u),n.value="",l.value=""}))}n.onupgradeneeded=({target:e})=>{e.result.createObjectStore("trans-rec")},n.onsuccess=e=>{console.log(n.result)},fetch("/api/transaction").then((e=>e.json())).then((e=>{t=e,o(),a(),r()})),document.querySelector("#add-btn").onclick=function(){l(!0)},document.querySelector("#sub-btn").onclick=function(){l(!1)}})();