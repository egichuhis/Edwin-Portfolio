const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuIcon = document.getElementById('close-menu');
const seeProjBtns = document.getElementsByClassName('see-project-btn');
const closeProjDetails = document.getElementById('close-details');
const projDetails = document.getElementById('project-detail');
const cardsContainer = document.getElementById('cards-container');
const card = `
                    <div class="card">
                        <div class="mask-group">
                            <div class="right-block">
                                <div class="title">
                                    Project Art<br>Printing Data
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
                                <button class="see-project-btn">
                                    <h6>See Project</h6>
                                </button>
                            </a>
                        </div>
                    </div>
`;

menuIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeMenuIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i <= 5; i += 1) {
  cardsContainer.innerHTML += card;
}

for (let i = 0; i < seeProjBtns.length; i += 1) {
  seeProjBtns[i].addEventListener('click', () => {
    projDetails.style.display = 'flex';
  });
}

closeProjDetails.addEventListener('click', () => {
  projDetails.style.display = 'none';
});