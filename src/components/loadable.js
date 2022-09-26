import Loadable from "@loadable/component";

const LoadableP5 = Loadable(() => import('react-p5'));
console.log(LoadableP5);

export default LoadableP5;