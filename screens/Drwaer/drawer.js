import * as React from "react";
import { Text, Container, List, ListItem, Content ,Icon,Button , View,  Switch ,Right,  Left ,  Body} from "native-base";
import {  Image } from 'react-native';

import { NavigationActions } from "react-navigation";
// import Right from "../../../theme/components/Right";
// import { Switch } from "react-native-switch";

const routes = [
	{
		route: "Home",
		caption: "Always Listening",
	},
	{
		route: "BlankPage",
		caption: "About Butterfly",
	},
	{
		route: "Login",
		caption: "Trash",
	},
	{
		route: "SpeechRoute",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any,
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					
					

					<List
						style={{ marginTop: 40 }}>
											
											
											<ListItem icon>
												<Left/>
												<Body>

			<Text>Always Listning</Text>

												</Body>
												
											 <Right>
											<Switch value={true} onTintColor='#D8CCEC' thumbTintColor='#6539B3'/>

												</Right>	 
												</ListItem>	
							
								<ListItem icon noBorder  >
            <Left >
              {/* <Button > */}
                <Icon active name="ios-information-circle-outline" />
              {/* </Button> */}
            </Left>
            <Body >
              <Text>About Butterfly</Text>
            </Body>
            
          </ListItem>

		  <ListItem noBorder icon  button onPress={() => this.props.navigation.navigate("Trashroute" )}  >
            <Left>
                <Icon active name="trash" />
            </Left>
            <Body>
              <Text>Trash</Text>
            </Body>
           
          </ListItem>
		  {/* <ListItem  style={{marginTop : '100%'}}>
            <Left>
							<Image  source={require('../../../../assets/signout.png')} style={{width: 30, height: 30  }} />

            </Left>
            <Body>
              <Text>Sign Out</Text>
            </Body>
           
          </ListItem> */}





						
					</List>
				</Content>
			</Container>
		);
	}
}
