---
title: Home
---
# Welkom bij de parochie van de Heilige Martelaren van Gorcum

## Laatste bericht
<div id="latest-post">Loading...</div>

<script>
fetch('berichten/index.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Material blog lists posts with .md-post class
    const firstPost = doc.querySelector('.md-post');
    
    if (firstPost) {
      const titleLink = firstPost.querySelector('h2 a') || firstPost.querySelector('.md-post__title a');
      const excerpt = firstPost.querySelector('.md-post__excerpt') || firstPost.querySelector('p');
      
      if (titleLink) {
        const excerptText = excerpt ? excerpt.textContent.substring(0, 150) + '...' : '';
        
        document.getElementById('latest-post').innerHTML = `
          <h3><a href="${titleLink.href}">${titleLink.textContent}</a></h3>
          <p>${excerptText}</p>
          <p><a href="${titleLink.href}">Lees verder →</a></p>
        `;
      }
    } else {
      document.getElementById('latest-post').innerHTML = '<p>Geen berichten gevonden</p>';
    }
  })
  .catch(err => {
    document.getElementById('latest-post').innerHTML = '<p>Fout bij laden bericht</p>';
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
