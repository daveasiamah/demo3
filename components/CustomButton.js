import React from 'react';
import styled from 'styled-components';

const CustomButton = props =>(
	<ButtonContainer
	    onPress={() =>{alert('Hi');}}
		backgroundColor={props.backgroundColor}
	>
	  <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.TouchableOpacity`
      width: 100px;
	  height: 40px;
	  padding: 12px;
	  border-radius: 10px;
	  background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
    color: ${props => props.textColor};
	font-size: 15px;
	text-align: center;
`;