export default () => {
  if (process.env.NODE_ENV === 'development') {
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
    body.append(script);
  } 
};
