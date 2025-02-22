import { Component, InfernoNode } from 'inferno';
import { AnimationClass, componentWillMove } from './animations';

type AnimationProp = {
  animation?: string | AnimationClass;
  children?: InfernoNode;
};

export abstract class AnimatedMoveComponent<P = {}, S = {}> extends Component<AnimationProp & P, S> {
  public componentWillMove(parentVNode, parent: HTMLElement | SVGElement, dom: HTMLElement | SVGElement) {
    componentWillMove(parentVNode, parent, dom, this.props);
  }
}
