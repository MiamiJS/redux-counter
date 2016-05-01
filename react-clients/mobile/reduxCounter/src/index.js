import React, {View, Text} from 'react-native'

export default React.createClass({
  render (){
    return(
      <View style={container}>
        <Text>Hi</Text>
      </View>
    )
  }
})

const container = {
  flex: 1,
  justifyContent:'center',
  alignItems: 'center',
}
