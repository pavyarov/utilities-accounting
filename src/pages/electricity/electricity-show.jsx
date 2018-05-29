import * as React from 'react';
import { Show, SimpleShowLayout, TextField } from 'admin-on-rest';
import { RaisedButton } from 'material-ui';


export const ElectricityShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout title={`Учет электроэнергии за период`}>
            <TextField label="Период учета" source="period" />
            <TextField label="ФИО" source="fio" />
            <TextField label="Адрес" source="address" />
            <TextField label="Начало, kWh" source="startKwh" />
            <TextField label="Расход, kWh" source="expenseKwh" />
            <TextField label="Конец, kWh" source="finishKwh" />
            <TextField label="Цена за kWh" source="price" />
            <TextField label="Сумма к оплате" source="checkoutPrice" />
            <RaisedButton label="Оплатить" primary />
        </SimpleShowLayout>
    </Show>
);
