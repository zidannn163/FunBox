
var content = {
    default: ['Чего сидишь, порадуй котэ, ', 'купи'],
    disable: ['Печалька, ', ' закончился']
}
var products = [
    {
        title: 'Сказачное заморское яство',
        lable: 'Нямушка',
        kind:  'c фуагра',
        stock:  true,
        description: "Печень утки разварная с артишоками."
    },
    {
        title: 'Сказачное заморское яство',
        lable: 'Нямушка',
        kind:  'с рыбой',
        stock:  true,
        description: "Головы щучьи с чесноком да свежайшая сёмушка."
    },
    {
        title: 'Сказачное заморское яство',
        lable: 'Нямушка',
        kind:  'c курой',
        stock:  false,
        description: "Филе из цыплят с трюфелями в бульоне."
    }
]
var size = {
    small:  {portions: 10,  mouses: 1, mass: 0.5},
    medium: {portions: 40,  mouses: 2, mass: 2},
    big:    {portions: 100, mouses: 5, mass: 5},
}

export {content, products, size};
