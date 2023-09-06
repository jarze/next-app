const parseColor = (hexStr: string) => {
  return hexStr.length === 4
    ? hexStr
        .substring(1)
        .split('')
        .map(function (s) {
          return 0x11 * parseInt(s, 16);
        })
    : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(
        function (s) {
          return parseInt(s, 16);
        },
      );
};

const pad = function (s: string) {
  return s.length === 1 ? '0' + s : s;
};

export const getGradientColors = function (
  start: string,
  end: string,
  steps: number,
  gamma: number,
) {
  let i,
    j,
    ms,
    me,
    output = [],
    so = [];
  gamma = gamma || 1;
  let normalize = function (channel: number) {
    return Math.pow(channel / 255, gamma);
  };
  const starts = parseColor(start).map(normalize);
  const ends = parseColor(end).map(normalize);
  for (i = 0; i < steps; i++) {
    ms = i / (steps - 1);
    me = 1 - ms;
    for (j = 0; j < 3; j++) {
      so[j] = pad(
        Math.round(
          Math.pow(starts[j] * me + ends[j] * ms, 1 / gamma) * 255,
        ).toString(16),
      );
    }
    output.push('#' + so.join(''));
  }
  return output;
};
