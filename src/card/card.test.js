const { JSDOM } = require('jsdom');

describe('Bulma Card Web Components Page', () => {
  let htmlString = '';
  /**@type {Window} win */
  let win;
  /**@type {Document} doc */
  let doc;

  beforeAll(async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:9000');
    htmlString = await page.content();
    win = new JSDOM(htmlString).window;
    doc = win.document;
  });

  const getStyles = element => {
    return win.getComputedStyle(element);
  };

  const getComponent = id => {
    return doc.getElementById(id);
  };

  const isEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  };

  const compareStyles = (id, expectedStyles) => {
    try {
      const component = getComponent(id);
      const styles = getStyles(component);
      const properties = Object.keys(expectedStyles);
      const currentStyles = properties.reduce((output, key) => {
        output[key] = styles[key];
        return output;
      }, {});
      const stylesAreEqual = isEqual(expectedStyles, currentStyles);

      if (!stylesAreEqual) {
        console.log({ currentStyles })
      }
      return stylesAreEqual;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  it('has a card component', () => {
    const expectedStyles = {
      'background-color': 'rgb(255, 255, 255)',
      'box-shadow': '0 2px 3px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1)',
      color: '',
      display: 'block',
      'max-width': '100%',
      position: 'relative'
    };
    const stylesAreEqual = compareStyles('card', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card content component', () => {
    const expectedStyles = {
      'background-color': 'transparent',
      display: 'block',
      padding: '1.5rem'
    };
    const stylesAreEqual = compareStyles('cardContent', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card footer item component', () => {
    const expectedStyles = {
      'align-items': 'center',
      display: 'flex',
      'flex-basis': '0px',
      'flex-grow': '1',
      'flex-shrink': '0',
      'justify-content': 'center',
      padding: '0.75rem',
    };
    const stylesAreEqual = compareStyles('cardFooterItem', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card footer link component', () => {
    const expectedStyles = {
      'align-items': 'center',
      color: 'rgb(50, 115, 220)',
      cursor: 'pointer',
      display: 'flex',
      'flex-basis': '0px',
      'flex-grow': '1',
      'flex-shrink': '0',
      'justify-content': 'center',
      padding: '0.75rem',
      'text-decoration': 'none',
    };
    const stylesAreEqual = compareStyles('cardFooterLink', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card footer component', () => {
    const expectedStyles = {
      'background-color': 'transparent',
      'border-top': '1px solid hsl(0,0%,86%)',
      'align-items': 'stretch',
      display: 'flex'
    };
    const stylesAreEqual = compareStyles('cardFooter', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card header icon link component', () => {
    const expectedStyles = {
      'align-items': 'center',
      color: 'rgb(50, 115, 220)',
      cursor: 'pointer',
      display: 'flex',
      'justify-content': 'center',
      padding: '0.75rem'
    };
    const stylesAreEqual = compareStyles('cardHeaderIconLink', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card header icon component', () => {
    const expectedStyles = {
      'align-items': 'center',
      color: 'rgb(50, 115, 220)',
      display: 'flex',
      'justify-content': 'center',
      padding: '0.75rem'
    };
    const stylesAreEqual = compareStyles('cardHeaderIcon', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card header component', () => {
    const expectedStyles = {
      'background-color': 'transparent',
      'align-items': 'stretch',
      'box-shadow': '0 1px 2px rgba(10,10,10,0.1)',
      display: 'flex'
    };
    const stylesAreEqual = compareStyles('cardHeader', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

  it('has a card image component', () => {
    const expectedStyles = {
      display: 'block',
      position: 'relative'
    };
    const stylesAreEqual = compareStyles('cardImage', expectedStyles);
    expect(stylesAreEqual).toEqual(true);
  });

});
