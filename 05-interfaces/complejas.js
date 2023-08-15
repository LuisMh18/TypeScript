"use strict";
(() => {
    const client = {
        name: 'Luis',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            id: 123,
            zip: 'DSA',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
