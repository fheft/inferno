import { Component, createComponentVNode, InfernoNode, VNode } from 'inferno';
import { VNodeFlags } from 'inferno-vnode-flags';
import { createHashHistory } from 'history';
import { Router } from './Router';
import { warning } from './utils';

export interface IHashRouterProps {
  children: InfernoNode;
}

export class HashRouter extends Component<IHashRouterProps, any> {
  public history;

  constructor(props?: any, context?: any) {
    super(props, context);
    this.history = createHashHistory();
  }

  public render(): VNode {
    return createComponentVNode(VNodeFlags.ComponentClass, Router, {
      children: this.props.children,
      history: this.history
    });
  }
}

if (process.env.NODE_ENV !== 'production') {
  HashRouter.prototype.componentWillMount = function () {
    warning(
      !this.props.history,
      '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.'
    );
  };
}
