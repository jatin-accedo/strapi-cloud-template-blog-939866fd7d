import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAvailableOn extends Schema.Component {
  collectionName: 'components_shared_available_ons';
  info: {
    displayName: 'Available on';
  };
  attributes: {
    AvailableOn: Attribute.Enumeration<
      [
        'Android',
        'Android Phone',
        'Android Tablet',
        'AndroidTV',
        'ATV',
        'CTV',
        'iOS',
        'iPad',
        'Roku',
        'tvOS',
        'Web',
        'Xbox'
      ]
    >;
  };
}

export interface SharedItem extends Schema.Component {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'Item';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Template: Attribute.Component<'shared.template', true>;
    Action: Attribute.String;
    ActionData: Attribute.String;
  };
}

export interface SharedLogo extends Schema.Component {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
    icon: 'arrowUp';
  };
  attributes: {
    Logo: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Image';
    icon: 'crop';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
    AvailableOn: Attribute.Component<'shared.available-on', true>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTemplate extends Schema.Component {
  collectionName: 'components_shared_templates';
  info: {
    displayName: 'Template';
    description: '';
  };
  attributes: {
    template: Attribute.Enumeration<
      [
        'default',
        'epg',
        'player',
        'test',
        'elevate-my-content',
        'elevate-movie-detail',
        'marvel',
        'settings',
        'live',
        'channel',
        'elevate-modular-ui',
        'elevate-show-detail',
        'elevate-search',
        'elevate-profile',
        'elevate-sign-in',
        'elevate-epg',
        'elevate-program-detail',
        'elevate-category',
        'elevate-view-all',
        'elevate-player',
        'elevate-info'
      ]
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.available-on': SharedAvailableOn;
      'shared.item': SharedItem;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.template': SharedTemplate;
    }
  }
}
