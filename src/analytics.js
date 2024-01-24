import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-K8YXEE4C9R');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
