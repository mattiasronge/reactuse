import { DependencyList, useEffect } from 'react';
import useAsyncFn, { FnReturningPromise } from './useAsyncFn';

export { AsyncState, AsyncFnReturn } from './useAsyncFn';

export default function useAsync<T extends FnReturningPromise>(fn: T, deps: DependencyList = []) {
  const [state, callback] = useAsyncFn(fn, deps, {
    loading: true,
  });

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
}
