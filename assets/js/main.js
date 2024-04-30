/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tc =>{ /* tc = tabContent*/
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconThme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark*theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconThme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if(selectedTheme){
    // if the validation is fulfilled, we ask what the issue to know if we activated or desactivated the dark mode
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconThme)
}

// activate / desactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconThme)
    //we save theme and the current icon taht the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay:500})
sr.reveal('.profile__profession', {delay:600})
sr.reveal('.profile__social', {delay:700})
sr.reveal('.profile__info-group', {interval:100, delay:700})
sr.reveal('.profile__buttons', {delay:800})
sr.reveal('.profile__content', {delay:900})
sr.reveal('.filters', {delay:1000})
