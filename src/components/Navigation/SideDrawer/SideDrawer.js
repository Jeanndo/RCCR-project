import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import'./SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxilliary';

const sideDrawer = ( props ) => {  
    let attachedClasses = ['SideDrawer', 'Close']
    if(props.open){
       
        attachedClasses = ['SideDrawer', 'Open']
    }
   
    return  <Aux> 
              
      <Backdrop show ={props.open} clicked= {props.closed} />  
            <div className = {attachedClasses.join(' ')} >
            <div onClick={props.closed} style={{color:'red', width:'fit-content', padding:'0 20px', float:'right', fontSize:'21px', fontWeight:400, width:'100%', textAlign:'right'}} >x</div>
                    <Logo height='auto' width=""/>
                   
                    
                <nav>
                    <NavigationItems />
                </nav>
                <button onClick={props.closed} style={{color:'red', width:'fit-content', padding:'0 20px'}} >EXIT</button>
            </div>
        </Aux>
        }
    

export default sideDrawer;