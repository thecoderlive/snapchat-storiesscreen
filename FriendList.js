import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const friendListItem = ({ item }) => (
<View style={styles.friend_list_item}>
<Image
    style={styles.friend_image}
    source={{uri: item.friend_image}}
    />
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.pseudonym}>{item.pseudonym}</Text>
</View>
  );

const FriendList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.friend_list}
    data={item}
    renderItem={friendListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default FriendList;

const styles = StyleSheet.create({
    'friend_image': {
        'width': '21vw',
        'height': '21vw',
        'borderRadius': 50,
        'marginHorizontal': 6,
        'marginTop': 8
    },
    'name': {
        'color': '#030202',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    },
    'pseudonym': {
        'color': '#8c8787',
        'fontSize': 14,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 2,
        'alignSelf': 'center',
        'marginBottom': 5
    }
});