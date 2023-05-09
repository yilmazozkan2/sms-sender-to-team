import React from 'react'
import AddScreenStyle from '../../styles/AddScreen.Style'
import PhoneInput from 'react-native-phone-number-input';

export default function PhoneInputComponent({ phone, setPhone }) {
    return (
        <PhoneInput
            defaultValue={phone}
            defaultCode='TR'
            withShadow
            containerStyle={AddScreenStyle.phone_input}
            textContainerStyle={AddScreenStyle.phone_input}
            onChangeFormattedText={(e) => { setPhone(e) }}
        />
    )
}