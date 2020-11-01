(function handle(win,doc){
    const html={
        element:[...document.querySelector('.tab-links').children],
        el:[...doc.querySelector('.tab-content').children],
        openTab:doc.querySelector('[data-open]')
    }
    function RemoveAllActiveClass(){
        html.element.forEach(tab=>{
          tab.className=tab.className.replace(" active","")
        })
    }

       function showCurrentTab(id){
        // console.log(id)
        const tabcontent=doc.querySelector('#'+id)
        tabcontent.style.display='flex'
      }
    function selectElement(event){
        disable()
        RemoveAllActiveClass()
        const target=event.currentTarget;
        showCurrentTab(target.dataset.id)
        target.className += " active"
    }
    function listenForChanges(){
        html.el.forEach(el=>el.addEventListener('click',selectElement))
    }
    
    function disable(){
        html.element.forEach(element=>{
            element.style.display='none'
        })
    }
    function init(){
        listenForChanges()
        disable()
        html.openTab.click()
    }
    init()
})(window,document)