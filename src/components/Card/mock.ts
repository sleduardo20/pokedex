export default {
  id: 'sm9-162',
  name: 'Pikachu & Zekrom-GX',
  supertype: 'Pokémon',
  hp: '240',
  types: ['Lightning'],
  evolvesTo: ['Raichu'],
  images: {
    small: 'https://images.pokemontcg.io/sm9/162.png',
    large: 'https://images.pokemontcg.io/sm9/162_hires.png',
  },
  rules: [
    'TAG TEAM rule: When your TAG TEAM is Knocked Out, your opponent takes 3 Prize cards.',
  ],
  attacks: [
    {
      name: 'Full Blitz',
      damage: '150',
      text:
        'Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.',
    },
    {
      name: 'Tag Bolt-GX',
      damage: '200',
      text:
        "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 170 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
    },
  ],
  weaknesses: [
    {
      type: 'Fighting',
      value: '×2',
    },
  ],
  resistances: [
    {
      type: 'Metal',
      value: '-20',
    },
  ],
  retreatCost: ['Colorless', 'Colorless', 'Colorless'],
  set: {
    id: 'sm9',
    name: 'Team Up',
  },
  artist: '5ban Graphics',
  rarity: 'Rare Ultra',
};
