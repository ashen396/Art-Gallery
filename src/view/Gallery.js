import './styles/GalleryStyles.css'

const infoHeading = ["The Starry Night", "The Mona Lisa", "The Great Wave off Kanagawa"];
const infoDescription = ["The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.\n\nIt has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus,[4][5] The Starry Night is one of the most recognizable paintings in Western art.",
  "The Mona Lisa considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world. \n\nThe painting's novel qualities include the subject's enigmatic expression, monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.\n\n The painting has been definitively identified to depict Italian noblewoman Lisa del Giocondo.[9] It is painted in oil on a white Lombardy poplar panel. Leonardo never gave the painting to the Giocondo family, and it is believed he later left it in his will to his favored apprentice Salaì." +
  "It was believed to have been painted between 1503 and 1506; however, Leonardo may have continued working on it as late as 1517. It was acquired by King Francis I of France and is now the property of the French Republic. It has been on permanent display at the Louvre in Paris since 1797. The painting's global fame and popularity stem from its 1911 theft by Vincenzo Peruggia, who attributed his actions to Italian patriotism—a belief it should belong to Italy. The theft and subsequent recovery in 1914 generated unprecedented publicity for an art theft, and led to the publication of many cultural depictions such as the 1915 opera Mona Lisa, two early 1930s films (The Theft of the Mona Lisa and Arsène Lupin) and the song Mona Lisa recorded by Nat King Cole—one of the most successful songs of the 1950s." +
  "\n\nThe Mona Lisa is one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known painting insurance valuation in history at US$100 million in 1962,[13] equivalent to $1 billion as of 2023. The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood.[38] The woman sits markedly upright in a pozzetto armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood mainly in two features: the corners of the mouth, and the corners of the eyes",
  "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. 'Under the Wave off Kanagawa')[a] is a woodblock print by Japanese ukiyo-e artist Hokusai, created in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea, with a large, cresting wave forming a spiral in the centre and Mount Fuji visible in the background.\n\nThe print is Hokusai's best-known work and the first in his series Thirty-six Views of Mount Fuji, in which the use of Prussian blue revolutionized Japanese prints. The composition of The Great Wave is a synthesis of traditional Japanese prints and use of graphical perspective developed in Europe, and earned him immediate success in Japan and later in Europe, where Hokusai's art inspired works by the Impressionists." +
  "Several museums throughout the world hold copies of The Great Wave, many of which came from 19th-century private collections of Japanese prints.\n\nThe Great Wave off Kanagawa has been described as possibly the most reproduced image in the history of all art as well as being a contender for the most famous artwork in Japanese history. This woodblock print has influenced several notable artists and musicians, including Vincent van Gogh, Claude Debussy, Claude Monet and Utagawa Hiroshige."];

function showInfo(props) {
  document.getElementById("infoOverlay").style.visibility = "visible";

  switch (props) {
    case "imageFirstOverlay":
      document.getElementById("infoHeading").innerText = infoHeading[0];
      document.getElementById("infoDescription").innerText = infoDescription[0];
      break;

    case "imageSecondOverlay":
      document.getElementById("infoHeading").innerText = infoHeading[1];
      document.getElementById("infoDescription").innerText = infoDescription[1];
      break;

    case "imageThirdOverlay":
      document.getElementById("infoHeading").innerText = infoHeading[2];
      document.getElementById("infoDescription").innerText = infoDescription[2];
      break;

    default:
      document.getElementById("infoHeading").innerText = infoHeading[0];
      document.getElementById("infoDescription").innerText = infoDescription[0];
      break;
  }
}

function hideInfo() {
  document.getElementById("infoOverlay").style.visibility = "hidden";
}


export function Gallery() {
  // return <div id='gallery'>
  return <div id='gallery'>
    <div id='infoOverlay'>
      <div id='infoCloseButton' onClick={() => { hideInfo() }}><text>&#10006;</text></div>
      <h1 id='infoHeading' />
      <div id='infoDescriptionContainer'>
        <text id='infoDescription' />
      </div>
    </div>
    <div id='imageFirstOverlay' onClick={(ev) => { showInfo(ev.currentTarget.id) }} />
    <div id='imageSecondOverlay' onClick={(ev) => { showInfo(ev.currentTarget.id) }} />
    <div id='imageThirdOverlay' onClick={(ev) => { showInfo(ev.currentTarget.id) }} />
    <div id='imageFourthOverlay' onClick={(ev) => { showInfo(ev.currentTarget.id) }} />
    <div id='imageFifthOverlay' onClick={(ev) => { showInfo(ev.currentTarget.id) }} />
  </div>;
}

