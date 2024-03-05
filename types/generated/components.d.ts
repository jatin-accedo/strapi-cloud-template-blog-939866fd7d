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
        'hero-vertical',
        'hero-portrait',
        'promo',
        'carousel-portrait',
        'carousel-wide',
        'carousel-banner',
        'carousel-link',
        'grid-portrait',
        'grid-wide',
        'grid-banner',
        'grid-portrait-asym',
        'grid-wide-asym',
        'branding',
        'hero-banner',
        'grid-wide-loadmore',
        'grid-portrait-lazyload',
        'carousel-progress-bar',
        'grid-portrait-loadmore',
        'channel-banner',
        'carousel-wide-3',
        'carousel-wide-4',
        'carousel-wide-5',
        'carousel-wide-6',
        'carousel-wide-2',
        'carousel-circle',
        'elevate-filter-sort',
        'elevate-continue-watching',
        'elevate-categories',
        'elevate-category-carousel',
        'carousel-landscape',
        'featured-carousel-portrait',
        'elevate-hero-banner',
        'elevate-grid-horizontal-portrait',
        'elevate-grid-horizontal-wide',
        'elevate-grid-vertical-portrait',
        'elevate-grid-vertical-wide',
        'elevate-carousel-portrait',
        'elevate-carousel-wide',
        'elevate-carousel-view-all-portrait',
        'elevate-carousel-categories',
        'elevate-horizontal-divider',
        'elevate-carousel-category-portrait',
        'elevate-carousel-category-wide'
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
