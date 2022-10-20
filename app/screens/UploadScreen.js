import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Text from '../components/Text';
import * as Progress from 'react-native-progress'
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>

            <View style={styles.container}>
                {progress < 1 ?
                    <Progress.Bar loop autoPlay color={colors.primary} progress={progress} /> :
                    <LottieView onAnimationFinish={onDone}  autoPlay loop={false} style={styles.animation} source={require("../assets/animations/done.json")} />}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center"
    },
    animation: {
        width: 150
    }
});

export default UploadScreen