import React from 'react';
import {Modal,Button, Icon, Header, Confirm} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';


export default class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render(){

    return(<div> 
            <Modal
            open={this.state.open}>
                <Modal.Content>
                     <Modal.Description>
                         <Header>It is a Modal Window! Welcome!</Header>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore incidunt iusto praesentium beatae rem quo perspiciatis quaerat quam consectetur dolorem eligendi aut id impedit, debitis corrupti reprehenderit hic in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde ratione nemo magnam nulla sit ipsum vero cum, saepe molestiae officiis esse quis? Blanditiis ducimus neque odit voluptas, ratione doloribus.</p>
                     </Modal.Description>
                </Modal.Content>

                 <Modal.Actions>
                <Button color='green' onClick={() => this.setState({ open: false })} inverted>
                    <Icon name='checkmark' /> ОК
                </Button>
        </Modal.Actions>
            </Modal>
          </div> 
        )
    }


    componentDidMount(){
        this.setState({ open: true })
        console.log(this.state)
        
    }
}







