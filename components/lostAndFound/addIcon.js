import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { AllStyle } from '../../style/style';

const AddIcon = () => {
    //控制模态框的显示和关闭
    const [modalVisible, setModalVisible] = useState(false);

    const startModalVisible = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* 点击按钮显示模态框 */}
            <TouchableOpacity style={styles.button} onPress={startModalVisible}>
                <Ionicons name="add" size={50} color="black" />
            </TouchableOpacity>

            {/* 使用 React Native 内建的 Modal 组件 */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                //模态框的背景是透明
                transparent={true}
                //onRequestClose 是一个函数回调，它会在用户尝试关闭模态框时被调用。这个方法通常在 Android 上按下返回键时触发
                onRequestClose={closeModal}>

            <View
            style={{
                flex:1,
                backgroundColor:'rgba(0,0,0,0.5)',
                justifyContent:"center",
                alignItems:"center",
            }}>
                <View
                style={{
                    // width:300,
                    // height:300,
                    backgroundColor:"white",
                    borderRadius:15,
                }}>
                    <Text>hi</Text>
                </View>
            </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        right: 20,
        zIndex: 999,
    },
    button: {
        backgroundColor: AllStyle.color.homeCard3,
        width: 70,
        height: 70,
        borderRadius: 50,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
});

export default AddIcon;

