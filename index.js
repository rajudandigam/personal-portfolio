async function onReady() {
  const portfolioElement = document.querySelector('#portfolio');
  const loadingElem = portfolioElement.querySelector('#loading');
  const mainElem = portfolioElement.querySelector('main');
  const aboutElem = mainElem.querySelector('#about');

  const getTextNode = (text) => document.createTextNode(text);

  try {
    const response = await fetch('./data/profile.json');
    const profileData = await response.json();

    aboutElem.querySelector('#profileName').appendChild(getTextNode(profileData.fullName));
    aboutElem.querySelector('#title').appendChild(getTextNode(profileData.title));
    aboutElem.querySelector('#subTitle').appendChild(getTextNode(profileData.subTitle));
  }
  finally {
    mainElem.classList.remove('hide');
    loadingElem.classList.add('hide');
  }

};

document.addEventListener('DOMContentLoaded', onReady);