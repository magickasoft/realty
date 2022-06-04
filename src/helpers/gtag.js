export const GA_MEASUREMENT_ID = process.env.gaMeasurementId;
export const env = process.env.NODE_ENV;

export const pageview = url => {
  if (window.gtag && env !== 'development') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({action, category, label, value}) => {
  if (window.gtag && env !== 'development') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
