const fruits = [
    {
        ref: "fruits_1",
        category: 0, 
        name: "Citron", 
        price: 0.99, 
        unit : "piece", 
        image: "citron.png"
    }, 
    
    {
        ref: "fruits_2",
        category: 0, 
        name: "Citron vert",
        price: 1.99, 
        unit : "piece", 
        image: "line.png"
    },

    {
        ref: "fruits_3",
        category: 0, 
        name: "Fraise",
        price: 2.99, 
        unit : "kg", 
        image: "fraise.png"
    }, 

    {
        ref: "fruits_4",
        category: 0, 
        name: "Noix de coco",
        price: 3.99, 
        unit : "piece", 
        image: "coconut.png"
    }, 

    {
        ref: "fruits_5",
        category: 0, 
        name: "Clementine ",
        price: 3.99, 
        unit : "piece", 
        image: "clementine.png"
    }, 

    {
        ref: "fruits_6",
        category: 0, 
        name: "Figues",
        price: 5.99, 
        unit : "piece", 
        image: "figues.png"
    }, 

    {
        ref: "fruits_7",
        category: 0, 
        name: "Raisin",
        price: 4.59, 
        unit : "kg", 
        image: "grapes.png"
    }, 

    {
        ref: "fruits_8",
        category: 0, 
        name: "Kiwi",
        price: 4.99, 
        unit : "kg", 
        image: "kiwi.png"
    },

    {
        ref: "fruits_9",
        category: 0, 
        name: "Poires",
        price: 3.49, 
        unit : "kg", 
        image: "poires.png"
    }
]; 

const legumes = [
    {
        ref: "legume_1",
        category: 1, 
        name: "Oignons",
        price: 0.99, 
        unit : "kg", 
        image: "oignons.png"
    }, 

    {
        ref: "legume_2",
        category: 1, 
        name: "Poivrons",
        price: 2.99, 
        unit : "kg", 
        image: "poivrons.png"
    }, 

    {
        ref: "legume_3",
        category: 1, 
        name: "Radis",
        price: 3.99, 
        unit : "kg", 
        image: "radis.png"
    }, 
    
    {
        ref: "legume_4",
        category: 1, 
        name: "Tomato",
        price: 3.99, 
        unit : "kg", 
        image: "tomato.png"
    }, 

    {
        ref: "legume_5",
        category: 1, 
        name: "Brocolis",
        price: 3.99, 
        unit : "kg", 
        image: "brocolis.png"
    }, 

    {
        ref: "legume_6",
        category: 1, 
        name: "Aubergines",
        price: 3.99, 
        unit : "kg", 
        image: "aubergine.png"
    }, 

    {
        ref: "legume_7",
        category: 1, 
        name: "Carotte",
        price: 2.99, 
        unit : "kg", 
        image: "carotte.png"
    }, 

    {
        ref: "legume_8",
        category: 1, 
        name: "Choux",
        price: 1.99, 
        unit : "kg", 
        image: "chou.png"
    }
]

const fresh = [
    {
        ref: "fresh_1",
        category: 2, 
        name: "Milk",
        price: 2.99, 
        unit : "piece", 
        image: "milk.png"
    }, 

    {
        ref: "fresh_2",
        category: 2, 
        name: "Beurre à tartiner",
        price: 1.99, 
        unit : "piece", 
        image: "beurre.png"
    }, 

    {
        ref: "fresh_3",
        category: 2, 
        name: "Oeuf",
        price: 3.99, 
        unit : "les douzes", 
        image: "eggs.png"
    }, 

    {
        ref: "fresh_4",
        category: 2, 
        name: "Yaourt Nature",
        price: 13.99, 
        unit : "piece", 
        image: "yaourt_nature.png"
    }, 

    {
        ref: "fresh_5",
        category: 2, 
        name: "Yaourt Fruits",
        price: 10.10, 
        unit : "piece", 
        image: "yaourt_fruits.png"
    }
]

const epicerie = [
    {
        ref: "epicerie_1",
        category: 3, 
        name: "Thon",
        price: 2.99, 
        unit : "piece", 
        image: "thon.png"
    }, 

    {
        ref: "epicerie_2",
        category: 3, 
        name: "Sardine",
        price: 1.99, 
        unit : "piece", 
        image: "sardine.png"
    }, 

    {
        ref: "epicerie_3",
        category: 3, 
        name: "Cookies",
        price: 3.99, 
        unit : "piece", 
        image: "cookies.png"
    }, 

    {
        ref: "epicerie_4",
        category: 3, 
        name: "Biscottes",
        price: 5.99, 
        unit : "piece", 
        image: "biscottes.png"
    }, 

    {
        ref: "epicerie_5",
        category: 3, 
        name: "The",
        price: 3.59, 
        unit : "piece", 
        image: "the.png"
    }, 

    {
        ref: "epicerie_6",
        category: 3, 
        name: "Soupes",
        price: 3.59, 
        unit : "piece", 
        image: "soupes.png"
    }, 

    {
        ref: "epicerie_7",
        category: 3, 
        name: "Pates",
        price: 3.59, 
        unit : "piece", 
        image: "pates.png"
    }
]

const boissons = [
    {
        ref: "boisson_1",
        category: 4, 
        name: "Vin rouge",
        price: 12.99, 
        unit : "piece", 
        image: "bordeaux.png"
    }, 

    {
        ref: "boisson_2",
        category: 4, 
        name: "Vin blanc",
        price: 11.99, 
        unit : "piece", 
        image: "white_vine.png"
    }, 

    {
        ref: "boisson_3",
        category: 4, 
        name: "Riesling",
        price: 25.99, 
        unit : "piece", 
        image: "riesling.png"
    }, 

    {
        ref: "boisson_4",
        category: 4, 
        name: "Coca",
        price: 2.49, 
        unit : "piece", 
        image: "coca.png"
    }, 

    {
        ref: "boisson_5",
        category: 4, 
        name: "Sprite",
        price: 1.49, 
        unit : "piece", 
        image: "sprite.png"
    }, 

    {
        ref: "boisson_6",
        category: 4, 
        name: "Finley",
        price: 1.49, 
        unit : "piece", 
        image: "finley.png"
    }, 

    {
        ref: "boisson_7",
        category: 4, 
        name: "Nestea",
        price: 1.19, 
        unit : "piece", 
        image: "nestea.png"
    }, 

    {
        ref: "boisson_8",
        category: 4, 
        name: "Sprite",
        price: 1.49, 
        unit : "piece", 
        image: "sprite.png"
    }, 

    {
        ref: "boisson_9",
        category: 4, 
        name: "Sprite Zero",
        price: 1.49, 
        unit : "piece", 
        image: "sprite_zero.png"
    }
]

//exporter la liste dans index.js de notre app
//egalement de mettre la liste dans index de components
export const list = [fruits, legumes, fresh, epicerie, boissons]
