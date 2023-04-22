const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuIcon = document.getElementById('close-menu');
const seeProjBtns = document.getElementsByClassName('see-project-btn');
const projDetails = document.getElementById('project-detail');
const cardsContainer = document.getElementById('cards-container');
const detailsContainer = document.getElementById('project-detail');

const projects = [
  {
    title: 'Project Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: './imgs/cardHover.png',
    cancelIcon: './imgs/Icon-Cancel.svg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard',
    image: './imgs/Proj2.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: './imgs/Proj3.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',

  },
  {
    title: 'Project Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: './imgs/cardHover.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: './imgs/Proj2.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: './imgs/Proj3.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
];

const detailsPop = document.createElement('div');
detailsPop.innerHTML = `
            <div class="details-title-cont">
                <div class="details-title-span">
                    <h3>${projects[0].title}</h3>
                    <img src=${projects[0].cancelIcon} alt="menu-close icon" id="close-details">
                </div>
                <ul class="details-title-tags">

                    <li class="html">
                        <h6>${projects[0].technologies[0]}</h6>
                    </li>
                    <li class="bootstrap">
                        <h6>${projects[0].technologies[1]}</h6>
                    </li>
                    <li class="ruby">
                        <h6>${projects[0].technologies[2]}</h6>
                    </li>

                </ul>
            </div>
            <div class="left-right-cont">
                <div class="left-side">
                    <div class="details-snapshoot" style="background-image: url(${projects[2].image});">
                    </div>
                </div>

                <div class="right-side">
                    <div class="details-left-block">
                        <p>${projects[0].detailsDescription}</p>

                        <div class="action">
                            <a href=${projects[0].linkLive} target="_blank" rel="noopener">
                                <button class="live">
                                    <h3>See Live</h3>
                                    <i class="fa fa-external-link"></i>
                                </button>
                            </a>
                            <a href=${projects[0].linkSource} target="_blank" rel="noopener">
                                <button class="source">
                                    <h3>See Source</h3>
                                    <i class="fa fa-github"></i>
                                </button></a>
                        </div>
                    </div>
                </div>
            </div>
  `;

projects.forEach((project) => {
  const card = document.createElement('div');

  card.innerHTML = `
                    <div class="card">
                        <div class="mask-group" style="background-image: url(${project.image});">
                            <div class="right-block">
                                <div class="title">
                                    ${project.title}
                                </div>
                                <div class="description">
                                   ${project.description}
                                </div>
                                <ul class="tags">
                                    <li class="html">
                                        <span>${project.technologies[0]}</span>
                                    </li>
                                    <li class="bootstrap">
                                        <span>${project.technologies[1]}</span>
                                    </li>
                                    <li class="ruby">
                                        <span>${project.technologies[2]}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="action">
                            <a href="#">
                                <button class="see-project-btn">
                                    <h6>See Project</h6>
                                </button>
                            </a>
                        </div>
                    </div>
`;

  cardsContainer.appendChild(card);

  detailsContainer.appendChild(detailsPop);
});

menuIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeMenuIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < seeProjBtns.length; i += 1) {
  seeProjBtns[i].addEventListener('click', () => {
    projDetails.style.display = 'flex';
  });
}

const closeProjDetails = document.getElementById('close-details');

closeProjDetails.addEventListener('click', () => {
  projDetails.style.display = 'none';
});