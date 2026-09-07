import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Oluwa Conglomerate home">
      <span class="brand-mark">O</span>
      <span>OLUWA <b>CONGLOMERATE</b></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu <span>+</span></button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
      <a href="#divisions">Our divisions</a>
      <a href="#approach">Our approach</a>
      <a href="#journal">Journal</a>
      <a class="nav-cta" href="#contact">Work with us <span>↗</span></a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span> Built for everyday living</p>
        <h1>We make room<br>for <em>better</em> living.</h1>
        <p class="hero-intro">Oluwa Conglomerate brings together the essentials of a thriving life: considered spaces, quality clothing, and food that brings people home.</p>
        <a class="text-link" href="#divisions">Explore what we do <span>↓</span></a>
      </div>
      <div class="hero-art reveal">
        <div class="sun"></div>
        <div class="hero-circle"><span>OC</span></div>
        <div class="art-label label-one">Since<br><strong>1998</strong></div>
        <div class="art-label label-two">People<br>first</div>
        <div class="hero-line"></div>
      </div>
      <div class="hero-note">From the ground up.<br><strong>For the long run.</strong></div>
    </section>

    <section id="divisions" class="divisions section-shell">
      <div class="section-heading"><p class="eyebrow"><span></span> Three ways we serve</p><h2>One shared belief:<br><em>every detail matters.</em></h2></div>
      <div class="division-grid">
        <a class="division-card housing" href="#contact"><span class="card-number">01</span><div class="card-icon">⌂</div><div><p class="card-kicker">Oluwa Housing</p><h3>Spaces that<br>hold your life.</h3><span class="card-link">Discover housing ↗</span></div></a>
        <a class="division-card textiles" href="#contact"><span class="card-number">02</span><div class="card-icon">✳</div><div><p class="card-kicker">Oluwa Textiles</p><h3>What you wear<br>should feel like you.</h3><span class="card-link">Explore textiles ↗</span></div></a>
        <a class="division-card foods" href="#contact"><span class="card-number">03</span><div class="card-icon">✦</div><div><p class="card-kicker">Oluwa Foods</p><h3>Good food.<br>Good company.</h3><span class="card-link">Taste the difference ↗</span></div></a>
      </div>
    </section>

    <section id="approach" class="approach section-shell">
      <div class="approach-visual"><div class="visual-grid"></div><div class="visual-stamp">OLUWA<br><span>∞</span><br>TOGETHER</div></div>
      <div class="approach-copy"><p class="eyebrow"><span></span> The Oluwa way</p><h2>Progress is a<br><em>collective act.</em></h2><p>We build businesses that stay close to real life. That means listening deeply, making thoughtfully, and investing in the communities that make everything possible.</p><a class="text-link" href="#contact">Meet the people behind Oluwa <span>↗</span></a></div>
    </section>

    <section id="journal" class="journal section-shell"><div class="journal-top"><div><p class="eyebrow"><span></span> From the journal</p><h2>Notes from<br><em>the everyday.</em></h2></div><a class="text-link" href="#contact">View all stories <span>↗</span></a></div><div class="story-grid"><article><div class="story-image story-one"><span>FIELD<br>NOTES / 01</span></div><p class="story-meta">Oluwa Foods · 06.12.24</p><h3>Why the best meals begin long before the kitchen.</h3></article><article><div class="story-image story-two"><span>FIELD<br>NOTES / 02</span></div><p class="story-meta">Oluwa Housing · 18.10.24</p><h3>A home is more than four walls. We know.</h3></article></div></section>

    <section id="contact" class="contact"><div class="section-shell contact-inner"><div><p class="eyebrow"><span></span> Stay close</p><h2>Let’s build<br><em>what’s next.</em></h2></div><div class="contact-side"><p>Whether you have a question, a big idea, or just want to say hello, our door is open.</p><a class="contact-email" href="mailto:hello@oluwaconglomerate.com">hello@oluwaconglomerate.com <span>↗</span></a><form id="newsletter"><label for="email">Get the occasional good news</label><div class="input-row"><input id="email" type="email" placeholder="Your email address" required><button type="submit" aria-label="Subscribe">↗</button></div><p class="form-status" aria-live="polite"></p></form></div></div></section>
  </main>

  <footer class="site-footer"><div class="section-shell footer-inner"><a class="brand" href="#top"><span class="brand-mark">O</span><span>OLUWA <b>CONGLOMERATE</b></span></a><div class="footer-links"><a href="#divisions">Divisions</a><a href="#approach">About us</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div><p>© 2025 Oluwa Conglomerate</p></div></footer>
`

const toggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('#site-nav')
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open')
  toggle.setAttribute('aria-expanded', isOpen)
})

document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')))

document.querySelector('#newsletter').addEventListener('submit', (event) => {
  event.preventDefault()
  event.currentTarget.querySelector('.form-status').textContent = 'You are on the list. Thank you.'
  event.currentTarget.querySelector('input').value = ''
})
