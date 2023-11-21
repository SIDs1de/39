document.addEventListener('DOMContentLoaded', () => {
  const main = () => {
    const shortTextAreaActivate = () => {
      const textAreas = document.querySelectorAll('._short');
      if (textAreas) {
        textAreas.forEach(textArea => {
          const textAreaText = textArea.value
          const windowWidth = window.innerWidth;
          let shortStr
          if (windowWidth >= 1289) {
            shortStr = textAreaText.substring(0, 440);
          } else if (windowWidth >= 1140) {
            shortStr = textAreaText.substring(0, 300);
          } else if (windowWidth >= 1101) {
            shortStr = textAreaText.substring(0, 155);
          } else if (windowWidth >= 830) {
            shortStr = textAreaText.substring(0, 500);
          } else if (windowWidth >= 450) {
            shortStr = textAreaText.substring(0, 235);
          } else {
            shortStr = textAreaText.substring(0, 120);
          }
          if (shortStr !== textAreaText) {
            textArea.value = shortStr + '...'
          }
        })
      }
    }

    const placeCardsActivate = () => {
      if (window.innerWidth > 1100) {
        const cards = document.querySelectorAll('[data-place-to]');
        if (cards) {
          const mainOffset = document.querySelector('.main').getBoundingClientRect().top + window.pageYOffset;
          cards.forEach(card => {
            const placeTo = card.dataset.placeTo
            const currentElement = document.querySelector(`[data-place-name="${placeTo}"]`);
            if (currentElement) {
              if (card.classList.contains('left__card')) {
                const personHeight = document.querySelector('.left__person').clientHeight;
                card.style.marginTop = `${currentElement.getBoundingClientRect().top + window.pageYOffset - mainOffset - personHeight}px`
                card.style.top = `${100 + 50 + personHeight}px`
                const cardHeight = card.clientHeight;
                document.querySelector('.left__person').style.marginBottom = `${50 + 150 + cardHeight}px`
              } else {
                card.style.top = `${currentElement.getBoundingClientRect().top + window.pageYOffset - mainOffset}px`
              }
            }
          })
        }
      }
    }

    const imgToMobileSwitch = () => {
      const separators = document.querySelectorAll('.separator__img');

      if (separators) {
        separators.forEach(sep => {
          if (window.innerWidth > 1100 && window.innerWidth <= 1180 || window.innerWidth <= 480) {
            sep.src = 'images/separator/main-mobile.svg';
          } else {
            sep.src = 'images/separator/main.svg';
          }
        })
      }
    }

    shortTextAreaActivate();
    placeCardsActivate();
    imgToMobileSwitch();

    window.addEventListener('resize', () => {
      shortTextAreaActivate();
      placeCardsActivate();
      imgToMobileSwitch();
    })
  }

  main();
})
