function main() {
    const nav = document.querySelector(`nav`);
    const menuBox = document.createElement(`p`);
    const dropDownContainer = document.querySelector(`#dropDownContainer`);
    let open = 0;
    let times = 0;
    nav.appendChild(menuBox);
    menuBox.style.display = `none`;
    window.addEventListener(`resize`, function(){
        const x = window.innerWidth;
        const y = window.innerHeight;
        if (x <= 1250) {
            menuBox.innerText = `Menu`;
            menuBox.id = `menuBox`;
            menuBox.style.display = `block`;
            if (times === 0) {
                ++times;
                menuBox.addEventListener(`click`, function(){
                    if (open === 0) {
                        open++;
                        dropDownContainer.style.display = `flex`;
                        dropDownContainer.style.top = `${menuBox.offsetTop + 45}px`;
                        return;
                    }
                    if (open >= 1) {
                        open = 0;
                        dropDownContainer.style.display = `none`;
                    }
                });
            }
        } else if (x > 1250) {
            menuBox.style.display = `none`;
            dropDownContainer.style.display = `none`;
        }
    });
    window.addEventListener(`load`, function(){
        const x = window.innerWidth;
        const y = window.innerHeight;
        if (x <= 1250) {
            menuBox.innerText = `Menu`;
            menuBox.id = `menuBox`;
            menuBox.style.display = `block`;
            if (times === 0) {
                ++times;
                menuBox.addEventListener(`click`, function(){
                    if (open === 0) {
                        open++;
                        dropDownContainer.style.display = `flex`;
                        dropDownContainer.style.top = `${menuBox.offsetTop + 45}px`;
                        return;
                    }
                    if (open >= 1) {
                        open = 0;
                        dropDownContainer.style.display = `none`;
                    }
                });
            }
        } else if (x > 1250) {
            menuBox.style.display = `none`;
            dropDownContainer.style.display = `none`;
        }
    });
}
main();