const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');

const setColorMode = () => {
    console.log('setColorMode');
    console.log(localStorage.getItem('colorMode'));

    if (localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        darkBtn.click();
    } else if (localStorage.getItem('colorMode') == 'light'){
        setLightMode();
        lightBtn.click();
    }
}

const checkMode = () => {
    if (localStorage.getItem('colorMode') == null) {
        if (window.matchMedia("(prefers-color-scheme : light)").matches) {
                lightBtn.click();
            } else if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
                darkBtn.click();
    }
    }
    
}

const checkModeChange = () => {
    window
        .matchMedia("(prefers-color-scheme : dark)")
        .addEventListener('change', event => {
            checkMode();
        })
}

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
}

setColorMode();
checkMode();
checkModeChange();



const radioBtn = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', (event) => {
        if (darkBtn.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }
    })
}


