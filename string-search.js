const products = [
    'Dell hardcore i29 200GB',
    'ipad 1 TB',
    'yello laptop',
    '1X59 Leonovo laptop',
    'LG aupernova laptop',
    'purple color phone with laptop'
];

const searcing = 'laptop';

// indexOf

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searcing.toLowerCase()) ! = -1) {
        output.push(product);
    }
}


// includes
for (const product of products) {
    if (product.toLowerCase().includes(searcing.toLowerCase())) {
        output.push(product);
    }
}

// starts with 
for (const product of products) {
    if (product.toLowerCase().startsWith(searcing.toLowerCase())) {
        output.push(product);
    }
}