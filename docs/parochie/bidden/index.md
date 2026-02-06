---
title: Samen Bidden
---

<div class="pray-container">

  <!-- Left column: intro text -->
<div class="pray-text">
  <p>
    Bidden is een krachtig middel om uw hart te openen voor Gods aanwezigheid en leiding.  
  </p>
  <p>
    Voor wie de rozenkrans wil bidden, volg deze <a href="/parochie/bidden/rozenkrans.html">link naar de rozenkrans</a>.  
    U kunt ook bidden tot de Heilige Geest voor wijsheid en leiding, of tot Sint-Michiel voor bescherming.  
  </p>
  <p>
    Daarnaast bieden wij eenvoudige gebedsoefeningen aan om te reflecteren over uw geloof, hoop, liefde en berouw.  
    Laat uw gebed een moment van stilte en overgave zijn, waarbij u openstaat voor Gods nabijheid en troost.
  </p>
</div>


  <!-- Right column: candle -->
  <div class="pray-candle">
    <div id="candle" class="candle">
      <div class="wick"></div>
      <div class="flame"></div>
    </div>
    <button id="candleButton">
      Steek een kaarsje aan
    </button>
  </div>

</div>

<style>
  .pray-container {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    font-family: Arial, sans-serif;
    max-width: 900px;
    margin: 40px auto;
  }

  .pray-text {
    flex: 1;
    font-size: 16px;
    line-height: 1.5;
    color: #111;
  }

  .pray-candle {
    flex-shrink: 0;
    text-align: center;
  }

  .pray-candle button {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    background: #ffcc66;
    border: none;
    border-radius: 6px;
  }

  .candle {
    position: relative;
    width: 60px;
    height: 140px;
    background: #f5f5dc;
    border-radius: 8px;
    box-shadow: inset 0 -10px 0 rgba(0,0,0,0.1);
    transform-origin: bottom;
    transition: height 1s linear;
    margin: 0 auto;
  }

  .wick {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 4px;
    height: 10px;
    background: #333;
    transform: translateX(-50%);
  }

  .flame {
    position: absolute;
    top: -55px;
    left: 50%;
    width: 30px;
    height: 50px;
    background: radial-gradient(circle at 50% 60%, #fff 0%, #ffd966 40%, #ff9900 70%, #ff6600 100%);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    transform: translateX(-50%);
    opacity: 0;
    animation: flicker 0.15s infinite alternate;
  }

  .lit .flame {
    opacity: 1;
  }

  @keyframes flicker {
    from { transform: translateX(-50%) scaleY(1); }
    to { transform: translateX(-50%) scaleY(1.05); }
  }

  button:disabled {
    opacity: 0.6;
    cursor: default;
  }

  /* Responsive: stack text above candle on small screens */
  @media (max-width: 700px) {
    .pray-container {
      flex-direction: column;
      gap: 20px;
    }

    .pray-candle {
      margin-top: 20px;
    }
  }
</style>


<script>
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  const candle = document.getElementById('candle');
  const button = document.getElementById('candleButton');

  if (!candle || !button) {
    console.error('Candle or button not found in DOM!');
    return;
  }

  const burnTime = 300; // seconds
  const startHeight = 140;
  const endHeight = 30;
  let burnInterval = null;

  button.addEventListener('click', () => {
    console.log('Button clicked:', button.textContent);

    if (button.textContent.trim() === 'Steek een kaarsje aan') {
    lightCandle();
    } else if (button.textContent.trim() === 'Nieuw kaarsje') {
    resetCandle();
    }

  });

  function lightCandle() {
    console.log('Lighting candle...');
    candle.classList.add('lit');
    button.textContent = 'Kaarsje is aangestoken…';
    button.disabled = true;

    let remaining = burnTime;

    burnInterval = setInterval(() => {
      remaining--;
      const progress = 1 - remaining / burnTime;
      const newHeight = startHeight - (startHeight - endHeight) * progress;
      candle.style.height = newHeight + 'px';

      if (remaining <= 0) {
        clearInterval(burnInterval);
        extinguish();
      }
    }, 1000);
  }

  function extinguish() {
    console.log('Candle extinguished');
    candle.classList.remove('lit');
    button.textContent = 'Nieuw kaarsje';
    button.disabled = false;
  }

  function resetCandle() {
    console.log('Resetting candle');
    candle.style.height = startHeight + 'px';
    button.textContent = 'Steek een kaarsje aan';
  }
});

</script>


## Gebed tot de Aartsengel Michaël

Heilige Aartsengel Michaël, verdedig ons in de strijd;  
wees onze bescherming tegen de boosheid en de  
listen van de duivel.  
Wij smeken ootmoedig dat God hem Zijn macht doe gevoelen.  
En gij, vorst van de hemelse legerscharen,  
drijf Satan en de andere boze geesten,  
die tot verderf van de zielen over de wereld rondgaan,  
door de goddelijke kracht in de hel terug.  
Amen.

---

## Gebed tot de Heilige Geest

Kom, heilige Geest,  
vervul de harten van uw gelovigen  
en ontsteek in hen het vuur van uw liefde.  
Zend uw Geest uit  
en alles zal herschapen worden.  
En Gij zult het aanzien van de aarde vernieuwen.

Laat ons bidden.  
God, Gij hebt de harten van de gelovigen door de verlichting van de heilige Geest onderwezen.  
Geef dat wij door die heilige Geest de ware wijsheid mogen bezitten  
en ons altijd over zijn vertroosting verblijden.  
Door Christus, onze Heer.  
Amen.

---

## Gebedsoefeningen

Hier vindt u enkele klassieke oefeningen van geloof, hoop, liefde en berouw. Ze helpen om het gebedsleven te verdiepen en de relatie met God te versterken.

### Oefening van geloof
Mijn Heer en mijn God,  
ik geloof dat Gij zijt één God in drie Personen,  
de Vader, de Zoon en de Heilige Geest;  
dat God de Zoon voor ons is mens geworden en aan het kruis gestorven;  
dat Gij het goede loont en het kwade straft.  
Ik geloof alles wat Gij hebt geopenbaard, en door de heilige Kerk ons leert.  
Dat geloof ik vast, omdat Gij het hebt gezegd, die alles weet en altijd waarheid spreekt.  
Heer, vermeerder mijn geloof.  
Amen.

---

### Oefening van hoop
Oneindig goede God,  
ik hoop, door de verdiensten van Jezus Christus,  
van U te verkrijgen: de eeuwige zaligheid en alle genaden, die ik daarvoor nodig heb.  
Dat hoop ik met een vast vertrouwen,  
omdat Gij het hebt beloofd, die almachtig zijt, oneindig goed voor ons en getrouw in uw beloften.  
Heer, versterk mijn hoop!  
Amen.

---

### Oefening van liefde
God van Liefde,  
ik bemin U boven alles en uit geheel mijn hart,  
omdat Gij oneindig goed en oneindig beminnelijk zijt.  
Uit liefde tot U bemin ik ook alle mensen als mijzelf.  
Heer, geef mij steeds meer liefde!  
Amen.

---

### Oefening van berouw
Barmhartige God,  
ik heb spijt over mijn zonden,  
omdat ik uw straffen heb verdiend;  
maar vooral, omdat ik U, mijn grootste Weldoener en het hoogste Goed, heb beledigd.  
Ik verfoei al mijn zonden en beloof,  
met de hulp van uw genade,  
mijn leven te beteren en niet meer te zondigen.  
Heer, wees mij zondaar genadig!  
Amen.
