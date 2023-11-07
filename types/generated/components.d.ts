import type { Schema, Attribute } from '@strapi/strapi';

export interface DataDataAddress extends Schema.Component {
  collectionName: 'components_data_data_addresses';
  info: {
    displayName: 'dataAddress';
  };
  attributes: {
    country: Attribute.String;
    region: Attribute.String;
    postalCode: Attribute.String;
    city: Attribute.String;
    address: Attribute.String;
  };
}

export interface DataDataUser extends Schema.Component {
  collectionName: 'components_ui_data_users';
  info: {
    displayName: 'dataUser';
    description: '';
  };
  attributes: {
    firstName: Attribute.String;
    lastName: Attribute.String;
    patronymic: Attribute.String;
    phone: Attribute.String;
  };
}

export interface UiInputList extends Schema.Component {
  collectionName: 'components_ui_input_lists';
  info: {
    displayName: 'InputList';
    description: '';
  };
  attributes: {
    input: Attribute.Component<'ui.input', true> & Attribute.Required;
  };
}

export interface UiInput extends Schema.Component {
  collectionName: 'components_ui_inputs';
  info: {
    displayName: 'input';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    nameInput: Attribute.String & Attribute.Required;
    type: Attribute.String & Attribute.Required;
    idInput: Attribute.String & Attribute.Required;
    error: Attribute.String & Attribute.Required;
    value: Attribute.String;
  };
}

export interface UiLinkList extends Schema.Component {
  collectionName: 'components_ui_link_lists';
  info: {
    displayName: 'linkList';
  };
  attributes: {
    link: Attribute.Component<'ui.link', true> & Attribute.Required;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.data-address': DataDataAddress;
      'data.data-user': DataDataUser;
      'ui.input-list': UiInputList;
      'ui.input': UiInput;
      'ui.link-list': UiLinkList;
      'ui.link': UiLink;
    }
  }
}
