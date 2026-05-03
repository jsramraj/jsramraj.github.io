const projects = {
  "project-1": {
    title: "eFleetSuite",
    description:
      "eFleetSuite is a complete ELD solution offered by Trimble. In the US and Canada, regulations limit driver hours and this solution tracks/report violations. This app was developed in Xamarin-Android and communicates with partner apps via intents.",
    tags: "Android · Xamarin Native · Xamarin Android · Xamarin · SQLite · C#",
    images: [
      "img/carousel/efleetsuite-1.png",
      "img/carousel/efleetsuite-2.png",
      "img/carousel/efleetsuite-3.jpeg"
    ]
  },
  "project-2": {
    title: "Trimble Ag Mobile",
    description:
      "Trimble Ag Mobile is used for precision farming. Farmers can manage field operations, overlays, weather, and fleet workflows.",
    tags: "iOS · Xamarin Native · Xamarin iOS · Xamarin · SQLite · C# · Agile",
    images: [
      "img/carousel/tam-1.jpeg",
      "img/carousel/tam-2.png",
      "img/carousel/tam-3.webp"
    ]
  },
  "project-3": {
    title: "IPA Keyboard",
    description:
      "Phonetic Keyboard is a custom keyboard extension for iOS with multiple keyboard layouts for language phonetics.",
    tags: "iOS · Objective-C · Extension · iPhone · iPad",
    images: ["img/carousel/ipa-keyboard-1.png"]
  },
  "project-4": {
    title: "AlcoChange",
    description:
      "AlcoChange helps users track alcohol consumption and connect with a breathalyser accessory. Built in Objective-C using audio framework communication.",
    tags: "iOS · Objective-C · iPhone · Healthcare · Agile",
    images: [
      "img/carousel/alcochange-1.png",
      "img/carousel/alcochange-2.png",
      "img/carousel/alcochange-3.png"
    ]
  },
  "project-5": {
    title: "Blue Dot Parking",
    description:
      "Blue Dot Parking helps users discover and reserve nearby parking. BLE and activity detection support entry/exit and parking duration workflows.",
    tags: "iOS · Objective-C · iPhone · iPad",
    images: [
      "img/carousel/bdp-1.webp",
      "img/carousel/bdp-2.webp",
      "img/carousel/bdp-3.webp",
      "img/carousel/bdp-4.webp"
    ]
  },
  "project-6": {
    title: "PalmAgent Softwares",
    description:
      "PalmAgent provides real-estate estimation and field tools. I worked on iOS and Mac implementations.",
    tags: "iOS · iPhone · Mac · iPad · Objective-C",
    images: [
      "img/carousel/palmagent-1.jpeg",
      "img/carousel/palmagent-2.jpeg",
      "img/carousel/palmagent-3.jpg"
    ]
  }
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const modalImage = document.getElementById("modal-image");
const closeModalButton = document.getElementById("close-modal");
const prevButton = document.getElementById("prev-shot");
const nextButton = document.getElementById("next-shot");

let currentProject = null;
let imageIndex = 0;

function showImage() {
  if (!currentProject) {
    return;
  }

  const images = projects[currentProject].images;
  modalImage.src = images[imageIndex];
  modalImage.alt = `${projects[currentProject].title} screenshot ${imageIndex + 1}`;
}

function openProject(projectKey) {
  const project = projects[projectKey];
  if (!project) {
    return;
  }

  currentProject = projectKey;
  imageIndex = 0;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.textContent = project.tags;
  showImage();
  modal.showModal();
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    openProject(card.dataset.project);
  });
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});

prevButton.addEventListener("click", () => {
  if (!currentProject) {
    return;
  }

  const images = projects[currentProject].images;
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  showImage();
});

nextButton.addEventListener("click", () => {
  if (!currentProject) {
    return;
  }

  const images = projects[currentProject].images;
  imageIndex = (imageIndex + 1) % images.length;
  showImage();
});

modal.addEventListener("click", (event) => {
  const modalDimensions = modal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < modalDimensions.left ||
    event.clientX > modalDimensions.right ||
    event.clientY < modalDimensions.top ||
    event.clientY > modalDimensions.bottom;

  if (clickedOutside) {
    modal.close();
  }
});

