
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // 容器
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    topBar:{
        position:'relative',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1a1a1a',
        paddingTop:10,
        paddingBottom:10,
    },
    backWrap:{
        position:'absolute',
        top:0,
        left:15,
    },
    titleText:{
        color:'#fff',
        fontSize:17
    },
    arrowLeft:{
        transform: [{rotate:'180deg'}],
    },
    list:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
    },
    listItem:{
        flexDirection:'row',
        justifyContent:'center',
        height:60,
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8'
    },
    listItemLast:{
        borderBottomWidth:0
    },
    userInfo:{
        flexDirection:'row',
        justifyContent:'center',
        height:85,
        marginTop:20,
        marginBottom:20,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10,
    },
    userName:{
        lineHeight:85
    },
    listText:{
        flex:1,
        lineHeight:60,
        color:'#1a1a1a',
        fontSize:15
    },
    right:{
        flexDirection:'row',
        alignItems:'center'
    },
    rightText:{
        lineHeight:60,
        color:'rgba(74, 74, 74, 0.6)',
        fontSize:14
    },
    arrowRight:{
        lineHeight:60,
        color:'rgba(146, 146, 146, 0.8)',
        fontSize:12
    },
    button:{
        height:45,
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:20
    },
    buttonText:{
        color:'#ef5f57',
        lineHeight:45
    },
    avatar:{
        width:55,
        height:55,
        borderRadius:27,
        marginTop:15
    },
    avatarImg:{
        width:55,
        height:55,
        borderRadius:27,
    },
    new:{
        borderRadius:2,
        backgroundColor:'#ff5f5f',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:3,
        paddingRight:3,
        marginRight:5,
        height:15,
    },
    textNew:{
        color:'#fff',
        fontSize:11,
    },
    textRightSmall:{
        color:'#8a8a8a',
        fontSize:12
    }

})
