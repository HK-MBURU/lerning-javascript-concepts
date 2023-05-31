const headerTag=document.getElementById('number')

headerTag.addEventListener('numberChanged', function(e){
    headerTag.textContent=e.detail.number;
    headerTag.style.color=e.detail.textColor
});

function changeNumber(n,c){
    const event=new CustomEvent('numberChanged',{
        detail: {
            number: n,
            textColor: c
        }
    });
    headerTag.dispatchEvent(event);
}
changeNumber(52,'red')