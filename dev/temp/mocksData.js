/* Module data structure */

// moduleName: {
//     dataType: {
//         property: value
//     }
// }

/* Module data example */

_template: {
    big: {
        title: 'Hello world',
        age: 10,
        button: false
    }
},

'footer': {
    defaults: {
        title: 'Create your holiday activite',
            question: 'Hi! What are your holiday interest?',
            name: ["Company","About", "Contact", "Press", "Blog","Terms and Privacy", "Help","Partners"]
    }
}
,

'head': {
    defaults: {
        title: 'default title',
        useSocialMetaTags: true
    }
},

'header': {
    defaults: {
        logo: 'Dreamshare',
            undertitle: "And find the perfect partner to fill full it",
            btn: "Find your holiday partner"
    }
}
,

'howitworks': {
    changeble: {
        item: ["howitworks__item-1","howitworks__item-2","howitworks__item-3"],
        step: ["Step 1", "Step 2", "Step 3"],
            title: ["Sed leo enim, condementum", "Morbi velit isus", "Sed leo enim, condementum"],
            text: ["Sed ut perspiciatis unde omnis iste natus error natus error sit voluptatem sit voluptatem.","Nemo enim ipsam voluptatem natus error sit voluptatemquia.","ed ut perspiciatis unde natus error sit voluptatem omnis iste natus error sit voluptatem." ]
    }
}
,

'ideas': {
    media: {
        title: 'Discover holiday activity ideas',
        block: ["ideas__banners--1","ideas__banners--2","ideas__banners--3","ideas__banners--4","ideas__banners--5","ideas__banners--6",
            "ideas__banners--7"],
        text: ["Sports and Actives","Welness and Health","Extreme Sports and Expeditions",
            "Game", "Culture and Education","Enjoment and Relaxation","Traveling"]
    }
}
,

'interest': {
    defaults: {
        title: 'Create your holiday activite',
        question: 'Hi! What are your holiday interest?'
    }
}
,

'meetpartner': {
    defaults: {
        title: "Meet a partner for your best holiday",
            myclass: ["meet-partner__ava--1", "meet-partner__ava--2", "meet-partner__ava--3","meet-partner__ava--4"],
            myimages: ["static/img/content/ava1.svg","static/img/content/ava2.svg", "static/img/content/ava3.svg",
        "static/img/content/ava4.svg"],
            name: ["Bradley Hunter", "Marie Benett", "Diana Wells", "Christopher Pierce"],
            text: ["Based in Chicago. I love playing tennis and loud music",
        "Currently living in Colorado. Lover of art, languages and traveling",
            "Living in Athenes, Greece. I like black and white classics, chillout musik and green tea.",
        "Star Wars fanatic. I have a parsistant enthusiasm to create new things."],
            btn: "See other partners"
    }
}
,

__pages: [{
                name: 'index',
                href: 'index.html'
             }]