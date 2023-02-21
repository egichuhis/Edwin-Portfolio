const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuIcon = document.getElementById('close-menu');

menuIcon.addEventListener('click', () => {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
});

closeMenuIcon.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  }
});

mobileMenu.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  }
});

// const cards = {
//   card_1: {
//     title: 'First Project',
//     description: 'First project description',
//     image: '/imgs/MaskGroup.png',
//   },
// };

const card = `
                    <div class="card">
                        <div class="mask-group">
                            <div class="right-block">
                                <div class="title">
                                    Project Title
                                </div>
                                <div class="description">
                                    A daily selection of privately personalized reads; no accounts or sign-ups required.
                                    has
                                    been the industry's standard
                                </div>
                                <ul class="tags">
                                    <li class="html">
                                        <span>html</span>
                                    </li>
                                    <li class="bootstrap">
                                        <span>bootstrap</span>
                                    </li>
                                    <li class="ruby">
                                        <span>Ruby</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="action">
                            <a href="#">
                                <button>
                                    <h6>See Project</h6>
                                </button>
                            </a>
                        </div>
                    </div>
`;

const cardsContainer = document.getElementById('cards-container');
cardsContainer.innerHTML = card;