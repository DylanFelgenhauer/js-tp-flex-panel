(function (){
    const ePan = {
        init(){
            document.documentElement.classList.add('js-enabled');
            this.aPanels = document.querySelectorAll(".panel");
            for (const ePanel of this.aPanels) {
                ePanel.addEventListener('click',(event)=>{
                    event.currentTarget.classList.toggle('open');
                })
                ePanel.addEventListener('transitionend',(event)=>{
                    if (event.propertyName.includes("flex")){
                        event.currentTarget.classList.toggle('open-active');
                    }
                })
            }
        }
    }
    ePan.init();
})();


