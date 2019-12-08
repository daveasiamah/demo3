import React from 'react';
import styled from 'styled-components';
import Tips from '../components/Tips';
import AppInputHeader from '../components/AppInputHeader';
import Product from '../components/Product';
import * as helpers from '../Helpers';
import AppStyles from '../styles/AppStyles';
import {ScrollView, Button} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

import { Notifications } from 'expo';

//var RNFS = require('react-native-fs');

export default class SelectProductScreen extends React.Component { 
   constructor(props) {
    super(props);
	this.props.navigation.setParams({goToAddProduct: this.goToAddProduct});
    this.state = { 
	    text: '',
	    loading: false,
		products: [],
		navvv: null
    };	
    this.navv = null;
    this.p = null;
	
	helpers.getProducts((pp => {
		//pp.ri = require(pp.img);
		this.setState({products: pp});
		}));

	console.log(this.state.products);
  }

  selectProduct = () => {
	showMessage({
			 message: `Going back to add sale screen with product sku ${this.p.sku}`,
			 type: 'info'
		 });
	
	this.navv.navigate('AddSale',{
		p: this.p,
	});  
  }
  
  goToAddProduct = () => {
	this.navv.navigate('AddProduct');  
  }
  
   static navigationOptions = ({navigation}) => {
	   return {
	   headerStyle: {
		   backgroundColor: AppStyles.headerBackground,
		   height: AppStyles.headerHeight / 2
	   },
	   headerTitle: () => <AppInputHeader w="80%" h="80%" xml={AppStyles.svg.headerStore} title="Select a product"/>,
	   headerTintColor: AppStyles.headerColor,
	   headerTitleStyle: {
		   
       }
	   
	   }
   
    };



  render() {
	  let navv = this.props.navigation;
	  this.navv = navv;
    return (
	        <Container>
			  <ScrollView>		     
				  <Tips/>
                  <SearchInput
				    placeholder="Product name or SKU"
				    onChangeText={text => {
						console.log(`Current text: ${text}`);
					}}
                  />
				  
				  {
					  this.state.products.map((p) => {
						  //console.log(p);					  
						  return  <ProductButton key={p['sku']} onPress={() => {this.p = p; this.selectProduct()}}><Product data={p}/></ProductButton>
					  })
				  }
                		  
			  </ScrollView>
			</Container>
    );
  }
  
}

const Container = styled.View`
                     flex: 1;
					 background-color: #fff;
					 justify-content: center;
					 align-items: center;
`;
					 
const SearchInput = styled.TextInput`
					 align-items: center;
					 border-radius: 5;
					 margin-top: 10px;
					 border: 1px solid #bbb;
					 padding: 10px;
					 margin-bottom: 20px;
					 color: #ccc;
`;

const ProductButton = styled.TouchableOpacity`

`;

