import React from 'react';
import { View, Text } from 'react-native';

const DescriptionItem = ({ title, content }) => {
    if (!title || !content) {
        return <></>;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text> : </Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        paddingVertical:10
    },
    title: {
        fontWeight: 'bold',
    },
    content: {
        flex:1,
        flexWrap: 'wrap',
        // flexShrink:1
    },
};


export default DescriptionItem;
