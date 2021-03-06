import { AbortSignalLike } from "@azure/abort-controller";

export interface PollOperationState<TResult> {
  started?: boolean;
  completed?: boolean;
  cancelled?: boolean;
  error?: Error;
  result?: TResult;
}

export interface PollOperationBase<TState, TResult> {
  state: TState;
  update(options?: {
    abortSignal?: AbortSignalLike;
    fireProgress?: (state: TState) => void;
  }): Promise<PollOperation<TState, TResult>>;
  cancel(options?: { abortSignal?: AbortSignal }): Promise<PollOperation<TState, TResult>>;
  toString(): string;
}

export type PollOperation<TState, TResult> = PollOperationBase<TState, TResult> & {
  [prop: string]: any;
};
