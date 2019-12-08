import React from 'react';
import styled from 'styled-components';
import AppStyles from '../styles/AppStyles';
import SvgIcon from './SvgIcon';
import * as helpers from '../Helpers';


const AppHeader = props => (
<HeaderView>
  <SvgView>
     <SvgIcon xml={helpers.insertAppStyle(props.xml)} w={props.w} h={props.h}/>
  </SvgView>
  <TitleView>
  <Title>{props.title}</Title>
  </TitleView>
</HeaderView>  
);

export default AppHeader;


const Title = styled.Text`
 font-size: 24;
 font-family: ${AppStyles.fontFamily};
 margin-top: 5px;
 margin-left: 10px;
 margin-bottom: 30px;
 color: ${AppStyles.headerColor};
`;

const HeaderView = styled.View`
flex-direction: column;
`;

const SvgView = styled.View`
 margin-left: 20px;
 margin-right: 20px;
 margin-top: 60px;
 width: 100%;
 flex: 1;
`;

const TitleView = styled.View`

`;