/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Notice from "../../../partials/content/Notice";
import CodeExample from "../../../partials/content/CodeExample";
import {
  Button,
  Dropdown,
  FormControl,
  ButtonGroup,
  DropdownButton,
  SplitButton,
  ButtonToolbar
} from "react-bootstrap";


const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <a href="" onClick={onClick}>
      {children}
    </a>
));

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: "" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const {
      children,
      style,
      className,
      "aria-labelledby": labeledBy
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
}

export default class DropdownsExamplesPage extends React.Component {
  render() {
    return (
      <>
        <Notice icon="flaticon-warning kt-font-primary">
          <p>
            Toggle contextual overlays for displaying lists of links and more
            with the Bootstrap dropdown plugin
          </p>
          <p>
            For more info please check the components's official{" "}
            <a
              target="_blank"
              className="kt-link"
              rel="noopener noreferrer"
              href="https://react-bootstrap.github.io/components/dropdowns/"
            >
              demos & documentation
            </a>
          </p>
        </Notice>

        <div className="row">
          <div className="col-md-6">
            <CodeExample
              jsCode={jsCode1}
              beforeCodeTitle="Single button dropdowns"
            >
              <div className="kt-section">
                <span className="kt-section__sub">
                  The basic Dropdown is composed of a wrapping Dropdown and
                  inner <code>&lt;DropdownMenu&gt;</code>, and{" "}
                  <code>&lt;DropdownToggle&gt;</code>. By default the{" "}
                  <code>&lt;DropdownToggle&gt;</code> will render a Button
                  component and accepts all the same props.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </CodeExample>
          </div>
          <div className="col-md-6">
            <CodeExample
              jsCode={jsCode2}
              beforeCodeTitle="Split button dropdowns"
            >
              <div className="kt-section">
                <span className="kt-section__sub">
                  Similarly, You create a split dropdown by combining the
                  Dropdown components with another Button and a ButtonGroup.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <Dropdown as={ButtonGroup}>
                  <Button variant="success">Split Button</Button>

                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </CodeExample>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <CodeExample jsCode={jsCode3} beforeCodeTitle="Sizing">
              <div className="kt-section">
                <span className="kt-section__sub">
                  Dropdowns work with buttons of all sizes.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <>
                  <ButtonToolbar>
                    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                      <div key={idx} className="pr-1">
                        <DropdownType
                          size="lg"
                          title="Drop small"
                          id={`dropdown-button-drop-${idx}`}
                          key={idx}
                        >
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </DropdownType>
                      </div>
                    ))}
                  </ButtonToolbar>
                  <br />
                  <ButtonToolbar>
                    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                      <div key={idx} className="pr-1">
                        <DropdownType
                          size="sm"
                          variant="secondary"
                          title="Drop small"
                          id={`dropdown-button-drop-${idx}`}
                          key={idx}
                        >
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </DropdownType>
                      </div>
                    ))}
                  </ButtonToolbar>
                </>
              </div>
            </CodeExample>
          </div>
          <div className="col-md-6">
            <CodeExample jsCode={jsCode4} beforeCodeTitle="Drop directions">
              <div className="kt-section">
                <span className="kt-section__sub">
                  Trigger dropdown menus above, below, left, or to the right of
                  their toggle elements, with the <code>drop</code> prop.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <>
                  <ButtonToolbar>
                    {["up", "down", "left", "right"].map(direction => (
                      <div className="pr-1 pb-1" key={direction}>
                        <DropdownButton
                          drop={direction}
                          variant="secondary"
                          title={` Drop ${direction} `}
                          id={`dropdown-button-drop-${direction}`}
                          key={direction}
                        >
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    ))}
                  </ButtonToolbar>

                  <ButtonToolbar>
                    {["up", "down", "left", "right"].map(direction => (
                      <div className="pr-1" key={direction}>
                        <SplitButton
                          drop={direction}
                          variant="secondary"
                          title={`Drop ${direction}`}
                          id={`dropdown-button-drop-${direction}`}
                          key={direction}
                        >
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </SplitButton>
                      </div>
                    ))}
                  </ButtonToolbar>
                </>
              </div>
            </CodeExample>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <CodeExample jsCode={jsCode5} beforeCodeTitle="Dropdown items">
              <div className="kt-section">
                <span className="kt-section__sub">
                  Historically dropdown menu contents had to be links, but
                  that’s no longer the case with v4. Now you can optionally use{" "}
                  <code>&lt;button&gt;</code> elements in your dropdowns instead
                  of just <code>&lt;a&gt;</code>s.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <DropdownButton
                  id="dropdown-item-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
              </div>
            </CodeExample>
          </div>
          <div className="col-md-6">
            <CodeExample jsCode={jsCode6} beforeCodeTitle="Menu alignment">
              <div className="kt-section">
                <span className="kt-section__sub">
                  By default, a dropdown menu is aligned to the left, but you
                  can switch it by passing the <code>alignRight</code> prop.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <DropdownButton
                  alignRight
                  title="Dropdown right"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </div>
            </CodeExample>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <CodeExample jsCode={jsCode9} beforeCodeTitle="Customization">
              <div className="kt-section">
                <span className="kt-section__sub">
                  If the default handling of the dropdown menu and toggle
                  components aren't to your liking, you can customize them, by
                  using the more basic <code>&lt;Dropdown&gt;</code> Component
                  to explicitly specify the Toggle and Menu components
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <ButtonToolbar>
                  <div className="pr-1">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-custom-1">
                        Pow! Zoom!
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="pr-1">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="info">mix it up style-wise</Button>
                      <Dropdown.Toggle
                        split
                        variant="success"
                        id="dropdown-custom-2"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </ButtonToolbar>
              </div>
            </CodeExample>
          </div>
          <div className="col-md-6">
            <CodeExample
              jsCode={jsCode10}
              beforeCodeTitle="Custom Dropdown Components"
            >
              <div className="kt-section">
                <span className="kt-section__sub">
                  For those that want to customize everything, you can forgo the
                  included Toggle and Menu components, and create your own. By
                  providing custom components to the <code>as</code> prop, you
                  can control how each component behaves. Custom toggle and menu
                  components must be able to accept refs.
                </span>
                <div className="kt-separator kt-separator--dashed" />
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                  >
                    Custom toggle
                  </Dropdown.Toggle>

                  <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Orange
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </CodeExample>
          </div>
        </div>
      </>
    );
  }
}

const jsCode1 = `
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
`;
const jsCode2 = `
<Dropdown as={ButtonGroup}>
  <Button variant="success">Split Button</Button>

  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
`;
const jsCode3 = `
<>
  <ButtonToolbar>
    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
      <DropdownType
        size="lg"
        title="Drop small"
        id={\`dropdown-button-drop-\${idx}\`}
        key={idx}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownType>
    ))}
  </ButtonToolbar>
  <ButtonToolbar>
    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
      <DropdownType
        size="sm"
        variant="secondary"
        title="Drop small"
        id={\`dropdown-button-drop-\${idx}\`}
        key={idx}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownType>
    ))}
  </ButtonToolbar>
</>
`;
const jsCode4 = `
<>
  <ButtonToolbar>
    {['up', 'down', 'left', 'right'].map(direction => (
      <DropdownButton
        drop={direction}
        variant="secondary"
        title={\` Drop \${direction} \`}
        id={\`dropdown-button-drop-\${direction}\`}
        key={direction}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
  </ButtonToolbar>

  <ButtonToolbar>
    {['up', 'down', 'left', 'right'].map(direction => (
      <SplitButton
        drop={direction}
        variant="secondary"
        title={\`Drop \${direction}\`}
        id={\`dropdown-button-drop-\${direction}\`}
        key={direction}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ))}
  </ButtonToolbar>
</>
`;
const jsCode5 = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;
const jsCode6 = `
<DropdownButton
  alignRight
  title="Dropdown right"
  id="dropdown-menu-align-right"
>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton>
`;
const jsCode7 = `
<Dropdown.Menu show>
  <Dropdown.Header>Dropdown header</Dropdown.Header>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
</Dropdown.Menu>
`;
const jsCode8 = `
<Dropdown.Menu show>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</Dropdown.Menu>
`;
const jsCode9 = `
<ButtonToolbar>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown as={ButtonGroup}>
    <Button variant="info">mix it up style-wise</Button>
    <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</ButtonToolbar>
`;
const jsCode10 = `

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const {
      children,
      style,
      className,
      'aria-labelledby': labeledBy,
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  }
}

render(
  <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Custom toggle
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1">Red</Dropdown.Item>
      <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Orange
      </Dropdown.Item>
      <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>,
);
`;
