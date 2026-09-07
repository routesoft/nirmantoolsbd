const bn={};
function toggleMenu(){document.querySelector('.navlinks')?.classList.toggle('open')}
function copyResult(id='result'){const el=document.getElementById(id);if(!el)return;navigator.clipboard?.writeText(el.innerText).then(()=>showToast('Result copied!')).catch(()=>{});}
function shareResult(){if(navigator.share){navigator.share({title:document.title,text:document.getElementById('result')?.innerText||document.title,url:location.href}).catch(()=>{});}else copyResult();}
function showToast(t){let x=document.getElementById('toast');if(!x){x=document.createElement('div');x.id='toast';x.className='toast';document.body.appendChild(x)}x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1800)}
function setLang(){document.documentElement.lang=document.documentElement.lang==='bn'?'en':'bn';const isBn=document.documentElement.lang==='bn';document.querySelectorAll('[data-bn][data-en]').forEach(e=>e.textContent=isBn?e.dataset.bn:e.dataset.en);localStorage.setItem('nt_lang',isBn?'bn':'en')}
document.addEventListener('DOMContentLoaded',()=>{const l=localStorage.getItem('nt_lang')||'bn';document.documentElement.lang=l;const isBn=l==='bn';document.querySelectorAll('[data-bn][data-en]').forEach(e=>e.textContent=isBn?e.dataset.bn:e.dataset.en);});
