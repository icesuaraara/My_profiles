(() => {

  'use-strict'

  const themeSwiter = {

    init: function() {
      this.wrapper = document.getElementById('theme-switcher-wrapper')
      this.button = document.getElementById('theme-switcher-button')
      this.theme = this.wrapper.querySelectorAll('[data-theme]')
      this.themes = ['theme-orange', 'theme-purple', 'theme-green', 'theme-blue']
      this.events()
      this.start()
    },
    
    events: function() {
      this.button.addEventListener('click', this.displayed.bind(this), false)
      this.theme.forEach(theme => theme.addEventListener('click', this.themed.bind(this), false))
    },

    start: function() {
      document.body.classList.add('theme-blue')
    },

    displayed: function() {
      (this.wrapper.classList.contains('is-open'))
        ? this.wrapper.classList.remove('is-open')
        : this.wrapper.classList.add('is-open')
    },

    themed: function(e) {
      this.themes.forEach(theme => {
        if(document.body.classList.contains(theme))
          document.body.classList.remove(theme)
      })
      return document.body.classList.add(`theme-${e.currentTarget.dataset.theme}`)
    }

  }

  themeSwiter.init()

})()

document.getElementById("showMoreBtn").addEventListener("click", function() {
  var extraText = document.getElementById("extraText");
  var showMoreBtn = document.getElementById("showMoreBtn");
  var githubLink = document.querySelector(".content__list");

  if (extraText.style.display === "none" || extraText.style.display === "") {
    extraText.style.display = "block"; 
    showMoreBtn.innerHTML = "Show less"; 
    githubLink.insertAdjacentElement('afterend', extraText); 

    // Scroll smoothly to the extraText section
    extraText.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    extraText.style.display = "none"; 
    showMoreBtn.innerHTML = "Show more"; 
  }
});


