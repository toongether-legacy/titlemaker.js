const opentype = require("opentype.js");
const wrap = require("word-wrapper");

module.exports = function make(
  title,
  fontName = "GangwonEduPower",
  color = "white",
  alignLeft = false,
  callback
) {
  opentype.load(`./fonts/${fontName}.otf`, (err, font) => {
    function wrapText(text, width) {
      const wrappedText = wrap(text, { width: width }).split("\n");
      if (wrappedText.length > 3) return wrapText(text, width + 1);
      else return wrappedText;
    }
    const textArray = wrapText(title, 6);
    const maxWidth = font.getAdvanceWidth(
      textArray.reduce((a, b) => (a.length <= b.length ? b : a)),
      100
    );
    const result = textArray
      .map((item, index) => {
        const xPos = () => {
          if (alignLeft) return 0;
          else return (maxWidth - font.getAdvanceWidth(item, 100)) / 2;
        };
        const path = font.getPath(item, xPos(), 100 * (index + 1), 100);
        return path.toSVG();
      })
      .join("");
    const svg = [
      '<?xml version="1.0"?><svg',
      'xmlns="http://www.w3.org/2000/svg'`,
        'xmlns:xlink="http://www.w3.org/1999/xlink'`,
      `fill="${color}" width="${maxWidth}" height="${
        textArray.length * 110
      }"><g>${result}</g></svg>`,
    ].join("");
    return callback(err, svg);
  });
};