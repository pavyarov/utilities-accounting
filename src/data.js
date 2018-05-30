export default {
    electricity: [
        {
            period: "03.2018",
            fio: "Литвиненко Александр Юрьевич",
            address: "a2",
            startKwh: "588.797",
            expenseKwh: "0.425",
            finishKwh: "589.222",
            price: "1.25",
            checkoutPrice: "321.23",
            device: "d1"
        },
        {
            period: "03.2018",
            fio: "Литвиненко Александр Юрьевич",
            address: "a2",
            startKwh: "1.797",
            expenseKwh: "0.225",
            finishKwh: "2.022",
            price: "1.25",
            checkoutPrice: "2.50",
            device: "d1"
        },
        {
            period: "02.2018",
            fio: "Литвиненко Александр Юрьевич",
            address: "a2",
            startKwh: "588.797",
            expenseKwh: "0.425",
            finishKwh: "589.222",
            price: "1.25",
            checkoutPrice: "221.23",
            device: "d1"
        },
        {
            period: "01.2018",
            fio: "Литвиненко Александр Юрьевич",
            address: "a2",
            startKwh: "588.797",
            expenseKwh: "0.425",
            finishKwh: "589.222",
            price: "1.25",
            checkoutPrice: "421.23",
            device: "d1"
        },
        {
            period: "12.2017",
            fio: "Литвиненко Александр Юрьевич",
            address: "a2",
            startKwh: "528.712",
            expenseKwh: "0.325",
            finishKwh: "529.222",
            price: "1.25",
            checkoutPrice: "121.23",
            device: "d1"
        }
    ],
    gas: [
        {
            period: "12.12.2017 15:00",
            fio: "Литвиненко Александр Юрьевич",
            address: "a1",
            amount: "0.112",
            price: "9.25",
            checkoutPrice: "1,036",
            device: "d1"
        },
        {
            period: "12.12.2017 17:00",
            fio: "Литвиненко Александр Юрьевич",
            address: "a1",
            amount: "0.20",
            price: "9.25",
            checkoutPrice: "1,85",
            device: "d1"
        }
    ],
    water: [
        {
            period: "12.12.2017 15:00",
            fio: "Литвиненко Александр Юрьевич",
            address: "a1",
            type: "wt2",
            amount: "0.520",
            price: "3.25",
            checkoutPrice: "1,69",
            device: "d1"
        },
        {
            period: "12.12.2017 16:00",
            fio: "Литвиненко Александр Юрьевич",
            address: "a1",
            type: "wt1",
            amount: "0.120",
            price: "3.25",
            checkoutPrice: "0,39",
            device: "d1"
        },
        {
            period: "12.12.2017 17:00",
            fio: "Литвиненко Александр Юрьевич",
            address: "a1",
            type: "wt1",
            amount: "0.620",
            price: "3.25",
            checkoutPrice: "2,015",
            device: "d1"
        }
    ],
    waterTypes: [
        { id: "wt1", name: "Холодная" },
        { id: "wt2", name: "Горячая" }
    ],
    addreses: [
        {
            id: "a1",
            name: "ул. Пушкина д. Колотушкина"
        },
        {
            id: "a2",
            name: "ул. Кукушкна д. Пиздушкина"
        }
    ],
    devices: [{ id: "d1", name: "Счетчик 1" }, { id: "d2", name: "Счетчик 2" }],
    users: [
        {
            id: 1,
            name: "Logan Schowalter",
            role: "admin"
        },
        {
            id: 2,
            name: "Breanna Gibson",
            role: "user"
        },
        {
            id: 3,
            name: "Annamarie Mayer",
            role: "user"
        }
    ]
};
