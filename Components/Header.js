import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}


Header.defaultProps = {
    title: "Shopping List"
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'darkslateblue',
        height: 50,
        padding: 12
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Header;
