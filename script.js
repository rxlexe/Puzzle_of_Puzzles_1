document.addEventListener("DOMContentLoaded", function() {
  const nouns = ["Trinket", "Bauble", "Doodle", "Gadget", "Tidbit", "Knickknack", "Whimsy", 
 "Fluff", "Glimmer", "Hubbub", "Morsel", "Flicker", "Jumble", "Snippet", 
 "Fringe", "Puddle", "Quirk", "Zest", "Wisp", "Sprinkle", "Fumble", "Scurry", 
 "Tangle", "Glimpse", "Riffle", "Clutter", "Tweak", "Nibble", "Smidgen", 
 "Snuggle", "Dabble", "Crumble", "Drizzle", "Glint", "Skirmish", "Flutter", 
 "Smudge", "Tumble", "Squiggle", "Scuffle"];
  
  const ciphers = [
    "A=P", "B=Q", "C=R", "D=S", "E=T",
    "F=G", "G=V", "H=W", "I=X", "J=Y",
    "K=Z", "L=A", "M=B", "N=C", "O=D",
    "P=E", "Q=F", "R=G", "S=H", "T=I",
    "U=J", "V=K", "W=L", "X=M", "Y=N",
    "Z=O", "A=C", "B=D", "C=E", "D=F",
    "E=G", "F=H", "G=I", "H=J", "I=K",
    "J=L", "K=M", "L=N", "M=O", "N=P"
  ];
  
  const grid = document.querySelector('.grid');

  for (let i = 0; i < 40; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.textContent = nouns[i];
    
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = ciphers[i];
    
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    box.appendChild(card);
    
    box.addEventListener('click', function() {
      card.classList.toggle('card-flipped');
    });
    
    grid.appendChild(box);
  }
});
