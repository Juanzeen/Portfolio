const colormode = document.getElementById('colormode')
const bordercolormode = document.getElementById('colormodediv')
const label = document.getElementById('colormodelabel').value

colormode.addEventListener('change',()=>{
    document.body.classList.toggle('light');
}
)