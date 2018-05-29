import * as React from "react";
import { Show, SimpleShowLayout, TextField } from "admin-on-rest";
import { RaisedButton } from "material-ui";

export const GasShow = props => (
    <Show {...props}>
        <SimpleShowLayout title={`Учет газоснабжения за период`}>
            <TextField label="Период учета" source="period" />
            <TextField label="ФИО" source="fio" />
            <TextField label="Адрес" source="address" />
            <TextField label="Обьем, м3" source="startKwh" />
            <TextField label="Цена за м3" source="price" />
            <TextField label="Сумма к оплате" source="checkoutPrice" />
            <RaisedButton label="Оплатить" primary />
        </SimpleShowLayout>
    </Show>
);
