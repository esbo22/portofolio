import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Je m'appelle Johnny Girault et j'ai 39 ans. <br /> ^1000" +
      "Je sors de la formation du WAGON à Rennes, <br /> ^500" +
      "avant cela j’étais technicien n2. <br /> ^500" +
      "Mon parcours m'a permis d'avoir, <br /> ^100" +
      "une bonne connaissance des métiers <br /> ^100" +
      "du digital. <br /> ^1000" +
      "(plus de détails dans la section Parcours). <br /> ^1000"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
