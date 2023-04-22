const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuIcon = document.getElementById('close-menu');
const seeProjBtns = document.getElementsByClassName('see-project-btn');
const closeProjDetails = document.getElementById('close-details');
const projDetails = document.getElementById('project-detail');
const cardsContainer = document.getElementById('cards-container');

const projects = [
  {
    title: 'Project Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: 'link_to_poject1_image.jpg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard',
    image: 'link_to_poject1_image.jpg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: 'link_to_poject1_image.jpg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',

  },
  {
    title: 'Project Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: 'link_to_poject1_image.jpg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: 'link_to_poject1_image.jpg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    image: 'link_to_poject1_image.jpg',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkLive: 'https://egichuhis.github.io/',
    linkSource: 'https://github.com/egichuhis/Edwin-Portfolio',
    detailsDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  },
];

projects.forEach((project) => {
  const card = document.createElement('div');
  card.innerHTML = `
                    <div class="card">
                        <div class="mask-group">
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

closeProjDetails.addEventListener('click', () => {
  projDetails.style.display = 'none';
});