import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default class Cronometro extends Component {

  constructor(props){
    super(props);
    this.state = {n:0, botao:'Vai'};
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let s = this.state;

    if(this.timer != null){
     this.pararTimer();
      s.botao = "Vai"       
    }      
    else{
      this.timer = setInterval(() => {        
        s.n += 0.1;
        this.setState(s);
      },100);   
      s.botao = "Parar"   
    }

    this.setState(s);
  }

  limpar(){
    if(this.timer != null)
      this.pararTimer();

    let s = this.state;
    s.n = 0;
    s.botao = 'Vai';
    this.setState(s);    
  }

  pararTimer(){    
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <View style={styles.body}>
          <Image source={require('./images/relogio.png')} />
          <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>

          <View style={styles.botaoArea}>
            <TouchableOpacity style={styles.botao} onPress={this.vai}>
              <Text style={styles.botaoText}>{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={this.limpar} >
              <Text style={styles.botaoText}>Limpar</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:25,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2c1f30'
  }, 
  timer:{
    color:'#baa07a',
    fontSize:80,
    fontWeight:'bold',
    backgroundColor:'transparent',
    marginTop: -150
  },
  botaoArea:{
    flexDirection:'row',
    height:40,
    marginTop:80
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#886532',
    height:40,
    margin:10,
    borderRadius:5
  },
  botaoText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#FFFFFF'
  }
});
