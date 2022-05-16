import withYM from 'next-ym';

export const YA_METRIKA_ID = process.env.yaMetrikaId;

export const reachGoal = name => {
  if (window[`yaCounter${YA_METRIKA_ID}`]) {
    window[`yaCounter${YA_METRIKA_ID}`].reachGoal(name);
  }
};

export {withYM};
