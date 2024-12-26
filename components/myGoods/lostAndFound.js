import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SectionList,FlatList } from 'react-native';
import { lostGoods } from '../../data/myGoods/lostGoods';
import LostCard from './lostGoods'
export default function LostAndFound({navigation}){
    return(
        <View>
            <FlatList
        data = {lostGoods}
        renderItem={({item})=>{
          return(
          <LostCard navigation ={navigation} title = {item.title} context={item.context} url={item.url} time ={item.time} />
        );
        }}
        keyExtractor={(item) => item.id}  // 提供每个项的唯一键
        contentContainerStyle={{paddingBottom:100}}
      ></FlatList>
        </View>
    );
}