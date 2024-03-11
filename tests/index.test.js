const { generatePluginCss } = require('./helpers');
const attr = "lazy-accent";

describe('with tailwindcss v3', () => {
  it('returns nothing if colors option is not specified.', () => {
    return generatePluginCss().then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is empty string.', () => {
    return generatePluginCss({ colors: '' }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is empty array.', () => {
    return generatePluginCss({ colors: [] }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is array with not available colors.', () => {
    return generatePluginCss({ colors: ['maroon'] }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if root option is specified and colors option is not specified.', () => {
    return generatePluginCss({ root: 'sky' }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('correctly generates CSS custom properties.', () => {
    return generatePluginCss({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`--tw-ta-accent-500`);
    });
  });

  it('correctly generates customized CSS custom properties.', () => {
    return generatePluginCss({ colors: ['rose'], cssVarsPrefix: 'color' }).then(
      (css) => {
        expect(css).toContain(`--color-accent-500`);
      }
    );
  });

  it('correctly generates selected base style selectors.', () => {
    return generatePluginCss({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`[${attr}='rose']`);
      expect(css).not.toContain(`[${attr}='sky']`);
    });
  });

  it('correctly generates selected base style selectors with root.', () => {
    return generatePluginCss({ colors: ['sky', 'rose'], root: 'sky' }).then(
      (css) => {
        expect(css).toContain(`:root, [${attr}='sky']`);
        expect(css).not.toContain(`:root, [${attr}='rose']`);
      }
    );
  });

  it('correctly generates root color on the top of base styles.', () => {
    return generatePluginCss({ colors: ['sky', 'rose'], root: 'rose' }).then(
      (css) => {
        expect(css.indexOf(`:root, [${attr}='rose']`) === 0).toBeTruthy();
      }
    );
  });

  it('correctly generates selected base style selectors.', () => {
    return generatePluginCss({ colors: ['sky', 'rose'], root: 'rose', attr }).then(
      (css) => {
        expect(css).toContain(`[${attr}='rose']`);
      }
    );
  });
});
