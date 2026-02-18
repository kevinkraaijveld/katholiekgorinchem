---
title: Home
hide:
  - navigation
  - footer
  - toc
---
<div class="hero-banner">
  <h1 class="hero-title">Welkom bij de parochie van de Heilige Martelaren van Gorcum</h1>
  
  <div class="hero-badge">
    <span id="next-mass-display">...laden...</span>
  </div>
</div>

## Laatste berichten
<div id="latest-posts">Loading...</div>

<script>
(async function() {
  try {
    const resp = await fetch('berichten/index.html');
    const html = await resp.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Pak de eerste 3 artikelen in de volgorde zoals op berichten/index.html
    const posts = Array.from(doc.querySelectorAll('article.md-post')).slice(0, 3);
    const container = document.getElementById('latest-posts');
    if (!container) return;
    container.innerHTML = '';

    if (posts.length === 0) {
      container.textContent = 'Geen berichten gevonden';
      return;
    }

    posts.forEach(post => {
      // Clone de volledige article node zodat titel, image en meta behouden blijven
      const cloned = post.cloneNode(true);

      // Pas relatieve links aan zodat ze naar /berichten/<slug>.html wijzen
      cloned.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href') || '';
        // Laat absolute links, anchor-links en mailto/ tel door
        if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;
        // Als het al begint met /berichten laat het zoals het is
        if (href.startsWith('/berichten')) return;
        // Normaliseer en prefix naar /berichten/
        const clean = href.replace(/^\.?\/+/, '');
        a.setAttribute('href', '/berichten/' + clean);
      });

      // Verwijder eventuele scripts uit de gekloonde inhoud, voor de veiligheid
      cloned.querySelectorAll('script').forEach(s => s.remove());

      // Voeg de gekloonde article toe aan de container
      container.appendChild(cloned);
    });
  } catch (err) {
    console.error(err);
    const container = document.getElementById('latest-posts');
    if (container) container.textContent = 'Fout bij laden berichten';
  }
})();
</script>

<a href="/berichten/index.html" class="button" >Alle berichten</a>
---

## Vaste quote

<div class="parochian-quote">
  <img src="assets/parochianen/pastoormeijer.jpg" alt="Pastoor Meijer" class="round-image">

  <div class="quote-content">
    <p class="quote-text">
      “Sinds het overlijden van Pastoor De Jong vier ik de Mis in deze parochie, en wat mij telkens opnieuw treft is de warmte en oprechte betrokkenheid van de gemeenschap. Het is een vreugde om hier te mogen dienen.”
    </p>

    <div class="quote-author">
      <span class="name">Pastoor Meijer</span>
      <span class="meta">Sinds het overlijden van Pastoor de Jong viert Pastoor Meijer de Mis in onze parochie.</span>
    </div>
  </div>
</div>

## Random quote

<div id="quotes-container">

  <div class="parochian-quote">
    <img src="assets/parochianen/olivier.jpeg" alt="Olivier" class="round-image">
    <div class="quote-content">
      <p class="quote-text">
        “Samen met mijn gezin naar de Mis gaan is voor mij een van de mooiste momenten van de week. Het brengt rust, verbondenheid en herinnert ons aan wat echt belangrijk is.”
      </p>
      <div class="quote-author">
        <span class="name">Olivier</span>
        <span class="meta">Beheerder van de website en redactielid.</span>
      </div>
    </div>
  </div>

  <div class="parochian-quote">
    <img src="assets/parochianen/kevin.png" alt="Kevin Kraaijveld" class="round-image">
    <div class="quote-content">
      <p class="quote-text">
        “Sinds ik hier kom, heb ik weer rust gevonden. De gemeenschap voelt als een tweede thuis.”
      </p>
      <div class="quote-author">
        <span class="name">Kevin Kraaijveld</span>
        <span class="meta">Parochiaan sinds 2025</span>
      </div>
    </div>
  </div>

  <div class="parochian-quote">
    <img src="assets/parochianen/pastoormeijer.jpg" alt="Pastoor Meijer" class="round-image">
    <div class="quote-content">
      <p class="quote-text">
        “Sinds het overlijden van Pastoor De Jong vier ik de Mis in deze parochie, en wat mij telkens opnieuw treft is de warmte en oprechte betrokkenheid van de gemeenschap. Het is een vreugde om hier te mogen dienen.”
      </p>
      <div class="quote-author">
        <span class="name">Pastoor Meijer</span>
        <span class="meta">Sinds het overlijden van Pastoor de Jong viert Pastoor Meijer de Mis in onze parochie.</span>
      </div>
    </div>
  </div>

</div>

## Quote slider

<div id="quotes-slider">

  <div class="parochian-quote">
    <img src="assets/parochianen/olivier.jpeg" alt="Olivier" class="round-image">
    <div class="quote-content">
      <p class="quote-text">
        “Samen met mijn gezin naar de Mis gaan is voor mij een van de mooiste momenten van de week. Het brengt rust, verbondenheid en herinnert ons aan wat echt belangrijk is.”
      </p>
      <div class="quote-author">
        <span class="name">Olivier</span>
        <span class="meta">Beheerder van de website en redactielid.</span>
      </div>
    </div>
  </div>

  <div class="parochian-quote">
    <img src="assets/parochianen/kevin.png" alt="Kevin Kraaijveld" class="round-image">
    <div class="quote-content">
      <p class="quote-text">
        “Sinds ik hier kom, heb ik weer rust gevonden. De gemeenschap voelt als een tweede thuis.”
      </p>
      <div class="quote-author">
        <span class="name">Kevin Kraaijveld</span>
        <span class="meta">Parochiaan sinds 2025</span>
      </div>
    </div>
  </div>

  <div class="parochian-quote">
    <img src="assets/parochianen/pastoormeijer.jpg" alt="Pastoor Meijer" class="round-image">
    <div class="quote-content">
      <p class="quote-text">
        “Sinds het overlijden van Pastoor De Jong vier ik de Mis in deze parochie, en wat mij telkens opnieuw treft is de warmte en oprechte betrokkenheid van de gemeenschap. Het is een vreugde om hier te mogen dienen.”
      </p>
      <div class="quote-author">
        <span class="name">Pastoor Meijer</span>
        <span class="meta">Sinds het overlijden van Pastoor de Jong viert Pastoor Meijer de Mis in onze parochie.</span>
      </div>
    </div>
  </div>

</div>

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
