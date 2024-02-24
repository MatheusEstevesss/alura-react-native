import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#D3D3D3',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        //this propertie elevation works only to Android (make shadow on the card)
        elevation: 4,

        //use this to make shadow on ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    infos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold'
    },
    distance: {
        fontSize: 12,
        lineHeight: 19
    }
})