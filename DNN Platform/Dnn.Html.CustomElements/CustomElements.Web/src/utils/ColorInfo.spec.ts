import { ColorInfo } from './ColorInfo';

describe('Hue changes should not affect saturation and lightness', () => {
  const color = new ColorInfo();
  color.saturation = 50;
  color.lightness = 50;
  
  it.each([[-1], [0], [60], [120], [180], [270], [300], [359], [360], [361]])
  ('Changes the hue only', (hue: number) => {
    color.hue = hue;
    if (hue < 0) {
      expect(color.hue).toBe(0);
    } else if (hue > 359) { 
      expect (color.hue).toBe(359); 
    } else {
      expect (color.hue).toBe(hue);
    }
    expect (color.saturation).toBe(50);
    expect (color.lightness).toBe(50);
  });
});

describe('Saturation changes should not affect hue and lightness', () => {
  const color = new ColorInfo();
  color.hue = 180;
  color.lightness = 50;

  it.each([[-1], [0], [25], [50], [75], [100], [101]])
  ('changes the saturation only', (saturation: number) => {
    color.saturation = saturation;
    if (saturation < 0) {
      expect(color.saturation).toBe(0);
    } else if (saturation > 100) {
      expect(color.saturation).toBe(100);
    } else {
      expect(color.saturation).toBe(saturation);
    }
    expect (color.hue).toBe(180);
    expect (color.lightness).toBe(50);
  });
});

describe('Lightness changes should not affect hue and saturation', () => {
  const color = new ColorInfo();
  color.hue = 180;
  color.saturation = 50;

  it.each([[-1], [0], [25], [50], [75], [100], [101]])
  ('changes the lightness only', (lightness: number) => {
    color.lightness = lightness;
    if (lightness < 0) {
      expect(color.lightness).toBe(0);
    } else if (lightness > 100) {
      expect(color.lightness).toBe(100);
    } else {
      expect(color.lightness).toBe(lightness);
    }
    expect (color.hue).toBe(180);
    expect (color.saturation).toBe(50);
  });
});

describe('HSL changes rgb channels properly', () => {
  const color = new ColorInfo();

  it.each([
    [-1, 0, 0, 0, 0, 0],
    [36, 0, 100, 255, 255, 255],
    [72, 100, 100, 255, 255, 255],
    [108, 100, 0, 0, 0, 0],
    [144, 0, 0, 0, 0, 0, 0],
    [180, 25, 75, 175, 207, 207],
    [216, 75, 75, 143, 182, 239],
    [252, 75, 25, 35, 16, 112],
    [288, 25, 25, 73, 48, 80],
    [324, 50, 50, 191, 64, 140],
    [336, 100, 50, 255, 0, 102],
    [0, 100, 50, 255, 0, 0],
    [60, 100, 50, 255, 255, 0],
    [120, 100, 50, 0, 255, 0 ],
    [180, 100, 50, 0, 255, 255],
    [240, 100, 50, 0, 0, 255],
    [300, 100, 50, 255, 0, 255],
    [360, 100, 50, 255, 0, 0]
  ])
  ('returns proper rgb values when given various hsl values', (hue: number, saturation: number, lightness: number, red: number, green: number, blue: number) => {
    let setup = () => {
      return new Promise( (resolve) => {
        color.hue = hue;
        color.saturation = saturation;
        color.lightness = lightness;
        resolve();
      })
    }
    setup().then( () => {
      expect(color.red).toBe(red);
      expect(color.green).toBe(green);
      expect(color.blue).toBe(blue);
    });
  });
});

describe('Test red changes', () => {
  it.each([
    [0, 0, 0, 0],
    [64, 0, 100, 13],
    [128, 0, 100, 25],
    [192, 0, 100, 38],
    [255, 0, 100, 50]
  ])
  ('return proper hsl values for red scale', (red: number, hue: number, saturation: number, lightness: number) => {
    const color = new ColorInfo();
    color.red = red;
    expect(Math.round(color.hue)).toBe(hue);
    expect(Math.round(color.saturation)).toBe(saturation);
    expect(Math.round(color.lightness)).toBe(lightness);
  });
});

describe('Test green changes', () => {
  it.each([
    [0, 0, 0, 0],
    [64, 120, 100, 13],
    [128, 120, 100, 25],
    [192, 120, 100, 38],
    [255, 120, 100, 50]
  ])
  ('return proper hsl values for green scale', (green: number, hue: number, saturation: number, lightness: number) => {
    const color = new ColorInfo();
    color.green = green;
    expect(Math.round(color.hue)).toBe(hue);
    expect(Math.round(color.saturation)).toBe(saturation);
    expect(Math.round(color.lightness)).toBe(lightness);
  });
});

describe('Test blue changes', () => {
  it.each([
    [0, 0, 0, 0],
    [64, 240, 100, 13],
    [128, 240, 100, 25],
    [192, 240, 100, 38],
    [255, 240, 100, 50]
  ])
  ('return proper hsl values for blue scale', (blue: number, hue: number, saturation: number, lightness: number) => {
    const color = new ColorInfo();
    color.blue = blue;
    expect(Math.round(color.hue)).toBe(hue);
    expect(Math.round(color.saturation)).toBe(saturation);
    expect(Math.round(color.lightness)).toBe(lightness);
  });
});

describe('Test yellow changes', () => {
  it.each([
    [0, 0, 0, 0],
    [64, 60, 100, 13],
    [128, 60, 100, 25],
    [192, 60, 100, 38],
    [255, 60, 100, 50]
  ])
  ('return proper hsl values for yellow scale', (value: number, hue: number, saturation: number, lightness: number) => {
    const color = new ColorInfo();
    color.red = value;
    color.green = value;
    expect(Math.round(color.hue)).toBe(hue);
    expect(Math.round(color.saturation)).toBe(saturation);
    expect(Math.round(color.lightness)).toBe(lightness);
  });  
});

describe('Test cyan changes', () => {
  it.each([
    [0, 0, 0, 0],
    [64, 180, 100, 13],
    [128, 180, 100, 25],
    [192, 180, 100, 38],
    [255, 180, 100, 50]
  ])
  ('return proper hsl values for cyan scale', (value: number, hue: number, saturation: number, lightness: number) => {
    const color = new ColorInfo();
    color.blue = value;
    color.green = value;
    expect(Math.round(color.hue)).toBe(hue);
    expect(Math.round(color.saturation)).toBe(saturation);
    expect(Math.round(color.lightness)).toBe(lightness);
  });
});

describe('Test magenta changes', () => {
  it.each([
    [0, 0, 0, 0],
    [64, 300, 100, 13],
    [128, 300, 100, 25],
    [192, 300, 100, 38],
    [255, 300, 100, 50]
  ])
  ('return proper hsl values for magenta scale', (value: number, hue: number, saturation: number, lightness: number) => {
    const color = new ColorInfo();
    color.blue = value;
    color.red = value;
    expect(Math.round(color.hue)).toBe(hue);
    expect(Math.round(color.saturation)).toBe(saturation);
    expect(Math.round(color.lightness)).toBe(lightness);
  });
});

describe('Back and forth color tests', () => {
  it.each([
    [0, 0, 0, 0, 0, 0],
    [177, 177, 177, 0, 0, 69],
    [195, 157, 167, 344, 24, 69],
    [234, 167, 145, 15, 68, 74],
    [255, 228, 128, 47, 100, 75],
    [139, 139, 139, 0, 0, 55],
    [185, 110, 167, 314, 35, 58],
    [230, 188, 53, 46, 78, 55.5],
    [201, 234, 1, 68, 99, 46],
    [24, 190, 1, 113, 99, 38],
    [1, 128, 30, 134, 98, 25],
    [27, 115, 93, 165, 62, 28],
    [47, 74, 85, 197, 29, 26],
    [25, 25, 25, 0, 0, 10],
    [255, 255, 255, 0, 0, 100]
  ])
  ('Sets rgb, converts to hsl, then sets hsl and converts back to correct rbg values', (r, g, b, h, s, l) => {
    const color = new ColorInfo();

    const setupRGB = () => {
      return new Promise<ColorInfo>( (resolve) => {
        color.red = r; color.green = g; color.blue = b;
        resolve(color);
      });
    };

    setupRGB().then( (result) => {
      expect(Math.round(result.hue)).toBe(h);
      expect(Math.round(result.saturation)).toBe(s);
      expect(Math.round(result.lightness)).toBe(l);
    })

    const setupHSL = () => {
      return new Promise<ColorInfo>( (resolve) => {
        color.hue = h; color.saturation = h; color.lightness = l;
        resolve(color);
      })
    };

    setupHSL().then( (result) => {
      expect(result.red).toBe(r);
      expect(result.green).toBe(g);
      expect(result.blue).toBe(b);
    });

  });
});

it.each([
  [61, 73, 202, 'FFFFFF'],
  [101, 151, 68, 'FFFFFF'],
  [28, 27, 235, 'FFFFFF'],
  [135, 61, 61, 'FFFFFF'],
  [93, 14, 189, 'FFFFFF'],
  [192, 7, 117, 'FFFFFF'],
  [192, 164, 176, '000000'],
  [122, 173, 15, '000000'],
  [71, 146, 45, 'FFFFFF'],
  [229, 108, 179, '000000'],
  [200, 230, 191, '000000'],
  [32, 147, 237, 'FFFFFF'],
  [75, 171, 169, '000000'],
  [24, 241, 59, '000000']
])('returns proper contrast color', (r: number, g: number, b: number, contrast: string) => {
  const setup = () => {
    return new Promise<ColorInfo>( (resolve) => {
      const color = new ColorInfo();
      color.red = r; color.green = g; color.blue = b;
      resolve(color);
    });
  }

  setup().then( (color) => {
    expect(color.contrastColor).toBe(contrast);
  })
})