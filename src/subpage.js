import './style.css'

const page = document.body.dataset.page
const pages = {
  housing: {
    eyebrow: 'Oluwa Housing', title: 'Homes with room\nfor real life.', intro: 'We create welcoming places to live, work, and grow. From thoughtful planning to lasting materials, every Oluwa home is made around the people who call it home.', color: 'housing', stat: '18', statLabel: 'communities shaped', detailTitle: 'A better foundation.', detail: 'Housing is more than construction. It is the light in a kitchen, the safety of a doorstep, and the feeling that there is room for what comes next.'
  },
  textiles: {
    eyebrow: 'Oluwa Textiles', title: 'Made to move\nwith you.', intro: 'We make considered fabrics and everyday pieces with a respect for craft, comfort, and the lives they become part of.', color: 'textiles', stat: '42k', statLabel: 'metres woven yearly', detailTitle: 'Cloth with a point of view.', detail: 'Our textile work connects local making with modern design, creating pieces that feel good in the hand and hold up to real days.'
  },
  foods: {
    eyebrow: 'Oluwa Foods', title: 'Good food is\na shared language.', intro: 'We source, make, and serve food that brings people closer. Honest ingredients, generous flavor, and a place at the table for everyone.', color: 'foods', stat: '27', statLabel: 'local partners', detailTitle: 'From source to table.', detail: 'We believe food should tell you where it came from and make you want to stay a little longer. That is why we keep our partners and processes close.'
  },
  about: {
    eyebrow: 'Our vision', title: 'Affordable essentials.\nHigh standards.', intro: 'Our vision is to provide food, clothing, and shelter at affordable prices for the populace while keeping a high standard.', color: 'about', stat: '25+', statLabel: 'years of building', detailTitle: 'Our story.', detail: 'Food, clothing, and shelter are the things that humans cannot do without. Therefore, we want to make a platform for high-quality goods, merchandise, and services, while also creating job opportunities for as many people as possible.'
  },
  journal: {
    eyebrow: 'The journal', title: 'Notes from\nthe everyday.', intro: 'A collection of field notes, conversations, and observations from the people and places that shape Oluwa.', color: 'journal-page', stat: '06', statLabel: 'stories to explore', detailTitle: 'Small details. Big picture.', detail: 'We pay attention to the everyday because that is where meaningful change begins. Read what our teams are learning along the way.'
  },
  contact: {
    eyebrow: 'Get in touch', title: 'Let’s build\nwhat’s next.', intro: 'Have a question, a project, or an idea worth exploring? Tell us a little about it and our team will be in touch.', color: 'contact-page', stat: '01', statLabel: 'good conversation away', detailTitle: 'Our door is open.', detail: 'For partnerships, press, careers, or general enquiries, send a note to hello@oluwaconglomerate.com or use the form below.'
  }
}
const current = pages[page] || pages.housing

document.querySelector('#app').innerHTML = `
  <header class="site-header"><a class="brand" href="index.html" aria-label="Oluwa Conglomerate home"><img class="brand-logo" src="/oc-logo.png" alt=""><span>OLUWA <b>CONGLOMERATE</b></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu <span>+</span></button><nav id="site-nav" class="site-nav" aria-label="Main navigation"><a href="index.html#divisions">Our divisions</a><a href="about.html">Our approach</a><a href="journal.html">Journal</a><a class="nav-cta" href="contact.html">Work with us <span>↗</span></a></nav></header>
  <main class="subpage ${current.color}">
    <section class="sub-hero section-shell"><div><p class="eyebrow"><span></span> ${current.eyebrow}</p><h1>${current.title.replace('\n', '<br>')}</h1><p class="hero-intro">${current.intro}</p><a class="text-link" href="contact.html">Start a conversation <span>↗</span></a></div><div class="sub-art"><div class="sub-art-shape"><span>${page === 'about' ? '∞' : page.slice(0, 2).toUpperCase()}</span></div><span class="sub-art-label">${current.eyebrow}<br><strong>EST. 1998</strong></span></div></section>
    <section class="sub-detail section-shell"><div class="sub-stat"><strong>${current.stat}</strong><span>${current.statLabel}</span></div><div><p class="eyebrow"><span></span> What guides us</p><h2>${current.detailTitle}</h2><p class="detail-copy">${current.detail}</p><a class="text-link" href="contact.html">Talk to our team <span>↗</span></a></div></section>
    ${page === 'journal' ? '<section class="sub-stories section-shell"><article><div class="story-image story-one"><span>FIELD NOTES / 01</span></div><p class="story-meta">Oluwa Foods · 06.12.24</p><h3>Why the best meals begin long before the kitchen.</h3></article><article><div class="story-image story-two"><span>FIELD NOTES / 02</span></div><p class="story-meta">Oluwa Housing · 18.10.24</p><h3>A home is more than four walls. We know.</h3></article><article><div class="story-image story-three"><span>FIELD NOTES / 03</span></div><p class="story-meta">Oluwa Textiles · 02.09.24</p><h3>What makes a fabric feel like it belongs.</h3></article></section>' : ''}
    ${page === 'contact' ? '<section class="sub-contact section-shell"><form id="contact-form"><label for="name">Your name</label><input id="name" required placeholder="How should we call you?"><label for="contact-email">Email address</label><input id="contact-email" type="email" required placeholder="you@example.com"><label for="message">What can we make together?</label><textarea id="message" rows="4" required placeholder="Tell us a little about your idea..."></textarea><button class="form-button" type="submit">Send your note <span>↗</span></button><p class="form-status" aria-live="polite"></p></form><div class="contact-details"><p class="eyebrow"><span></span> Find us</p><h2>Come say<br><em>hello.</em></h2><p>hello@oluwaconglomerate.com<br>+234 800 000 0000<br><br>Lagos · Nigeria</p></div></section>' : ''}
    ${page !== 'journal' && page !== 'contact' ? '<section class="sub-band"><div class="section-shell"><p class="eyebrow"><span></span> More from Oluwa</p><h2>There is more<br><em>to explore.</em></h2><div class="sub-links"><a href="housing.html">Oluwa Housing <span>↗</span></a><a href="textiles.html">Oluwa Textiles <span>↗</span></a><a href="foods.html">Oluwa Foods <span>↗</span></a></div></div></section>' : ''}
  </main>
  <footer class="site-footer"><div class="section-shell footer-inner"><a class="brand" href="index.html"><img class="brand-logo" src="/oc-logo.png" alt=""><span class="brand-name">OLUWA <b>CONGLOMERATE</b></span></a><div class="footer-links"><a href="about.html">About us</a><a href="journal.html">Journal</a><a href="contact.html">Contact</a></div><p>© 2025 Oluwa Conglomerate</p></div></footer>
`

const toggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('#site-nav')
toggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', open) })

const contactForm = document.querySelector('#contact-form')
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  contactForm.querySelector('.form-status').textContent = 'Thank you. We will be in touch shortly.'
  contactForm.reset()
})
