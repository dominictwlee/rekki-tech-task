interface Action<TType = any> {
  type: TType;
  [props: string]: any;
}

type Reducer<TState = any, TAction = Action> = (
  state: TState,
  action: TAction
) => TState;

type Unsubscribe = () => void;

type ObserverCallback = () => void;

export default class Store<
  TState,
  TAction extends Action,
  TReducer extends Reducer<TState, TAction>
> {
  private observers: ObserverCallback[] = [];
  private reducer: TReducer;
  private state: TState;
  private isDispatching = false;

  constructor(reducer: TReducer, initialState: TState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  getState(): TState {
    return this.state;
  }

  dispatch(action: TAction): void {
    if (this.isDispatching) {
      throw new Error("Actions cannot be dispatched from reducer");
    }
    this.isDispatching = true;
    this.reducer(this.state, action);
    this.isDispatching = false;
    for (const observer of this.observers) {
      observer();
    }
  }

  subscribe(observer: ObserverCallback): Unsubscribe {
    this.observers.push(observer);

    return this.unsubscribe.bind(this, observer);
  }

  unsubscribe(observer: ObserverCallback) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
}
