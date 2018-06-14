
import React, { Component } from 'react';
import { View , Text , Image, StatusBar, TouchableWithoutFeedback, Platform, NativeModules} from 'react-native';
import { Modal , Toast } from 'antd-mobile';
import { styles } from './style';
// import { Icon } from '../../widgets/Icon/Icon';
// import { SafeAreaView } from '../../widgets/Safearea/Safearea';
// import { request , HOST } from '../../utils/request';
// import * as CacheManager from '@tencent/react-native-http-cache';
// import { LocalStorage } from '../../utils/storage';
// import { UserInfo } from '../../utils/userinfo';
// import { CheckVersion } from '../../widgets/CheckVersion/CheckVersion';
// import * as pack from '../../../package.json';


const CoralLogin = NativeModules.CoralLogin;

export class MineScreen extends React.Component {


    



    render() {
        


        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    {/* <View style={styles.backWrap}> */}
                    {/*     <Icon type="arrow" color="#fff" size={18} style={styles.arrowLeft} /> */}
                    {/* </View> */}
                    <Text style={styles.titleText}>我的</Text>
                </View>

                
                <View style={[styles.list]}>
                    <TouchableWithoutFeedback>
                        <View style={[styles.listItem]}>
                            <Text style={styles.listText}>帮助说明</Text>
                            <View style={styles.right}>
                                {/* <Icon type="arrow" style={styles.arrowRight} /> */}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.clearCache}>
                        <View style={[styles.listItem]}>
                            <Text style={styles.listText}>清除缓存</Text>
                            <View style={styles.right}>
                                <Text style={styles.rightText}>100M</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* <View style={[styles.listItem]}> */}
                    {/*     <Text style={styles.listText}>意见反馈</Text> */}
                    {/*     <View style={styles.right}> */}
                    {/*         <Icon type="arrow" style={styles.arrowRight} /> */}
                    {/*     </View> */}
                    {/* </View> */}
                    
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>退出当前帐号</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
