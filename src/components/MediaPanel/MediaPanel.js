import React from 'react';
import {
    Button,
    Card,
    CardBlock,
    CardTitle,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            images: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        const images = this.state.images;
        if (nextProps.image && !images.includes(nextProps.image)) {

            images.push(nextProps.image);
            this.setState((state, props) => Object.assign({},
                state, { images, visibleImageIndex: images.length - 1 })
            )

        }
    }

    moveSlide(step) {
        const visibleImageIndex = this.state.visibleImageIndex + step;

        if (this.state.images[
            visibleImageIndex
        ]) this.setState((state, props) => Object.assign({},
            state,
            { visibleImageIndex }
        ));
    }

    toggle(activeTab) {
        if (this.state.activeTab !== activeTab) {
            this.setState((state, props) => Object.assign({},
                state,
                { activeTab })
            );
        }
    }

    render() {
        const images = this.state.images;
        const visibleImageIndex = this.state.visibleImageIndex;

        return (
            <div className="Media-Panel">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={this.state.activeTab === '1' ? "active" : ""}
                            onClick={() => this.toggle('1')}
                        >
                            Screenshots
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={this.state.activeTab === '2' ? "active" : ""}
                            onClick={() => this.toggle('2')}
                        >
                            Live Stream
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent
                    activeTab={this.state.activeTab}
                    className="Media-Panel-Tab-Content"
                >
                    <TabPane tabId="1" className="Media-Panel-Tab-Pane">
                        <Row>
                            <Col>
                                <Card className="borderless">
                                    <CardBlock>
                                        {images.length > 1 && <Button
                                            color="primary"
                                            disabled={visibleImageIndex === 0}
                                            onClick={() => this.moveSlide(-1)}
                                            outline
                                            size="sm"
                                        >Prev</Button>}
                                        {images.length > 1 && <Button
                                            color="primary"
                                            disabled={visibleImageIndex === images.length - 1}
                                            onClick={() => this.moveSlide(1)}
                                            outline
                                            size="sm"
                                        >Next</Button>}
                                    </CardBlock>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                {!!images.length && <img src={images[visibleImageIndex]} alt="screenshot" style={{ minHeight: "200px", minWidth: "200px" }} />}
                                {!images.length && <h5 style={{textAlign: "center"}}><em>Yo, I'm working on it</em></h5>}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <Card block>
                                    <CardTitle>Live Stream Video Coming Soon</CardTitle>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}