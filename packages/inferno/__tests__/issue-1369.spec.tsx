import { Component, render } from 'inferno';

describe('static tree as child nodes', () => {
  let container;

  beforeEach(function () {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function () {
    render(null, container);
    container.innerHTML = '';
    document.body.removeChild(container);
  });

  it('Should patch whole tree even when static - Github #1369', () => {
    let renderCounter = 0;

    class Form extends Component {
      public handleClick = () => {
        this.forceUpdate();
      };

      public static childContextTypes = {};

      public getChildContext() {
        return {};
      }

      public render() {
        const { children, ...restProps } = this.props;
        return (
          <div {...restProps}>
            <button onClick={this.handleClick}>test</button>
            {children}
          </div>
        );
      }
    }

    class Test extends Component {
      public render() {
        renderCounter++;

        return <div>test</div>;
      }
    }

    class App extends Component {
      public render() {
        return (
          <Form>
            <div>
              <div>
                <Test />
              </div>
            </div>
          </Form>
        );
      }
    }

    render(<App />, container);

    expect(renderCounter).toBe(1);

    const btn = container.querySelector('button');

    btn.click();

    expect(renderCounter).toBe(2);

    btn.click();

    expect(renderCounter).toBe(3);

    btn.click();

    expect(renderCounter).toBe(4);

    btn.click();

    expect(renderCounter).toBe(5);
  });

  it('Should patch whole tree even when static - Github #1369 - 2', () => {
    let renderCounter = 0;

    class Form extends Component {
      public handleClick = () => {
        this.forceUpdate();
      };

      public static childContextTypes = {};

      public getChildContext() {
        return {};
      }

      public render() {
        const { children } = this.props;
        return (
          <div>
            <button onClick={this.handleClick}>test</button>
            {children}
          </div>
        );
      }
    }

    let constuctCounter = 0;

    interface TestState {
      text: string;
    }

    class Test extends Component<unknown, TestState> {
      public state: TestState;

      constructor(props) {
        super(props);

        this.state = {
          text: 'bar'
        };

        constuctCounter++;
      }

      public render() {
        renderCounter++;

        return (
          <div id={`id-${renderCounter}`} onClick={() => this.setState({ text: 'foo' })} $HasTextChildren>
            {this.state.text}
          </div>
        );
      }
    }

    class App extends Component {
      public render() {
        const hoistedDiv = (
          <div>
            <Test />
          </div>
        );

        return (
          <Form>
            <div>
              <div>{hoistedDiv}</div>
              <div>{hoistedDiv}</div>
              <div>{hoistedDiv}</div>
            </div>
          </Form>
        );
      }
    }

    render(<App />, container);

    expect(renderCounter).toBe(3);
    expect(constuctCounter).toBe(3);

    const expectedHTML = `<div><button>test</button><div><div><div><div id="id-1">bar</div></div></div><div><div><div id="id-2">bar</div></div></div><div><div><div id="id-3">bar</div></div></div></div></div>`;

    expect(container.innerHTML).toBe(expectedHTML);

    const btn = container.querySelector('button');

    btn.click();

    expect(renderCounter).toBe(6);
    expect(constuctCounter).toBe(3);

    expect(container.innerHTML).toBe(
      `<div><button>test</button><div><div><div><div id="id-4">bar</div></div></div><div><div><div id="id-5">bar</div></div></div><div><div><div id="id-6">bar</div></div></div></div></div>`
    );

    container.querySelector('#id-4').click();

    expect(renderCounter).toBe(7);
    expect(constuctCounter).toBe(3);

    expect(container.innerHTML).toBe(
      `<div><button>test</button><div><div><div><div id="id-7">foo</div></div></div><div><div><div id="id-5">bar</div></div></div><div><div><div id="id-6">bar</div></div></div></div></div>`
    );

    container.querySelector('#id-5').click();

    expect(renderCounter).toBe(8);
    expect(constuctCounter).toBe(3);

    expect(container.innerHTML).toBe(
      `<div><button>test</button><div><div><div><div id="id-7">foo</div></div></div><div><div><div id="id-8">foo</div></div></div><div><div><div id="id-6">bar</div></div></div></div></div>`
    );

    container.querySelector('#id-6').click();

    expect(renderCounter).toBe(9);
    expect(constuctCounter).toBe(3);

    expect(container.innerHTML).toBe(
      `<div><button>test</button><div><div><div><div id="id-7">foo</div></div></div><div><div><div id="id-8">foo</div></div></div><div><div><div id="id-9">foo</div></div></div></div></div>`
    );

    render(null, container);

    expect(container.innerHTML).toBe('');
  });
});
