import React, { Component } from 'react';
import { AppRegistry, Alert, StyleSheet, View,
    Image, Text, TouchableHighlight,
    TouchableNativeFeedback, TouchableOpacity,
    TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
    _onPressButton = () => {
        alert("you press");
    }
    render() {
        return (
            <View
                style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <TouchableHighlight
                    onPress = {this._onPressButton}
                    underlayColor = 'red'
                    onShowUnderlay = {() => {
                        alert("onShowUnderlay button!");
                    }}>
                    <View
                        style = {{
                            backgroundColor: 'green'
                        }}>
                        {/*<Image*/}
                            {/*style = {{*/}
                                {/*width: 100,*/}
                                {/*height: 30,*/}
                            {/*}}*/}
                            {/*source = {require('./images/touchablehighlight.png')}*/}
                        {/*/>*/}
                        <Text
                            style = {{
                                padding: 20,
                                color: 'white',
                                fontSize: 18
                            }}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress = {this._onPressButton}
                    useForeground = {false}>
                    <View
                        style = {{
                            width: 300,
                            height: 40,
                            margin: 20,
                            backgroundColor: 'blue'
                        }}>
                        <Text
                            style = {{
                                margin: 10,
                                fontSize: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity
                    onPress = {this._onPressButton}
                    activeOpacity = {0.7}>
                    <View
                        style = {{
                            width: 300,
                            height: 40,
                            margin: 20,
                            backgroundColor: 'red'
                        }}>
                        <Text
                            style = {{
                                margin: 10,
                                fontSize: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    //onPress = {this._onPressButton}
                    onLongPress = {() => {
                        alert("Long press");
                    }}
                    // onpressin: ấn vào
                    //onPressIn = {this._onPressButton}
                    // onpressout: khi thả tay ra
                    //onPressOut = {this._onPressButton}>
                    >
                    <View
                        style = {{
                            width: 300,
                            height: 40,
                            margin: 20,
                            backgroundColor: 'purple'
                        }}>
                        <Text
                            style = {{
                                margin: 10,
                                fontSize: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

AppRegistry.registerComponent('TouchableDemo', () => App);
