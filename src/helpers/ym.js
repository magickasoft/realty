import withYM from 'next-ym';

export const YA_METRIKA_ID = process.env.yaMetrikaId;
export const env = process.env.NODE_ENV;

export const reachGoal = name => {
  if (window[`yaCounter${YA_METRIKA_ID}`] && env !== 'development') {
    window[`yaCounter${YA_METRIKA_ID}`].reachGoal(name);
  }
};

export {withYM};
