export default {
  id: 'swshp-SWSH020',
  name: 'Pikachu',
  nationalPokedexNumber: 25,
  imageUrl: 'https://images.pokemontcg.io/swshp/SWSH020.png',
  imageUrlHiRes: 'https://images.pokemontcg.io/swshp/SWSH020_hires.png',
  types: ['Lightning'],
  supertype: 'Pokémon',
  subtype: 'Basic',
  hp: '70',
  retreatCost: ['Colorless'],
  convertedRetreatCost: 1,
  number: 'SWSH020',
  artist: 'Hideki Ishikawa',
  rarity: 'Promo',
  series: 'Sword & Shield',
  set: 'SWSH Black Star Promos',
  setCode: 'swshp',
  attacks: [
    {
      cost: ['Colorless', 'Colorless'],
      name: 'Iron Tail',
      text:
        'Flip a coin until you get tails. This attack does 30 damage for each heads.',
      damage: '30×',
      convertedEnergyCost: 2,
    },
    {
      cost: ['Lightning', 'Lightning', 'Colorless'],
      name: 'Electro Ball',
      text: '',
      damage: '60',
      convertedEnergyCost: 3,
    },
  ],
  weaknesses: [
    {
      type: 'Fighting',
      value: '×2',
    },
  ],
};
