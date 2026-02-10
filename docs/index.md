---
title: Home
hide:
  - navigation
  - footer
---
# Welkom bij de parochie van de Heilige Martelaren van Gorcum

## Laatste berichten
<div id="latest-posts">Loading...</div>

<script>
fetch('berichten/index.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Get all posts
    const posts = Array.from(doc.querySelectorAll('.md-post')).slice(0, 3); // first 3 posts
    
    if (posts.length > 0) {
      const container = document.getElementById('latest-posts');
      container.innerHTML = ''; // clear loading
      
      posts.forEach(post => {
        const titleLink = post.querySelector('h2 a') || post.querySelector('.md-post__title a');
        const excerpt = post.querySelector('.md-post__excerpt') || post.querySelector('p');
        const excerptText = excerpt ? excerpt.textContent.substring(0, 150) + '...' : '';
        
        if (titleLink) {
          container.innerHTML += `
            <a href="/berichten/${titleLink.getAttribute('href')}" class="latest-post-link" style="display: block; text-decoration: none; color: inherit; margin-bottom: 1.5rem;">
              <h3>${titleLink.textContent}</h3>
              <p>${excerptText}</p>
              <p class="button"><strong>Lees verder →</strong></p>
            </a>
          `;
        }
      });
    } else {
      document.getElementById('latest-posts').innerHTML = '<p>Geen berichten gevonden</p>';
    }
  })
  .catch(err => {
    document.getElementById('latest-posts').innerHTML = '<p>Fout bij laden berichten</p>';
    console.error(err);
  });
</script>


[Alle berichten](berichten/index.md)

---

## Over ons
<div class="homepage-intro">
<p style="text-align: justify;">De parochie van Gorinchem heeft de <a href="/artikelen/de-martelaren-van-gorcum.html">Heilige Martelaren van Gorcum</a> als patronen. Zij vormt met de parochie de <a href="http://heiligedrieeenheid.eu" target="_blank" rel="noopener">Heilige Drie-eenheid</a> de federatie het <a href="/overons.html#het-driestromenland">Driestromenland</a>. Beide parochies behoren tot het <a href="https://www.bisdomrotterdam.nl/">bisdom Rotterdam</a>.</p>
<span class="divider"></span>
<p>De parochie wil de missie tot uitvoer brengen. In woord en daad wil zij Christus verkondigen in deze maatschappij. Het is en blijft de droom van de Kerk dat steeds meer mensen Christus leren kennen als fundament in hun leven. Het ideaal van het pastoraal team is dat parochies gelovige, liefdevolle en geëngageerde gemeenschappen zijn.</p>
    <p><a href="overons.html" class="button">Lees verder →</a></p>

</div>

---

## In Memoriam
<div class="in-memoriam">
  <img src="assets/inmemoriam/pastoordejong.png" alt="Pastoor De Jong" class="round-image">
  <div class="in-memoriam-text">
    <p>Op zondag 16 november is pastoor De Jong van Gorinchem onverwacht overleden. Hij werd thuis aangetroffen en is gestorven aan een acute hartstilstand. Pastoor De Jong mocht 62 jaar oud worden.</p>
    <p><a href="inmemoriam.html" class="button">Lees verder →</a></p>
  </div>
</div>

---

## Onze parochie
<div class="grid-sections">
  <a href="parochie/vieren/" class="grid-item">
    <h3>Samen vieren</h3>
    <p>De Eucharistie en sacramenten vieren als hart van ons geloof.</p>
  </a>
  <a href="parochie/leren/" class="grid-item">
    <h3>Samen leren</h3>
    <p>Groeien in geloof door catechese en verdieping.</p>
  </a>
  <a href="parochie/dienen/" class="grid-item">
    <h3>Samen dienen</h3>
    <p>Omzien naar elkaar, in navolging van Christus.</p>
  </a>
  <a href="parochie/bidden/" class="grid-item">
    <h3>Samen bidden</h3>
    <p>Persoonlijk en gezamenlijk gebed als hart van ons leven.</p>
  </a>
  <a href="parochie/gemeenschap/" class="grid-item">
    <h3>Onze gemeenschap</h3>
    <p>Verbondenheid binnen de parochie en daarbuiten.</p>
  </a>
  <a href="parochie/roosters/" class="grid-item">
    <h3>Roosters</h3>
    <p>Overzicht van vieringen en pastorale activiteiten.</p>
  </a>
</div>
