const products = [
    {
        id: 1,
        product: 'aliquam',
        description:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam lestomie nibh in lectus. Pellentesque at nulla.',
        price: '$1406.68',
    },
    {
        id: 2,
        product: 'ut tellus',
        description:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius.',
        price: '$2919.38',
    },
    {
        id: 3,
        product: 'integer',
        description:
            'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
        price: '$2247.73',
    },
    {
        id: 4,
        product: 'orci vehicula',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, lestomie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        price: '$1318.35',
    },
    {
        id: 5,
        product: 'augue vel',
        description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
        price: '$2275.87',
    },
    {
        id: 6,
        product: 'neque libero',
        description:
            'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
        price: '$2523.55',
    },
    {
        id: 7,
        product: 'ignos',
        description:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        price: '$1538.21',
    },
    {
        id: 8,
        product: 'cursus id',
        description:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
        price: '$1700.90',
    },
    {
        id: 9,
        product: 'nec euismod',
        description:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
        price: '$1113.35',
    },
    {
        id: 10,
        product: 'eleifend',
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
        price: '$1826.20',
    },
    {
        id: 11,
        product: 'gravida nisi',
        description:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
        price: '$1040.69',
    },
    {
        id: 12,
        product: 'elit proin',
        description:
            'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        price: '$1927.65',
    },
    {
        id: 13,
        product: 'euismod scelerisque',
        description:
            'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
        price: '$2800.42',
    },
    {
        id: 14,
        product: 'ut',
        description:
            'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
        price: '$2500.34',
    },
    {
        id: 15,
        product: 'orci nullam lestomie',
        description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
        price: '$1516.50',
    },
    {
        id: 16,
        product: 'in faucibus orci',
        description:
            'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
        price: '$1415.14',
    },
    {
        id: 17,
        product: 'turpis',
        description:
            'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
        price: '$2936.40',
    },
    {
        id: 18,
        product: 'dui',
        description:
            'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
        price: '$790.55',
    },
    {
        id: 19,
        product: 'accumsan odio curabitur',
        description:
            'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
        price: '$969.24',
    },
    {
        id: 20,
        product: 'interdum in',
        description:
            'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        price: '$1706.69',
    },
    {
        id: 21,
        product: 'orci mauris',
        description:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
        price: '$1870.39',
    },
    {
        id: 22,
        product: 'hac habitasse platea',
        description:
            'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
        price: '$582.00',
    },
    {
        id: 23,
        product: 'congue eget',
        description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
        price: '$2813.85',
    },
    {
        id: 24,
        product: 'felis',
        description:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        price: '$1755.02',
    },
    {
        id: 25,
        product: 'integer ac leo',
        description:
            'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        price: '$410.24',
    },
    {
        id: 26,
        product: 'est risus auctor',
        description:
            'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        price: '$1572.37',
    },
    {
        id: 27,
        product: 'erat',
        description:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        price: '$114.15',
    },
    {
        id: 28,
        product: 'turpis donec posuere',
        description:
            'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
        price: '$311.28',
    },
    {
        id: 29,
        product: 'lorem ipsum dolor',
        description: 'Phasellus in felis. Donec semper sapien a libero.',
        price: '$2797.01',
    },
    {
        id: 30,
        product: 'integer ac',
        description:
            'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        price: '$2286.06',
    },
    {
        id: 31,
        product: 'amet',
        description:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
        price: '$1126.31',
    },
    {
        id: 32,
        product: 'et commodo',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        price: '$1697.56',
    },
    {
        id: 33,
        product: 'neque libero',
        description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        price: '$1711.64',
    },
    {
        id: 34,
        product: 'amet',
        description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
        price: '$209.76',
    },
    {
        id: 35,
        product: 'nullam porttitor',
        description:
            'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
        price: '$373.98',
    },
    {
        id: 36,
        product: 'accumsan felis',
        description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        price: '$1312.78',
    },
    {
        id: 37,
        product: 'ridiculus mus',
        description:
            'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
        price: '$2253.07',
    },
    {
        id: 38,
        product: 'massa tempor',
        description:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        price: '$933.20',
    },
    {
        id: 39,
        product: 'ultrices',
        description:
            'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
        price: '$1681.75',
    },
    {
        id: 40,
        product: 'elementum',
        description:
            'In eleifend quam a odio. In hac habitasse platea dictumst.',
        price: '$825.62',
    },
    {
        id: 41,
        product: 'dis parturient montes',
        description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
        price: '$1365.63',
    },
    {
        id: 42,
        product: 'pede',
        description: 'Proin eu mi. Nulla ac enim.',
        price: '$1038.76',
    },
    {
        id: 43,
        product: 'convallis',
        description:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
        price: '$2217.05',
    },
    {
        id: 44,
        product: 'lacinia',
        description:
            'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        price: '$1421.11',
    },
    {
        id: 45,
        product: 'diam',
        description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
        price: '$1581.94',
    },
    {
        id: 46,
        product: 'quisque id',
        description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
        price: '$869.56',
    },
    {
        id: 47,
        product: 'nec lestomie sed',
        description:
            'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing lestomie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
        price: '$1183.09',
    },
    {
        id: 48,
        product: 'mauris laoreet',
        description:
            'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
        price: '$2614.99',
    },
    {
        id: 49,
        product: 'odio cras mi',
        description: 'Integer ac leo. Pellentesque ultrices mattis odio.',
        price: '$2367.10',
    },
    {
        id: 50,
        product: 'vel lectus in',
        description:
            'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        price: '$2606.52',
    },
    {
        id: 51,
        product: 'egestas',
        description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
        price: '$1388.00',
    },
    {
        id: 52,
        product: 'quam',
        description:
            'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        price: '$400.92',
    },
    {
        id: 53,
        product: 'porttitor pede justo',
        description: 'Vivamus tortor. Duis mattis egestas metus.',
        price: '$820.95',
    },
    {
        id: 54,
        product: 'id',
        description:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        price: '$605.33',
    },
    {
        id: 55,
        product: 'mi',
        description:
            'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
        price: '$1820.19',
    },
    {
        id: 56,
        product: 'tortor quis turpis',
        description:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
        price: '$2373.55',
    },
    {
        id: 57,
        product: 'eu massa',
        description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        price: '$1690.37',
    },
    {
        id: 58,
        product: 'sapien',
        description:
            'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
        price: '$1177.53',
    },
    {
        id: 59,
        product: 'odio elementum',
        description:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
        price: '$1998.24',
    },
    {
        id: 60,
        product: 'habitasse platea',
        description: 'Praesent blandit. Nam nulla.',
        price: '$1004.00',
    },
    {
        id: 61,
        product: 'nullam orci',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
        price: '$2956.53',
    },
    {
        id: 62,
        product: 'erat quisque erat',
        description:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        price: '$303.50',
    },
    {
        id: 63,
        product: 'nonummy',
        description:
            'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        price: '$94.68',
    },
    {
        id: 64,
        product: 'lestomie lorem quisque',
        description:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        price: '$462.80',
    },
    {
        id: 65,
        product: 'ultrices libero',
        description:
            'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        price: '$2832.08',
    },
    {
        id: 66,
        product: 'velit eu est',
        description:
            'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
        price: '$189.39',
    },
    {
        id: 67,
        product: 'ornare consequat',
        description:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
        price: '$2742.86',
    },
    {
        id: 68,
        product: 'sed ante vivamus',
        description:
            'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        price: '$2638.14',
    },
    {
        id: 69,
        product: 'lacinia erat vestibulum',
        description:
            'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        price: '$712.06',
    },
    {
        id: 70,
        product: 'eleifend quam',
        description:
            'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
        price: '$1642.09',
    },
    {
        id: 71,
        product: 'eu interdum',
        description:
            'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
        price: '$116.39',
    },
    {
        id: 72,
        product: 'ut',
        description:
            'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
        price: '$661.02',
    },
    {
        id: 73,
        product: 'amet justo morbi',
        description:
            'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
        price: '$2842.66',
    },
    {
        id: 74,
        product: 'dis',
        description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        price: '$830.94',
    },
    {
        id: 75,
        product: 'fermentum donec',
        description:
            'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        price: '$115.57',
    },
];

export default products;
