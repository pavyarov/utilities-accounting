import * as React from 'react';
import { List, Datagrid, TextField, NumberField, ShowButton } from 'admin-on-rest';

export const ElectricityList = (props) => (
    <List title="Электроэнергия" {...props}>
        <Datagrid>
            <TextField label="Период" source="period" />
            <TextField label="Владелец" source="fio" />
            <TextField label="Адрес" source="address" />
            <NumberField label="Начало, kWh" source="startKwh" />
            <NumberField label="Расход, kWh" source="expenseKwh" />
            <NumberField label="Конец, kWh" source="finishKwh" />
            <NumberField label="Цена за kWh" source="price" />
            <NumberField label="Сумма к оплате" source="checkoutPrice" />
            <ShowButton />
        </Datagrid>
    </List>
);
