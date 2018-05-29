import * as React from "react";
import { Filter, DateInput, ReferenceInput, SelectInput } from "admin-on-rest";

export const PagesFilter = props => (
    <Filter {...props}>
        <DateInput
            label="Период"
            source="period"
            options={{ locale: "ru-RU" }}
        />
        <ReferenceInput
            label="Адрес"
            source="address"
            reference="addreses"
            alwaysOn
            allowEmpty
        >
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
