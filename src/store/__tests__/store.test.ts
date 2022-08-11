import Store from "../index";

test("Store state updates on dispatch", () => {
  function reducer(state: string[], action: any) {
    if (action.type === "append") {
      state = [...state, action.value];
    }
    return state;
  }
  const store = new Store(reducer, [] as string[]);
  store.dispatch({ type: "append", value: "hello" });
  expect(store.getState()).toEqual(["hello"]);
});

test("Store should notify subscribed observers", () => {
  const observer = jest.fn();
  const observerB = jest.fn();
  const store = new Store((state, action) => state, {});
  store.subscribe(observer);
  store.subscribe(observerB);
  store.dispatch({ type: "blah" });
  expect(observer).toHaveBeenCalledTimes(1);
  expect(observerB).toHaveBeenCalledTimes(1);
});

test("Store should unsubscribe observers", () => {
  const observer = jest.fn();
  const store = new Store((state, action) => state, {});
  const unsubscribe = store.subscribe(observer);
  unsubscribe();
  store.dispatch({ type: "blah" });
  expect(observer).not.toHaveBeenCalled();
});

test("Dispatch throws if called from reducer", () => {
  const store = new Store((state, action) => {
    store.dispatch({ type: "blah" });
    return state;
  }, {});
  expect(() => {
    store.dispatch({ type: "blah" });
  }).toThrowError();
});
