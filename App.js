import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View , Image, Button} from 'react-native';

export default function App() {
  const [player,setPlayer]=useState(1);
  const [arr, setArr] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [image1,setImage1]=useState(require('./assets/white.jpg'));
  const [image2,setImage2]=useState(require('./assets/white.jpg'));
  const [image3,setImage3]=useState(require('./assets/white.jpg'));
  const [image4,setImage4]=useState(require('./assets/white.jpg'));
  const [image5,setImage5]=useState(require('./assets/white.jpg'));
  const [image6,setImage6]=useState(require('./assets/white.jpg'));
  const [image7,setImage7]=useState(require('./assets/white.jpg'));
  const [image8,setImage8]=useState(require('./assets/white.jpg'));
  const [image9,setImage9]=useState(require('./assets/white.jpg'));
  const checkResult=()=>{
    if (
      (arr[0][0] == player && arr[0][1] == player && arr[0][2] == player) ||
      (arr[0][0] == player && arr[1][0] == player && arr[2][0] == player) ||
      (arr[0][1] == player && arr[1][1] == player && arr[2][1] == player) ||
      (arr[0][2] == player && arr[1][2] == player && arr[2][2] == player) ||
      (arr[1][0] == player && arr[1][1] == player && arr[1][2] == player) ||
      (arr[2][0] == player && arr[2][1] == player && arr[2][2] == player) ||
      (arr[0][0] == player && arr[1][1] == player && arr[2][2] == player) ||
      (arr[0][2] == player && arr[1][1] == player && arr[2][0] == player)
    ) {
       console.warn('Player ',player,' has won ');
       reset();
       setPlayer(1);
    }
    else if(player==1){
      setPlayer(2);
    }else{
      setPlayer(1);
    }
    
  }
  const reset = ()=>{
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
       arr[i][j]=0;
      }
    }
    setImage1(require('./assets/white.jpg'));setImage4(require('./assets/white.jpg'));setImage7(require('./assets/white.jpg'));
    setImage2(require('./assets/white.jpg'));setImage5(require('./assets/white.jpg'));setImage8(require('./assets/white.jpg'));
    setImage3(require('./assets/white.jpg'));setImage6(require('./assets/white.jpg'));setImage9(require('./assets/white.jpg'));
    setPlayer(1);
  }
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <View style={{justifyContent:'center',alignItems:'center',margin:35}}><Text style={{fontSize:25,color:'red'}}>TIC TAC TOE GAME</Text>
      <Text style={{marginTop:15,fontSize:20,color:'blue'}}>PLayer {player} turn</Text></View>
    <View style={styles.container}>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image1==require('./assets/white.jpg')){
          if(player==1){
            setImage1(require('./assets/x.jpg'));
            arr[0][0]=1; 
            checkResult();
          }else{
            setImage1(require('./assets/O.jpg'));
            arr[0][0]=2;  checkResult(); 
          }
        }
      }}>
        <Image
        source={image1}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image2==require('./assets/white.jpg')){
          if(player==1){
            setImage2(require('./assets/x.jpg'));
            arr[0][1]=1; 
            checkResult();
          }else{
            setImage2(require('./assets/O.jpg'));
            arr[0][1]=2;  checkResult();
          }
        }
      }}>
        <Image
        source={image2}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image3==require('./assets/white.jpg')){
          if(player==1){
            setImage3(require('./assets/x.jpg'));
            arr[0][2]=1; 
            checkResult();
          }else{
            setImage3(require('./assets/O.jpg'));
            arr[0][2]=2;  checkResult();
          }
        }
      }}>
        <Image
        source={image3}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image4==require('./assets/white.jpg')){
          if(player==1){
            setImage4(require('./assets/x.jpg'));
            arr[1][0]=1; 
            checkResult();
          }else{
            setImage4(require('./assets/O.jpg'));
            arr[1][0]=2;  checkResult(); 
          }
        }
      }}>
        <Image
        source={image4}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image5==require('./assets/white.jpg')){
          if(player==1){
            setImage5(require('./assets/x.jpg'));
            arr[1][1]=1; 
            checkResult();
          }else{
            setImage5(require('./assets/O.jpg'));
            arr[1][1]=2;  checkResult();
          }
        }
      }}>
        <Image
        source={image5}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image6==require('./assets/white.jpg')){
          if(player==1){
            setImage6(require('./assets/x.jpg'));
            arr[1][2]=1; 
            checkResult();
          }else{
            setImage6(require('./assets/O.jpg'));
            arr[1][2]=2;  checkResult();
          }
        }
      }}>
        <Image
        source={image6}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image7==require('./assets/white.jpg')){
          if(player==1){
            setImage7(require('./assets/x.jpg'));
            arr[2][0]=1; 
            checkResult();
          }else{
            setImage7(require('./assets/O.jpg'));
            arr[2][0]=2;  checkResult();  
          }
        }
      }}>
        <Image
        source={image7}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image8==require('./assets/white.jpg')){
          if(player==1){
            setImage8(require('./assets/x.jpg'));
            arr[2][1]=1; 
            checkResult();
          }else{
            setImage8(require('./assets/O.jpg'));
            arr[2][1]=2;  checkResult(); 
          }
        }
      }}>
        <Image
        source={image8}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity>
      <TouchableOpacity
      style={{height:60,width:60,borderColor:'black',borderWidth:2,justifyContent:'center',alignItems:'center',margin:25}}
      onPress={()=>{
        if(image9==require('./assets/white.jpg')){
          if(player==1){
            setImage9(require('./assets/x.jpg'));
            arr[2][2]=1; 
            checkResult();
          }else{
            setImage9(require('./assets/O.jpg'));
            arr[2][2]=2;  checkResult(); 
          }
        }
      }}>
        <Image
        source={image9}
        style={{height:35,width:35}}></Image>
      </TouchableOpacity> 
      <TouchableOpacity style={{marginTop:15,height:60,width:150,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:10}}
      onPress={()=>{
        reset();
      }}>
        <Text>RESET</Text>
      </TouchableOpacity>     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
});
