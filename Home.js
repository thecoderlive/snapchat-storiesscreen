import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import FriendList from './FriendList'
import Stories from './Stories'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<FriendList item={item.friend_list}/>
<Stories item={item.stories}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});