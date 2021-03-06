import { lazyForPaint } from 'react-loosely-lazy';
const ChainedNamedImport = lazyForPaint(
  () =>
    import('react')
      .then(({ Component }) => Component)
      .then(mod => {
        return mod;
      })
      .then(mod => mod),
  {
    moduleId: './node_modules/react/index.js',
  }
);
