const { useEffect, useRef } = require("react");

const areEqual = (prevDeps, nextDeps) => {
    if (!prevDeps) return false;
    if (prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== nextDeps[i]) {
            return false;
        }
    }

    return true;
};

const useCustomMemo = (callback, dependency) => {
    // variable or state -> cached value
    const memoizeRef = useRef(null);
    // changes in deps
    if (
        !memoizeRef.current ||
        !areEqual(memoizeRef.current.dependency, dependency)
    ) {
        memoizeRef.current = {
            value: callback(),
            dependency: dependency
        };
    }
    // clean up (when component unmounts)
    useEffect(() => {
        return () => (memoizeRef.current = null);
    }, []);
    // return the memoize value
    return memoizeRef.current.value;
};

export default useCustomMemo;
