export default {
  data: {
    id: 'pl1-1',
    name: 'Ampharos',
    supertype: 'Pokémon',
    subtypes: ['Stage 2'],
    level: '57',
    hp: '130',
    types: ['Lightning'],
    evolvesFrom: 'Flaaffy',
    abilities: [
      {
        name: 'Damage Bind',
        text:
          "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
        type: 'Poké-Body',
      },
    ],
    attacks: [
      {
        name: 'Gigavolt',
        cost: ['Lightning', 'Colorless'],
        convertedEnergyCost: 2,
        damage: '30+',
        text:
          'Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.',
      },
      {
        name: 'Reflect Energy',
        cost: ['Lightning', 'Colorless', 'Colorless'],
        convertedEnergyCost: 3,
        damage: '70',
        text:
          'Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.',
      },
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '+30',
      },
    ],
    resistances: [
      {
        type: 'Metal',
        value: '-20',
      },
    ],
    retreatCost: ['Colorless', 'Colorless'],
    convertedRetreatCost: 2,
    set: {
      id: 'pl1',
      name: 'Platinum',
      series: 'Platinum',
      printedTotal: 127,
      total: 130,
      legalities: {
        unlimited: 'Legal',
      },
      ptcgoCode: 'PL',
      releaseDate: '2009/02/11',
      updatedAt: '2020/08/14 09:35:00',
      images: {
        symbol: 'https://images.pokemontcg.io/pl1/symbol.png',
        logo: 'https://images.pokemontcg.io/pl1/logo.png',
      },
    },
    number: '1',
    artist: 'Atsuko Nishida',
    rarity: 'Rare Holo',
    nationalPokedexNumbers: [181],
    legalities: {
      unlimited: 'Legal',
    },
    images: {
      small: 'https://images.pokemontcg.io/pl1/1.png',
      large: 'https://images.pokemontcg.io/pl1/1_hires.png',
    },
    tcgplayer: {
      url: 'https://prices.pokemontcg.io/tcgplayer/pl1-1',
      updatedAt: '2021/03/09',
      prices: {
        holofoil: {
          low: 5.68,
          mid: 6.75,
          high: 8.9,
          market: 3.56,
          directLow: null,
        },
        reverseHolofoil: {
          low: 0.94,
          mid: 7.97,
          high: 15.0,
          market: 2.16,
          directLow: null,
        },
      },
    },
  },
};
