module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    "no-empty-source": null,
    "alpha-value-notation": null,
    "color-function-notation": null,
    "no-invalid-position-at-import-rule": null,
    "property-no-vendor-prefix": null,
    "value-keyword-case": null,
    "declaration-empty-line-before": ["always", {
      except: ["first-nested"],
      ignore: ["after-comment", "after-declaration", "inside-single-line-block"]
    }],
    "function-url-quotes": null,
    "media-feature-range-notation": "prefix",
    "number-max-precision": 2,
    "rule-empty-line-before": ["always", {
      ignore: ["after-comment", "first-nested", "inside-block"]
    }],
    "selector-max-id": 0,
    "selector-max-universal": 1,
    "unit-no-unknown": [true, {"ignoreUnits": ["fr"]}],
    "selector-class-pattern": null,
    "scss/dollar-variable-pattern": null,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: false,
      },
      'declarations',
      {
        type: 'rule',
        selector: '&::before',
      },
      {
        type: 'rule',
        selector: '&::after',
      },
      'rules',
      {
        type: 'rule',
        selector: '&:link',
      },
      {
        type: 'rule',
        selector: '&:visited',
      },
      {
        type: 'rule',
        selector: '&:focus',
      },
      {
        type: 'rule',
        selector: '&:hover',
      },
      {
        type: 'rule',
        selector: '&:active',
      },
      {
        type: 'rule',
        selector: '&:disabled',
      },
      {
        type: 'rule',
        selector: '&:first-child',
      },
      {
        type: 'rule',
        selector: '&:last-child',
      },
      {
        type: 'rule',
        selector: '&:nth-child.+',
      },
      {
        type: 'rule',
        selector: '&\\[[^\\[\\]]+\\]',
      },
      {
        type: 'rule',
        selector: '&\\..+',
      },
      {
        type: 'rule',
        selector: '&--.+',
      },
      {
        type: 'rule',
        selector: '.* &',
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
      'at-rules',
    ],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      [
        'all',
        'print-color-adjust',
        'appearance',
        'counter-increment',
        'counter-reset',
        'content',
        'quotes',
        'position',
        'left',
        'right',
        'top',
        'bottom',
        'z-index',
        'display',
        'columns',
        'column-width',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-style',
        'column-rule-width',
        'column-rule-color',
        'column-span',
        'break-after',
        'break-before',
        'break-inside',
        'page-break-after',
        'page-break-before',
        'page-break-inside',
        'orphans',
        'widows',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        'place-content',
        'place-items',
        'place-self',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'justify-items',
        'justify-self',
        'order',
        'clear',
        'float',
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-auto-rows',
        'grid-column',
        'grid-column-end',
        'grid-column-gap',
        'grid-column-start',
        'grid-gap',
        'grid-row',
        'grid-row-end',
        'grid-row-gap',
        'grid-row-start',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'list-style',
        'list-style-type',
        'list-style-position',
        'list-style-image',
        'caption-side',
        'empty-cells',
        'table-layout',
        'vertical-align',
        'clip-path',
        'mask',
        'mask-clip',
        'mask-composite',
        'mask-image',
        'mask-mode',
        'mask-origin',
        'mask-position',
        'mask-position-x',
        'mask-position-y',
        'mask-repeat',
        'mask-repeat-x',
        'mask-repeat-y',
        'mask-size',
        'mask-type',
        'shape-image-threshold',
        'shape-margin',
        'shape-outside',
        'contain',
        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-anchor',
        'overflow-wrap',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-before',
        'margin-end',
        'margin-after',
        'margin-start',
        'margin-collapse',
        'margin-top-collapse',
        'margin-bottom-collapse',
        'margin-before-collapse',
        'margin-after-collapse',
        'outline',
        'outline-style',
        'outline-width',
        'outline-color',
        'outline-offset',
        'outline-radius',
        'outline-radius-topleft',
        'outline-radius-topright',
        'outline-radius-bottomright',
        'outline-radius-bottomleft',
        'border',
        'border-style',
        'border-width',
        'border-color',
        'border-top',
        'border-top-style',
        'border-top-width',
        'border-top-color',
        'border-right',
        'border-right-style',
        'border-right-width',
        'border-right-color',
        'border-bottom',
        'border-bottom-style',
        'border-bottom-width',
        'border-bottom-color',
        'border-left',
        'border-left-style',
        'border-left-width',
        'border-left-color',
        'border-before',
        'border-before-style',
        'border-before-width',
        'border-before-color',
        'border-end',
        'border-end-style',
        'border-end-width',
        'border-end-color',
        'border-after',
        'border-after-style',
        'border-after-width',
        'border-after-color',
        'border-start',
        'border-start-style',
        'border-start-width',
        'border-start-color',
        'border-collapse',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-spacing',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-before',
        'padding-end',
        'padding-after',
        'padding-start',
        'width',
        'height',
        'min-width',
        'min-height',
        'max-width',
        'max-height',
        'box-decoration-break',
        'box-shadow',
        'box-sizing',
        'src',
        'font',
        'font-family',
        'font-weight',
        'font-style',
        'font-display',
        'font-feature-settings',
        'font-kerning',
        'font-smoothing',
        'font-stretch',
        'font-synthesis',
        'font-variant',
        'font-variant-alternates',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-position',
        'font-size',
        'font-size-adjust',
        'unicode-bidi',
        'unicode-range',
        'line-break',
        'line-height',
        'letter-spacing',
        'word-break',
        'word-spacing',
        'word-wrap',
        'white-space',
        'hyphens',
        'tab-size',
        'text-align',
        'text-align-last',
        'text-combine-upright',
        'text-decoration',
        'text-decoration-style',
        'text-decoration-line',
        'text-decoration-color',
        'text-decoration-skip',
        'text-emphasis',
        'text-emphasis-style',
        'text-emphasis-color',
        'text-emphasis-position',
        'text-fill-color',
        'text-indent',
        'text-justify',
        'text-orientation',
        'text-overflow',
        'text-rendering',
        'text-security',
        'text-shadow',
        'text-size-adjust',
        'text-stroke',
        'text-stroke-width',
        'text-stroke-color',
        'text-transform',
        'text-underline-position',
        'direction',
        'writing-mode',
        'ruby-align',
        'ruby-position',
        'color',
        'caret-color',
        'tap-highlight-color',
        'd',
        'x',
        'y',
        'cx',
        'cy',
        'r',
        'rx',
        'ry',
        'fill',
        'fill-opacity',
        'fill-rule',
        'stroke',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
        'alignment-baseline',
        'baseline-shift',
        'dominant-baseline',
        'clip-rule',
        'color-interpolation',
        'color-interpolation-filters',
        'color-rendering',
        'flood-color',
        'flood-opacity',
        'lighting-color',
        'marker',
        'marker-end',
        'marker-mid',
        'marker-start',
        'paint-order',
        'shape-rendering',
        'stop-color',
        'stop-opacity',
        'text-anchor',
        'offset',
        'offset-position',
        'offset-path',
        'offset-distance',
        'offset-anchor',
        'offset-rotate',
        'background',
        'background-image',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-repeat',
        'background-repeat-x',
        'background-repeat-y',
        'background-origin',
        'background-clip',
        'background-attachment',
        'background-color',
        'background-blend-mode',
        'image-orientation',
        'image-rendering',
        'object-fit',
        'object-position',
        'opacity',
        'visibility',
        'filter',
        'isolation',
        'mix-blend-mode',
        'zoom',
        'backface-visibility',
        'perspective',
        'perspective-origin',
        'perspective-origin-x',
        'perspective-origin-y',
        'transform',
        'transform-box',
        'transform-origin',
        'transform-origin-x',
        'transform-origin-y',
        'transform-origin-z',
        'transform-style',
        'transition',
        'transition-property',
        'transition-duration',
        'transition-delay',
        'transition-timing-function',
        'animation',
        'animation-name',
        'animation-duration',
        'animation-delay',
        'animation-timing-function',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
        'will-change',
        'cursor',
        'pointer-events',
        'touch-action',
        'user-drag',
        'user-focus',
        'user-select',
        'user-zoom',
        'resize',
        'scroll-behavior',
        'scroll-snap-coordinate',
        'scroll-snap-destination',
        'scroll-snap-type',
        'scroll-snap-type-x',
        'scroll-snap-type-y',
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
