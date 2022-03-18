const useDidMountEffect = (func, deps) => {
  const didMountRef = useRef(false)
  
  useEffect(() => {
    if(didMount.current) {
      return func()
    }

    didMountRef.current = true
  }, deps)
}
