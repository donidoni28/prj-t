let invoices = [
    {
        name: "Landen - La Panne",
        step: [
            'Landen',
            'Neerwinden',
            'Ezemaal',
            'Tirlemont',
            'Vertrijk',
            'Louvain',
            'Brussels Airport - Zaventem',
            'Bruxelles-Nord',
            'Bruxelles-Central',
            'Bruxelles-Midi',
            'Liedekerke',
            'Denderleeuw',
            'Gand-Saint-Pierre',
            'De Pinte',
            'Deinze',
            'Tielt',
            'Lichtervelde',
            'Kortemark',
            'Dixmude',
            'Furnes',
            'Coxyde',
            'La Panne'
        ],
        numeroTrain: 3643,
        strNumTrain: "IC 3643",
    },
    {
        name: "Stankonia",
        step: [
            'Charleroi-Sud',
            'Marchienne-AuPont',
            'Luttre',
            'Nivelles',
            'Braine-L Alleud',
            'Bruxelles-Midi',
            'Bruxelles-Central',
            'Bruxelles-Nord',
            'Malines',
            'Malines-Nekkerspoel',
            'Mortsel-Oude God',
            'Anvers-Berchem',
            'Anver-Central',
        ],
        numeroTrain: 3120,
        strNumTrain: "IC 3120",
    },
    {
        name: "Ocean Avenue",
        step: [
            'Rochefort-Jemelle',
            'Marloie',
            'Ciney',
            'Gembloux',
            'Ottignies',
            'Bruxelles-Luxembourg',
            'Bruxelles-Shuman',
            'Bruxelles-Nord',
            'Bruxelles-Central',
            'Bruxelles-Midi'
        ],
        numeroTrain: 2141,
        strNumTrain: "IC 2141",
    },
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.numeroTrain === number
    );
}
