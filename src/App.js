import * as React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import jsonRestClient from 'aor-json-rest-client';
import logo from './logo.svg';
import './App.css';
import russianMessages from 'aor-language-russian';
import addUploadFeature from './addUploadFeature';
import { authClient } from './auth-client';
import data from './data';
import { ElectricityList, ElectricityShow } from './pages/electricity';

const messages = {
    'ru': russianMessages,
};

const restClient = jsonRestClient(data, true);
const uploadCapableClient = addUploadFeature(restClient);
const delayedRestClient = (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(uploadCapableClient(type, resource, params)),
            1000
        )
    );

export const App = () => (
    <Admin
        authClient={authClient}
        restClient={delayedRestClient}
        title="Учет коммунальных услуг"
        locale="ru"
        messages={messages}
    >
        <Resource
            options={{ label: "Электроэнергия" }}
            name="electricity"
            list={ElectricityList}
            show={ElectricityShow}
        />
    </Admin>
);
