import * as types from "../actions/types";

const initialState = [
    {
        title: 'red',
        description: 'Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.',
        hex: '#fb0d1b',
        rgb: 'rgb(251, 13, 27)',
        maxlevel: 0
    },
    {
        title: 'redorange',
        description: 'Red-orange corresponds to desire, passion, pleasure, domination, aggression, and thirst for action.',
        hex: '#d4551c',
        rgb: 'rgb(212, 85, 28)',
        maxlevel: 0
    },
    {
        title: 'orange',
        description: 'Orange represents enthusiasm, fascination, happiness, creativity, determination, attraction, success, encouragement, and stimulation.',
        hex: '#fb8e26',
        rgb: 'rgb(251, 142, 38)',
        maxlevel: 0
    },
    {
        title: 'yelloworange',
        description: 'Yellow orange encourages vitality and self-control.',
        hex: '#f9c22d',
        rgb: 'rgb(249, 194, 45)',
        maxlevel: 0
    },
    {
        title: 'yellow',
        description: 'Yellow is the color of sunshine. It\'s associated with joy, happiness, intellect, and energy. Yellow produces a warming effect, arouses cheerfulness, stimulates mental activity, and generates muscle energy.',
        hex: '#fffa37',
        rgb: 'rgb(255, 250, 55)',
        maxlevel: 0
    },
    {
        title: 'green',
        description: 'Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety. Dark green is also commonly associated with money.',
        hex: '#8ec427',
        rgb: 'rgb(142, 196, 39)',
        maxlevel: 0
    },
    {
        title: 'darkgreen',
        description: 'Dark green is associated with ambition, greed, and jealousy.',
        hex: '#20ad1d',
        rgb: 'rgb(32, 173, 29)',
        maxlevel: 0
    },
    {
        title: 'lightblue',
        description: 'Light blue is associated with health, healing, tranquility, understanding, and softness.',
        hex: '#1c9ec1',
        rgb: 'rgb(28, 158, 193)',
        maxlevel: 0
    },
    {
        title: 'blue',
        description: 'Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.',
        hex: '#0e60b3',
        rgb: 'rgb(14, 96, 179)',
        maxlevel: 0
    },
    {
        title: 'darkblue',
        description: 'Dark blue represents knowledge, power, integrity, and seriousness.',
        hex: '#051da6',
        rgb: 'rgb(5, 29, 166)',
        maxlevel: 0
    },
    {
        title: 'purple',
        description: 'Purple combines the stability of blue and the energy of red. Purple is associated with royalty. It symbolizes power, nobility, luxury, and ambition. It conveys wealth and extravagance. It is associated with wisdom, dignity, independence, creativity, mystery, and magic.',
        hex: '#61139b',
        rgb: 'rgb(97, 19, 155)',
        maxlevel: 0
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_BEST_LEVEL:
            console.log(action.payload);
            return state.map((color) => {
                if (color.title === action.payload.title)
                    return {...color, maxlevel: action.payload.level};
               else return color
            });
        default:
            return state
    }
}