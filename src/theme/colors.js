import Color from 'color';

export const colors = {
  White: '#ffffff',
  Black: '#000000',
  Green200: '#00C0A9',
  Red: '#EA2B27',
};

export const formatterColor = {
  White: Color(colors.White).alpha(0.4).toString(),
};
